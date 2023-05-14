import React, { useState, useEffect } from 'react';
import {
	Control,
	Controller,
	UseFormRegister,
	UseFormSetValue,
	UseFormWatch,
} from 'react-hook-form';
import Select from 'react-select';
import styled from 'styled-components';
import { FormType } from '../../../../../types/DictionaryTypes';
import { RsvpFormData } from '../../../../../types/Form';

type Props = {
	control: Control<RsvpFormData, FormType>;
	options: SelectOptionType[];
	placeHolder: string;
	label: string;
	registerType: keyof RsvpFormData;
	register: UseFormRegister<RsvpFormData>;
	setValue: UseFormSetValue<RsvpFormData>;
	defaultValue?: SelectOptionType;
};

export type SelectOptionType = {
	label: string;
	value: string;
};

const DropDown = (props: Props) => {
	const {
		control,
		options,
		registerType,
		placeHolder,
		register,
		setValue,
		label,
		defaultValue,
	} = props;
	const [initated, setInitated] = useState(false);

	const handleChange = (e: any) => {
		setValue(registerType, e.value);
	};

	useEffect(() => {
		register(registerType);
	}, [register]);

	// useEffect(() => {
	// 	if (!initated) {
	// 		setValue(registerType, 'conventional');
	// 		setInitated(true);
	// 	}
	// }, []);

	return (
		<DropDownContainer>
			<Label>
				<>{label}</>
			</Label>
			<Controller
				name={registerType}
				control={control}
				render={() => (
					<Select
						options={options}
						onChange={handleChange}
						placeholder={placeHolder}
						required
						defaultValue={defaultValue}
					/>
				)}
				rules={{ required: true }}
			/>
		</DropDownContainer>
	);
};

const Label = styled.div`
	padding-bottom: 12px;
`;

const DropDownContainer = styled.div`
	z-index: 999;
`;

export default DropDown;
