import React from 'react';
import styled from 'styled-components';
import { FormType } from '../../../../types/DictionaryTypes';
import { MenusType } from '../../../../types/Menus';
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
		<Container id={MenusType.RSVP}>
			<RsvpForm onSubmit={onSubmit} form={form} />
		</Container>
	);
};

const Container = styled.div`
	@media (max-width: 768px) {
		display: flex;
		flex-direction: column;
		height: 100%;
	}
	padding: 48px 24px;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export default Rsvp;
