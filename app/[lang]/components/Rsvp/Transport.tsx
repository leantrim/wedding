import React from 'react';
import { FieldErrors, UseFormRegister, UseFormWatch } from 'react-hook-form';
import styled from 'styled-components';
import { FormType } from '../../../../types/DictionaryTypes';
import { RsvpFormData } from '../../../../types/Form';
import { MenusType } from '../../../../types/Menus';
import Radio from './common/Radio';

type Props = {
	register: UseFormRegister<RsvpFormData>;
	errors: FieldErrors<RsvpFormData>;
	form: FormType;
	watch: UseFormWatch<RsvpFormData>;
};

const Transport = (props: Props) => {
	const { errors, register, form, watch } = props;

	const watchTransport = watch('transport', 'false');
	console.log(form.transportTitle);

	return (
		<div>
			<Radio
				errors={errors}
				firstOptionTitle={form.yes}
				secondOptionTitle={form.no}
				register={register}
				registerType={'transport'}
				title={form.transportTitle}
			/>

			{watchTransport === 'true' && (
				<StyledA href={`#${MenusType.Transport}`}>
					<span>{form.transportTip}</span>
				</StyledA>
			)}
		</div>
	);
};

const StyledA = styled.a`
	margin-top: 12px;
	margin-bottom: 12px;
	text-decoration: underline;
`;

export default Transport;
