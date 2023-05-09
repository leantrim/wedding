import React from 'react';
import styled from 'styled-components';
import { RsvpFormData } from '../../../types/Form';
import { Button, StyledNumber } from './Table/Index';

type Props = {
	newForms: RsvpFormData[];
	setShowNewFormsOnly: (value: React.SetStateAction<boolean>) => void;
	clearFilters: () => void;
	showNewFormsOnly: boolean;
	setNewFormSinceLastViewed: (value: React.SetStateAction<boolean>) => void;
};

const NewForms = (props: Props) => {
	const {
		newForms,
		setShowNewFormsOnly,
		clearFilters,
		showNewFormsOnly,
		setNewFormSinceLastViewed,
	} = props;

	return (
		<DisplayNewForms>
			<div>
				Great news, there are{' '}
				<StyledNumber style={{ color: 'white' }}>
					{newForms.length}
				</StyledNumber>{' '}
				new forms submitted since you last viewed!
			</div>
			<Button
				onClick={() => {
					setShowNewFormsOnly(!showNewFormsOnly);
					clearFilters();
				}}
			>
				{showNewFormsOnly ? 'Show All Forms' : 'Show New Form(s)'}
			</Button>
			<Button
				onClick={() => {
					setNewFormSinceLastViewed(false);
					clearFilters();
				}}
			>
				Dismiss
			</Button>
		</DisplayNewForms>
	);
};

const DisplayNewForms = styled.div`
	background-color: #62ce62;
	padding: 12px;
	margin-top: 12px;
	border-radius: 8px;
	font-weight: bold;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	gap: 12px;
`;

export default NewForms;
