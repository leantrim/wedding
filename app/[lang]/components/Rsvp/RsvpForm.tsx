import React, { useEffect, useState } from 'react';
import { Resolver, useForm } from 'react-hook-form';
import styled from 'styled-components';
import { FormType } from '../../../../types/DictionaryTypes';
import { FormData } from './Rsvp';
import RsvpRadio from './RsvpRadio';

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

	if (!values.transport) {
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
	const {
		register,
		handleSubmit,
		formState: { errors },
		watch,
	} = useForm<FormData, FormType>({
		resolver: (values, _context, options) => resolver(values, form, options),
	});
	const watchAttendance = watch('attendance', 'false');

	useEffect(() => {
		setIsAttending(watchAttendance === 'true');
	}, [watchAttendance]);

	console.log(isAttending);
	useEffect(() => {
		setIsPageLoaded(true);
	}, []);

	return (
		<FormContainer>
			<Form onSubmit={handleSubmit(onSubmit)}>
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
				/>

				{isAttending && (
					<Row>
						<LabelDiv>
							<Label>{form.companion}</Label>
							<StyledInput {...register('companion')} />
							{errors.companion && <Error>{errors.companion.message}</Error>}
						</LabelDiv>
					</Row>
				)}
				<Row style={{ marginBottom: '0' }}>
					<SubmitButton type='submit' disabled={!isPageLoaded}>
						{form.submitLabel}
					</SubmitButton>
				</Row>
			</Form>
		</FormContainer>
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

const FormContainer = styled.div`
	display: flex;
	justify-content: center;
	padding-left: 12px;
	padding-right: 12px;
`;

const Label = styled.label`
	display: block;
	margin-bottom: 4px;
`;

const Form = styled.form`
	max-width: 600px;
	width: 100%;
`;

const Row = styled.div`
	display: flex;
	flex-direction: column;
	margin-bottom: 24px;
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
	background-color: #766d60;
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
