import React from 'react';
import { FieldErrors, UseFormRegister, UseFormWatch } from 'react-hook-form';
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
				<a
					href={`#${MenusType.Transport}`}
					style={{
						marginTop: '12px',
						marginBottom: '12px',
						textDecoration: 'underline',
					}}
				>
					<span>{form.transportTip}</span>
				</a>
			)}
		</div>
	);
};

export default Transport;
