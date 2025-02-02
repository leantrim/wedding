import React, { useState } from 'react';
import { FieldErrors, UseFormRegister } from 'react-hook-form';
import styled from 'styled-components';
import { FormType } from '../../../../../types/DictionaryTypes';
import { RsvpFormData } from '../../../../../types/Form';
import { Error } from './Styles';

type Props = {
	register: UseFormRegister<RsvpFormData>;
	errors: FieldErrors<RsvpFormData>;
	form: FormType;
	isAttending: boolean;
};

const RsvpRadio = (props: Props) => {
	const { register, errors, form, isAttending } = props;
	const [hasChoosenAttendance, setHasChoosenAttendance] = useState(false);
	return (
		<Container>
			<LabelDiv>
				<Label>{form.attendanceTitle} *</Label>
				<RadioContainer>
					<LabelContainer>
						<StyledLabel>
							<StyledRadio
								{...register('attendance')}
								type='radio'
								value='true'
								onClick={() => setHasChoosenAttendance(true)}
							/>
							{form.yes}
						</StyledLabel>
					</LabelContainer>
					<LabelContainer>
						<StyledLabel>
							<StyledRadio
								{...register('attendance')}
								type='radio'
								value='false'
								onClick={() => setHasChoosenAttendance(true)}
							/>
							{form.no}
						</StyledLabel>
					</LabelContainer>
				</RadioContainer>
				{errors.attendance && <Error>{errors.attendance?.message}</Error>}
			</LabelDiv>
			{hasChoosenAttendance && (
				<Span>{isAttending ? form.attendingText : form.notAttendingText}</Span>
			)}
		</Container>
	);
};

const Span = styled.span`
	background-color: #d6c9b66b;
	padding: 17px;
	border-radius: 8px;
	margin-top: 12px;
`;

const Container = styled.div`
	align-items: center;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	text-align: center;
`;

export const StyledLabel = styled.label`
	display: flex;
	align-items: center;
	cursor: pointer;
`;

export const LabelContainer = styled.label`
	&:hover,
	input:hover {
		cursor: pointer;
	}
`;

export const StyledRadio = styled.input.attrs({ type: 'radio' })`
	-webkit-appearance: none;
	-moz-appearance: none;
	appearance: none;
	border: 1px solid #999;
	width: 16px;
	height: 16px;
	cursor: pointer;
	outline: none;
	position: relative;
	display: inline-block;
	vertical-align: middle;
	margin-right: 4px;
	background-color: #c1b5a3;
	border-radius: 0;

	&:checked {
		background-color: #766d60;
	}

	&:checked::after {
		content: '';
		display: block;
		position: absolute;
		top: 50%;
		left: 50%;
		width: 8px;
		height: 8px;
		border-radius: 0;
	}
`;

const Label = styled.label`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const LabelDiv = styled.div`
	width: 100%;
	text-align: center;
`;

export const RadioContainer = styled.div`
	display: flex;
	gap: 12px;
	justify-content: center;
	margin-top: 8px;
`;

export default RsvpRadio;
