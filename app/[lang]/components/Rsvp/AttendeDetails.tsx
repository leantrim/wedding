import React, { useEffect } from 'react';
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
import DropDown, { SelectOptionType } from './common/DropDown';
import Radio from './common/Radio';
import TextField from './common/TextField';

type Props = {
	setValue: UseFormSetValue<RsvpFormData>;
	watch: UseFormWatch<RsvpFormData>;
	register: UseFormRegister<RsvpFormData>;
	control: Control<RsvpFormData, FormType>;
	errors: FieldErrors<RsvpFormData>;
	form: FormType;
	title: string;
	radioRegisterType: keyof RsvpFormData;
	dropdownRegisterType: keyof RsvpFormData;
	textFieldRegisterType: keyof RsvpFormData;
	radioTitle: string;
	allergieTextFieldTitle: string;
	menuTitle: string;
};

const AttendeDetails = (props: Props) => {
	const {
		setValue,
		control,
		register,
		errors,
		form,
		watch,
		title,
		radioRegisterType,
		dropdownRegisterType,
		textFieldRegisterType,
		radioTitle,
		allergieTextFieldTitle,
		menuTitle,
	} = props;

	const watchAllergies = watch(radioRegisterType, 'false');

	const foodMenu: SelectOptionType[] = [
		{ label: form.conventionalTitle, value: 'conventional' },
		{ label: form.vegeterianTitle, value: 'vegetarian' },
	];

	return (
		<Container>
			{title && <SubTitle>{title}</SubTitle>}
			<DropDown
				control={control}
				registerType={dropdownRegisterType}
				label={menuTitle}
				options={foodMenu}
				placeHolder={'please select'}
				register={register}
				setValue={setValue}
				defaultValue={foodMenu[0]}
			/>
			<AlergiesSection>
				<Radio
					firstOptionTitle={form.yes}
					secondOptionTitle={form.no}
					title={radioTitle}
					register={register}
					errors={errors}
					registerType={radioRegisterType}
				/>
				{watchAllergies === 'true' && (
					<TextField
						errorMessage={errors}
						register={register}
						registerType={textFieldRegisterType}
						title={allergieTextFieldTitle}
					/>
				)}
			</AlergiesSection>
		</Container>
	);
};

export const SubTitle = styled.div`
	margin-bottom: 12px;
	font-size: 18px;
	text-transform: uppercase;
`;

const AlergiesSection = styled.div`
	display: flex;
	width: 100%;
	flex-direction: column;
	gap: 12px;
`;

const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	gap: 24px;
	margin-bottom: 24px;
	border-radius: 12px;
`;

export default AttendeDetails;
