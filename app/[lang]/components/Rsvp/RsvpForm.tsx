import React, { useEffect, useState } from 'react';
import { Resolver, useForm } from 'react-hook-form';
import { FormType } from '../../../../types/DictionaryTypes';
import { RsvpFormData } from '../../../../types/Form';
import { Title } from '../WhenAndWhere/WhenAndWhere';
import {
	Error,
	Form,
	Label,
	Row,
	StyledInput,
	SubmitButton,
	LabelDiv,
	ColumnContainer,
} from './common/Styles';
import TextField from './common/TextField';
import Radio from './common/Radio';
import Companion from './Companion';
import Transport from './Transport';
import AttendeDetails from './AttendeDetails';
import styled from 'styled-components';

type Props = {
	onSubmit: (data: RsvpFormData) => void;
	form: FormType;
	setIsAttending: (value: boolean) => void;
	isAttending: boolean;
};

const resolver: Resolver<RsvpFormData, FormType> = async (
	values,
	context,
	options
) => {
	const errors: Partial<
		Record<keyof RsvpFormData, { type: string; message: string }>
	> = {};

	if (!values.name) {
		errors.name = { type: 'required', message: context?.firstNameValidation! };
	}

	if (!values.surname) {
		errors.surname = {
			type: 'required',
			message: context?.lastNameValidation!,
		};
	}

	if (!values.attendance) {
		errors.attendance = {
			type: 'required',
			message: context?.attendanceValidation!,
		};
	}

	if (values.attendance === 'true') {
		if (!values.transport) {
			errors.transport = {
				type: 'required',
				message: context?.radioValidation!,
			};
		}

		if (!values.allergies) {
			errors.allergies = {
				type: 'required',
				message: context?.radioValidation!,
			};
		}

		if (!values.allergiesDetails && values.allergies === 'true') {
			errors.allergiesDetails = {
				type: 'required',
				message: context?.textFieldValidation!,
			};
		}
		if (!values.companion) {
			errors.companion = {
				type: 'required',
				message: context?.radioValidation!,
			};
		}
	}

	if (values.companion === 'true') {
		if (!values.companionAllergies) {
			errors.companionAllergies = {
				type: 'required',
				message: context?.radioValidation!,
			};
		}
		if (!values.companionName) {
			errors.companionName = {
				type: 'required',
				message: context?.textFieldValidation!,
			};
		}
		if (values.companionAllergies === 'true') {
			if (!values.companionAllergiesDetails) {
				errors.companionAllergiesDetails = {
					type: 'required',
					message: context?.textFieldValidation!,
				};
			}
		}
	}

	return {
		values: Object.keys(errors).length ? {} : values,
		errors,
	};
};

const RsvpForm = (props: Props) => {
	const { onSubmit, form, setIsAttending, isAttending } = props;
	const [isPageLoaded, setIsPageLoaded] = useState(false);
	const {
		register,
		handleSubmit,
		control,
		formState: { errors },
		watch,
		setValue,
	} = useForm<RsvpFormData, FormType>({
		resolver: (values, _context, options) => resolver(values, form, options),
	});
	const watchAttendance = watch('attendance', 'false');

	useEffect(() => {
		if (watchAttendance !== undefined) {
			setIsAttending(watchAttendance === 'true');
		}
	}, [watchAttendance]);

	useEffect(() => {
		setIsPageLoaded(true);
	}, []);

	return (
		<>
			<Form onSubmit={handleSubmit(onSubmit)}>
				<Title
					style={{
						textAlign: 'center',
						color: '#444',
					}}
				>
					RSVP
				</Title>
				<p
					style={{
						textAlign: 'center',
						color: '#676767',
						margin: '0',
					}}
				>
					{form.info}
				</p>
				<ColumnContainer>
					<TextField
						errorMessage={errors}
						register={register}
						registerType={'name'}
						title={form.firstName}
						requiredMessage={form.firstNameValidation}
					/>
					<TextField
						errorMessage={errors}
						register={register}
						registerType={'surname'}
						title={form.lastName}
						requiredMessage={form.lastNameValidation}
					/>
				</ColumnContainer>

				<Radio
					errors={errors}
					firstOptionTitle={form.yes}
					secondOptionTitle={form.no}
					register={register}
					registerType={'attendance'}
					title={form.attendanceTitle}
					center
				/>

				{isAttending && (
					<>
						<AttendeDetails
							control={control}
							register={register}
							setValue={setValue}
							errors={errors}
							form={form}
							watch={watch}
							radioRegisterType={'allergies'}
							dropdownRegisterType={'menu'}
							textFieldRegisterType={'allergiesDetails'}
							title={form.formAttendeDetailsTitle}
							radioTitle={form.attendeAllergiesTitle}
							allergieTextFieldTitle={form.specificAllergieQuestion}
							menuTitle={'Menu'}
						/>
						<Companion
							form={form}
							register={register}
							errors={errors}
							control={control}
							setValue={setValue}
							watch={watch}
						/>
						<Transport
							errors={errors}
							form={form}
							register={register}
							watch={watch}
						/>
					</>
				)}
				<Row style={{ marginBottom: '0', marginTop: '25px' }}>
					<SubmitButton type='submit' disabled={!isPageLoaded}>
						{form.submitLabel}
					</SubmitButton>
				</Row>
			</Form>
		</>
	);
};

export default RsvpForm;
