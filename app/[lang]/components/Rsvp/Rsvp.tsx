import React from 'react';
import styled from 'styled-components';
import { FormType } from '../../../../types/DictionaryTypes';
import { Title } from '../WhenAndWhere/WhenAndWhere';
import RsvpForm from './RsvpForm';

export type FormData = {
	name: string;
	surname: string;
	companion: string;
	transport: string;
	attendance: string;
};

type Props = {
	form: FormType;
};

const Rsvp = (props: Props) => {
	const { form } = props;
	const onSubmit = (data: FormData) => {
		console.log(data);
	};

	return (
		<Container>
			<Title
				style={{
					textAlign: 'center',
					color: '#444',
					marginBottom: '24px',
				}}
			>
				RSVP
			</Title>
			<p
				style={{
					textAlign: 'center',
					color: '#676767',
					margin: '0 12px',
					marginBottom: '12px',
				}}
			>
				{form.info}
			</p>
			<RsvpForm onSubmit={onSubmit} form={form} />
		</Container>
	);
};

const Container = styled.div`
	padding-bottom: 48px;
	padding-top: 48px;
`;

export default Rsvp;
