import React from 'react';
import {
	Control,
	FieldErrors,
	UseFormRegister,
	UseFormSetValue,
	UseFormWatch,
} from 'react-hook-form';
import styled from 'styled-components';
import { FormType } from '../../../../types/DictionaryTypes';
import { RsvpFormData } from '../../../../types/Form';
import AttendeDetails, { SubTitle } from './AttendeDetails';
import Radio from './common/Radio';
import TextField from './common/TextField';

type Props = {
	register: UseFormRegister<RsvpFormData>;
	form: FormType;
	errors: FieldErrors<RsvpFormData>;
	setValue: UseFormSetValue<RsvpFormData>;
	watch: UseFormWatch<RsvpFormData>;
	control: Control<RsvpFormData, FormType>;
};

const Companion = (props: Props) => {
	const { register, form, errors, control, setValue, watch } = props;

	const watchCompanion = watch('companion', 'false');

	return (
		<>
			<Radio
				errors={errors}
				register={register}
				registerType={'companion'}
				title={form.companion}
				firstOptionTitle={form.yes}
				secondOptionTitle={form.no}
			/>
			{watchCompanion === 'true' && (
				<CompanionContainer>
					<SubTitle>{form.companionTitle}</SubTitle>

					<FieldContainer>
						<TextField
							errorMessage={errors}
							register={register}
							registerType={'companionName'}
							title={form.companionNameTitle}
						/>
					</FieldContainer>
					<AttendeDetails
						control={control}
						setValue={setValue}
						watch={watch}
						errors={errors}
						form={form}
						title={''}
						radioTitle={form.attendeAllergiesTitle}
						register={register}
						radioRegisterType={'companionAllergies'}
						dropdownRegisterType={'companionMenu'}
						textFieldRegisterType={'companionAllergiesDetails'}
						allergieTextFieldTitle={form.specificAllergieQuestion}
						menuTitle={form.companionMenuTitle}
					/>
				</CompanionContainer>
			)}
		</>
	);
};

const FieldContainer = styled.div`
	margin-top: 12px;
	margin-bottom: 24px;
`;

const CompanionContainer = styled.div`
	display: flex;
	flex-direction: column;
	border-radius: 12px;
	margin-top: 12px;
`;

export default Companion;
