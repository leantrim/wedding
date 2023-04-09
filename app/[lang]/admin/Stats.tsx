'use client';
import React from 'react';
import styled from 'styled-components';
import { RsvpFormData } from '../../../types/Form';

type Props = {
	forms: RsvpFormData[];
};

const Stats = (props: Props) => {
	const { forms } = props;

	const peopleAttending = forms.reduce((acc, curr) => {
		if (curr.attendance === 'true') {
			acc += 1;
		}
		return acc;
	}, 0);

	const peopleNotAttending = forms.reduce((acc, curr) => {
		if (curr.attendance === 'false') {
			acc += 1;
		}
		return acc;
	}, 0);
	const peopleNeedTransport = forms.reduce((acc, curr) => {
		if (curr.transport === 'true') {
			acc += 1;
		}
		return acc;
	}, 0);
	return (
		<Container>
			<DisplayStats>People attending: {peopleAttending}</DisplayStats>
			<DisplayStats>People Not attending: {peopleNotAttending}</DisplayStats>
			<DisplayStats>Need Transport: {peopleNeedTransport}</DisplayStats>
			<DisplayStats>Total Forms Submitted: {forms.length}</DisplayStats>
		</Container>
	);
};

const DisplayStats = styled.div`
	padding: 12px 12px;
	margin: 12px;
	background-color: #cfcbcb;
`;

const Container = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: center;
	background-color: #f5f5f5;
	@media (max-width: 768px) {
		flex-direction: column;
	}
	font-weight: bold;
`;

export default Stats;
