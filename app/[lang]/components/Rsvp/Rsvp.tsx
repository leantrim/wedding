import React, { useEffect, useState } from 'react';
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
	const [height, setHeight] = useState<number>(0);

	useEffect(() => {
		// Set initial height on mount
		setHeight(window.innerHeight);
	}, []);

	return (
		<Container id={MenusType.RSVP} currentHeight={height}>
			<RsvpForm onSubmit={onSubmit} form={form} />
		</Container>
	);
};

type StyleProps = {
	currentHeight: number;
};

const Container = styled.div<StyleProps>`
	@media (max-width: 768px) {
		min-height: ${({ currentHeight }) => currentHeight}px;
		height: 100%;
		position: relative;
		padding-bottom: 60px;
	}
	padding: 48px 24px;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export default Rsvp;
