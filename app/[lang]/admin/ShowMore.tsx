import React from 'react';
import styled from 'styled-components';
import { RsvpFormData } from '../../../types/Form';
import { Button, StyledNumber } from './Table/Index';

type Props = {
	itemsPerPage: number;
	forms: RsvpFormData[];
	paginatedForm: RsvpFormData[];
	setItemsPerPage: (value: React.SetStateAction<number>) => void;
};

const ShowMore = (props: Props) => {
	const { itemsPerPage, forms, paginatedForm, setItemsPerPage } = props;

	return (
		<ShowMoreContainer>
			<label htmlFor='itemsPerPage'>
				Items per page: <StyledNumber>{itemsPerPage}</StyledNumber>
			</label>
			{forms.length > paginatedForm.length && (
				<Button onClick={() => setItemsPerPage(itemsPerPage + 10)}>
					Show <StyledNumber>+10</StyledNumber> more
				</Button>
			)}
			{itemsPerPage > 10 && (
				<Button onClick={() => setItemsPerPage(itemsPerPage - 10)}>
					Show <StyledNumber>-10</StyledNumber> less
				</Button>
			)}
			<Button onClick={() => setItemsPerPage(forms.length)}>Show all</Button>
		</ShowMoreContainer>
	);
};

const ShowMoreContainer = styled.div`
	display: flex;
	gap: 24px;
`;

export default ShowMore;
