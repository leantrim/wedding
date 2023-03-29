import React, { useEffect, useState } from 'react';
import { Resolver, useForm } from 'react-hook-form';
import styled from 'styled-components';
import { FormType } from '../../../../types/DictionaryTypes';
import { MenusType } from '../../../../types/Menus';
import { SiteConfig } from '../../config';
import { Title } from '../WhenAndWhere/WhenAndWhere';
import { FormData } from './Rsvp';
import RsvpRadio, {
	LabelContainer,
	RadioContainer,
	StyledLabel,
	StyledRadio,
} from './RsvpRadio';

type Props = {
	onSubmit: (data: FormData) => void;
	form: FormType;
};

const resolver: Resolver<FormData, FormType> = async (
	values,
	context,
	options
) => {
	const errors: Partial<
		Record<keyof FormData, { type: string; message: string }>
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

	if (!values.transport && values.attendance === 'true') {
		errors.transport = {
			type: 'required',
			message: context?.transportValidation!,
		};
	}

	if (!values.attendance) {
		errors.attendance = {
			type: 'required',
			message: context?.attendanceValidation!,
		};
	}

	return {
		values: Object.keys(errors).length ? {} : values,
		errors,
	};
};

const RsvpForm = (props: Props) => {
	const { onSubmit, form } = props;
	const [isPageLoaded, setIsPageLoaded] = useState(false);
	const [isAttending, setIsAttending] = useState(false);
	const [hasChoosenAttendance, setHasChoosenAttendance] = useState(false);
	const {
		register,
		handleSubmit,
		formState: { errors },
		watch,
	} = useForm<FormData, FormType>({
		resolver: (values, _context, options) => resolver(values, form, options),
	});
	const watchAttendance = watch('attendance', undefined);
	const watchTransport = watch('transport', undefined);

	useEffect(() => {
		if (watchAttendance !== undefined) {
			setIsAttending(watchAttendance === 'true');
			setHasChoosenAttendance(true);
		}
	}, [watchAttendance]);

	console.log(isAttending);
	useEffect(() => {
		setIsPageLoaded(true);
	}, []);

	return (
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
			<Row>
				<NameContainer>
					<LabelDiv>
						<Label>{form.firstName} *</Label>
						<StyledInput
							{...register('name', { required: form.firstNameValidation })}
							type='text'
						/>
						{errors.name && <Error>{errors.name.message}</Error>}
					</LabelDiv>
					<LabelDiv>
						<Label>{form.lastName} *</Label>
						<StyledInput {...register('surname')} type='text' />
						{errors.surname && <Error>{errors.surname.message}</Error>}
					</LabelDiv>
				</NameContainer>
			</Row>
			<RsvpRadio
				errors={errors}
				form={form}
				register={register}
				isAttending={isAttending}
				hasChoosenAttendance={hasChoosenAttendance}
			/>

			{isAttending && (
				<Row>
					<LabelDiv>
						<Label>{form.companion}</Label>
						<StyledInput {...register('companion')} type='text' />
						{errors.companion && <Error>{errors.companion.message}</Error>}
					</LabelDiv>
				</Row>
			)}
			{isAttending && (
				<LabelDiv style={{ display: 'flex', flexDirection: 'column' }}>
					<div style={{ display: 'flex' }}>
						<Label>{form.transportTitle} *</Label>
						<RadioContainer style={{ marginTop: '0px', marginLeft: '12px' }}>
							<LabelContainer>
								<StyledLabel>
									<StyledRadio
										{...register('transport')}
										type='radio'
										value='true'
									/>
									{form.yes}
								</StyledLabel>
							</LabelContainer>
							<LabelContainer>
								<StyledLabel>
									<StyledRadio
										{...register('transport')}
										type='radio'
										value='false'
									/>
									{form.no}
								</StyledLabel>
							</LabelContainer>
						</RadioContainer>
					</div>
					{errors.transport && <Error>{errors.transport?.message}</Error>}
					{watchTransport === 'true' && (
						<a
							href={`#${MenusType.Transport}`}
							style={{
								marginTop: '12px',
								marginBottom: '12px',
								textDecoration: 'underline',
							}}
						>
							<span>click here for more info regarding transport!</span>
						</a>
					)}
				</LabelDiv>
			)}
			<Row style={{ marginBottom: '0', marginTop: '25px' }}>
				<SubmitButton type='submit' disabled={!isPageLoaded}>
					{form.submitLabel}
				</SubmitButton>
			</Row>
		</Form>
	);
};

const LabelDiv = styled.div`
	width: 100%;
`;

const NameContainer = styled.div`
	display: flex;
	justify-content: space-between;
	flex-direction: row;
	gap: 12px;
`;

const Label = styled.label`
	display: block;
	margin-bottom: 4px;
	font-size: 16px;
`;

const Form = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	gap: 12px;
	max-width: 600px;
	width: 100%;
	height: 100%;
`;

const Row = styled.div`
	display: flex;
	flex-direction: column;
`;

const StyledInput = styled.input`
	border: 1px solid #ccc;
	border-radius: 4px;
	height: 32px;
	width: 100%;

	&:focus {
		border: 2px solid #999;
		outline: none;
		box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2);
	}
`;

export const Error = styled.span`
	color: red;
	font-size: 12px;
	margin-left: 8px;
`;

const SubmitButton = styled.button`
	background-color: ${SiteConfig.colors.primaryDarker};
	border: none;
	color: white;
	padding: 15px 32px;
	text-align: center;
	text-decoration: none;
	display: inline-block;
	font-size: 16px;
	margin: 4px 2px;
	cursor: pointer;
	z-index: 1;
	border-radius: 4px;

	&:disabled {
		background-color: #999;
		cursor: not-allowed;
	}
	:hover {
		background-color: #5a5247;
	}
`;

export default RsvpForm;
