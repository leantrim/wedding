import React, { ChangeEvent } from 'react';
import styled from 'styled-components';
import { SiteConfig } from '../../config';
import { Button } from './Index';
import { StyledHead, StyledHeader, StyledRow } from './StyledTable';

type Props = {
	handleAttendingFilterChange: (event: ChangeEvent<HTMLSelectElement>) => void;
	attendingFilter: boolean | null;
	handleTransportFilterChange: (event: ChangeEvent<HTMLSelectElement>) => void;
	dateSortDescending: boolean;
	toggleSortOrder: () => void;
	transportFilter: boolean | null;
};

const Header = (props: Props) => {
	const {
		handleAttendingFilterChange,
		attendingFilter,
		handleTransportFilterChange,
		dateSortDescending,
		toggleSortOrder,
		transportFilter,
	} = props;

	return (
		<StyledHeader>
			<StyledRow>
				<StyledHead>Name</StyledHead>
				<StyledHead>Companion</StyledHead>
				<StyledHead>
					Attendance
					<Select
						style={{ marginLeft: '12px' }}
						value={
							attendingFilter === null ? 'null' : attendingFilter.toString()
						}
						onChange={handleAttendingFilterChange}
					>
						<option value='null'>All</option>
						<option value='true'>Yes</option>
						<option value='false'>No</option>
					</Select>
				</StyledHead>
				<StyledHead>
					Transport
					<Select
						style={{ marginLeft: '12px' }}
						value={
							transportFilter === null ? 'null' : transportFilter.toString()
						}
						onChange={handleTransportFilterChange}
					>
						<option value='null'>All</option>
						<option value='true'>Yes</option>
						<option value='false'>No</option>
					</Select>
				</StyledHead>
				<StyledHead>
					Date{' '}
					<Button onClick={toggleSortOrder}>
						{dateSortDescending ? '▲' : '▼'}
					</Button>
				</StyledHead>
				<StyledHead>
					<h4>Action</h4>
				</StyledHead>
			</StyledRow>
		</StyledHeader>
	);
};

const Select = styled.select`
	background-color: ${SiteConfig.colors.primary};
	border: 2px solid ${SiteConfig.colors.primaryDarker};

	&:hover {
		background-color: ${SiteConfig.colors.primaryDarker};
		border: 2px solid ${SiteConfig.colors.primaryDarker};
		cursor: pointer;
	}
`;

export default Header;
