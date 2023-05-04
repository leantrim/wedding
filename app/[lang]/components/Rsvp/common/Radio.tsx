import React from 'react';
import { FieldErrors, UseFormRegister } from 'react-hook-form';
import styled from 'styled-components';
import { RsvpFormData } from '../../../../../types/Form';
import { Error } from './Styles';

type Props = {
	register: UseFormRegister<RsvpFormData>;
	errors: FieldErrors<RsvpFormData>;
	title: string;
	registerType: keyof RsvpFormData;
	firstOptionTitle: string;
	secondOptionTitle: string;
	onSelectOption?: (value: boolean) => void;
	center?: boolean;
};

const Radio = (props: Props) => {
	const {
		register,
		errors,
		title,
		firstOptionTitle,
		secondOptionTitle,
		registerType,
		center,
	} = props;

	return (
		<Container>
			<RadioContainer isCenter={center}>
				<Label>{title} *</Label>
				<RadioButtonsContainer>
					<LabelContainer>
						<StyledLabel>
							<StyledRadio
								{...register(registerType)}
								type='radio'
								value='true'
							/>
							{firstOptionTitle}
						</StyledLabel>
					</LabelContainer>
					<LabelContainer>
						<StyledLabel>
							<StyledRadio
								{...register(registerType)}
								type='radio'
								value='false'
							/>
							{secondOptionTitle}
						</StyledLabel>
					</LabelContainer>
				</RadioButtonsContainer>
				{errors[registerType] && (
					<ErrorContainer>
						<Error>{errors[registerType]?.message}</Error>
					</ErrorContainer>
				)}
			</RadioContainer>
		</Container>
	);
};

const RadioButtonsContainer = styled.div`
	display: flex;
	gap: 14px;
`;

const Container = styled.div`
	width: 100%;
`;

const ErrorContainer = styled.div``;

type RadioContainerProps = {
	isCenter?: boolean;
};

const RadioContainer = styled.div<RadioContainerProps>`
	display: flex;
	align-items: ${(props) => (props.isCenter ? 'center' : 'start')};
	flex-direction: column;
	gap: 12px;
	margin-top: 8px;
	justify-content: center;
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

export default Radio;
