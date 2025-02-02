import React, { ChangeEvent, useState } from 'react';
import styled from 'styled-components';
import { RsvpFormData } from '../../../../types/Form';
import { Title } from '../../components/WhenAndWhere/WhenAndWhere';
import { Button } from './Index';
import { StyledCell, StyledRow } from './StyledTable';

type Props = {
	paginatedForm: RsvpFormData[];
	searchTerm: string;
	handleSearchTermChange: (event: ChangeEvent<HTMLInputElement>) => void;
	handleDeleteForm: (id: string) => void;
	formatDateFromTimestamp(isoDateString: string): string;
	highlightSearchTerm: (text: string, searchTerm: string) => JSX.Element;
};

interface VisibleRsvp {
	[key: string]: boolean;
}

const Body = (props: Props) => {
	const {
		paginatedForm,
		highlightSearchTerm,
		searchTerm,
		handleDeleteForm,
		formatDateFromTimestamp,
	} = props;
	const [visibleRsvp, setVisibleRsvp] = useState<VisibleRsvp>({});

	return (
		<Tbody>
			{paginatedForm.map((item) => (
				<React.Fragment key={item.id}>
					<StyledRow
						onClick={() =>
							setVisibleRsvp({
								[item.id]: !visibleRsvp[item.id],
							})
						}
					>
						<StyledCell>
							{highlightSearchTerm(`${item.name} ${item.surname}`, searchTerm)}
						</StyledCell>
						<StyledCell>
							{item.companionName &&
								highlightSearchTerm(item.companionName, searchTerm)}
						</StyledCell>
						<StyledCell>{item.attendance === 'true' ? 'Yes' : 'No'}</StyledCell>
						<StyledCell>{item.transport === 'true' ? 'Yes' : 'No'}</StyledCell>
						<StyledCell>{formatDateFromTimestamp(item.date!)}</StyledCell>
						<StyledCell>
							<Button onClick={() => handleDeleteForm(item.id!)}>Delete</Button>
						</StyledCell>
					</StyledRow>
					{!!visibleRsvp[item.id] && (
						<div>
							<DetailsContainer>
								{item.companionName && (
									<AttendeeContainer>
										<Title>Companion Details</Title>
										<div>
											Companion: <b>{item.companionName}</b>
										</div>
										<div>
											Menu: <b>{item.companionMenu?.toLocaleUpperCase()}</b>
										</div>
										{item.companionAllergies === 'true' && (
											<div>
												Allergies: <b>{item.companionAllergiesDetails}</b>
											</div>
										)}
									</AttendeeContainer>
								)}
								<AttendeeContainer>
									<Title>Attendee Details</Title>
									<div>
										Name: <b>{item.name}</b>
									</div>
									<div>
										Menu: <b>{item.menu?.toLocaleUpperCase()}</b>
									</div>
									{item.allergies === 'true' && (
										<div>
											Allergies: <b>{item.allergiesDetails}</b>
										</div>
									)}
								</AttendeeContainer>
							</DetailsContainer>
						</div>
					)}
				</React.Fragment>
			))}
		</Tbody>
	);
};

const AttendeeContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	gap: 12px;
`;

const DetailsContainer = styled.div`
	margin: 24px;
	display: flex;
	justify-content: space-around;
`;

const Tbody = styled.tbody``;

export default Body;
