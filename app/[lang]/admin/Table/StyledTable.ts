import styled from 'styled-components';

export const StyledTable = styled.table`
	width: 100%;
	border-collapse: collapse;
	background-color: white;
	font-size: 1rem;
	@media (max-width: 768px) {
		font-size: 0.8rem;
	}
`;

export const StyledHead = styled.th`
	@media (max-width: 768px) {
		font-size: 0.8rem;
		font-weight: 400;
	}
`;

export const StyledHeader = styled.thead`
	background-color: #f2f2f2;
	border: 1px solid #ddd;
	@media (min-width: 500px) {
		padding: 8px;
	}
`;

export const StyledRow = styled.tr`
	&:nth-child(even) {
		background-color: #f2f2f2;
	}
`;

export const StyledCell = styled.td`
	@media (min-width: 500px) {
		padding: 8px;
	}
	border: 1px solid #ddd;
`;

export const NameContainer = styled.div`
	display: flex;
	gap: 12px;
`;
