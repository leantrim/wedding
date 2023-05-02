import React from 'react';
import { FieldErrors, UseFormRegister } from 'react-hook-form';
import styled from 'styled-components';
import { RsvpFormData } from '../../../../../types/Form';
import { Error, Label, LabelDiv, StyledInput } from './Styles';

type Props = {
	title: string;
	register: UseFormRegister<RsvpFormData>;
	registerType: keyof RsvpFormData;
	errorMessage: FieldErrors<RsvpFormData>;
	requiredMessage?: string;
};

const TextField = (props: Props) => {
	const { title, register, errorMessage, registerType, requiredMessage } =
		props;
	return (
		<LabelDiv>
			<Label>
				{title} {requiredMessage && '*'}
			</Label>
			<StyledInput
				{...register(registerType)}
				type='text'
				placeholder='  ...'
			/>
			{errorMessage[registerType] && (
				<Error>{errorMessage[registerType]?.message}</Error>
			)}
		</LabelDiv>
	);
};

export default TextField;
