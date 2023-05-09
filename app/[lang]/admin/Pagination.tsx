import React from 'react';
import styled from 'styled-components';
import { Button } from './Table/Index';

type Props = {
	filteredFormLength: number;
	itemsPerPage: number;
	handlePageChange: (value: number) => void;
	currentPage: number;
};

const Pagination = (props: Props) => {
	const { filteredFormLength, itemsPerPage, handlePageChange, currentPage } =
		props;

	return (
		<PaginationContainer>
			{Array.from(
				{ length: Math.ceil(filteredFormLength / itemsPerPage) },
				(_, index) => (
					<Button
						key={index}
						onClick={() => handlePageChange(index + 1)}
						style={{
							marginRight: '12px',
							background: index + 1 === currentPage ? 'lightblue' : 'white',
						}}
					>
						{index + 1}
					</Button>
				)
			)}
		</PaginationContainer>
	);
};

const PaginationContainer = styled.div`
	padding: 12px 0;
`;

export default Pagination;
