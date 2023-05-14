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
			if (curr.companion === 'true') {
				acc += 1;
			}
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
			if (curr.companion === 'true') {
				acc += 1;
			}
		}
		return acc;
	}, 0);

	const vegeterians = forms.reduce((acc, curr) => {
		if (curr.attendance === 'true') {
			if (curr.menu === 'vegetarian') {
				acc += 1;
			}
			if (curr.companion === 'true' && curr.companionMenu === 'vegetarian') {
				acc += 1;
			}
		}

		return acc;
	}, 0);

	const conventionals = forms.reduce((acc, curr) => {
		if (curr.attendance === 'true') {
			if (curr.menu === 'conventional') {
				acc += 1;
			}
			if (curr.companion === 'true' && curr.companionMenu === 'conventional') {
				acc += 1;
			}
		}

		return acc;
	}, 0);

	return (
		<Container>
			<DisplayStats>
				People attending (including companion): {peopleAttending}
			</DisplayStats>
			<DisplayStats>People Not attending: {peopleNotAttending}</DisplayStats>
			<DisplayStats>Need Transport: {peopleNeedTransport}</DisplayStats>
			<DisplayStats>Conventionals: {conventionals}</DisplayStats>
			<DisplayStats>Vegeterians: {vegeterians}</DisplayStats>
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
	font-size: 14px;
`;

export default Stats;
