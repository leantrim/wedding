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
				center
			/>
			{watchCompanion === 'true' && (
				<CompanionContainer>
					<SubTitle style={{ marginTop: '12px', marginLeft: '12px' }}>
						{form.companionTitle}
					</SubTitle>

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
						allergieTextFieldTitle={form.companionAllergiesTitle}
					/>
					<FieldContainer>
						<TextField
							errorMessage={errors}
							register={register}
							registerType={'companionName'}
							title={form.companionNameTitle}
						/>
					</FieldContainer>
				</CompanionContainer>
			)}
		</>
	);
};

const FieldContainer = styled.div`
	margin: 12px;
	margin-top: 0px;
`;

const CompanionContainer = styled.div`
	display: flex;
	flex-direction: column;
	background-color: #c1b5a3;
	border-radius: 12px;
`;

export default Companion;
