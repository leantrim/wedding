import dynamic from 'next/dynamic';
import React from 'react';
import styled, { css } from 'styled-components';
import { TransportType, WhereType } from '../../../../types/DictionaryTypes';
import { MenusType } from '../../../../types/Menus';
import { SiteConfig } from '../../config';

const MeetingPoint = dynamic(() => import('./MeetingPoint'));

type Props = {
	transport: TransportType;
};

const Transport = (props: Props) => {
	const { transport } = props;

	return (
		<OuterContainer id={MenusType.Transport}>
			<Container>
				<ScheduleContainer>
					<SubTitle style={{ color: SiteConfig.colors.primaryDarker }}>
						{transport.schedule}
					</SubTitle>
				</ScheduleContainer>
				<MeetingPoint meetingPoint={transport.meetingPoint} />
			</Container>
		</OuterContainer>
	);
};

const ScheduleContainer = styled.div`
	max-width: 370px;
	width: 100%;
`;

const OuterContainer = styled.div`
	background-color: ${SiteConfig.colors.primary};
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 48px 0;
	@media (max-width: 768px) {
		min-height: 100%;
	}
`;

const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;
	max-width: 800px;
	width: 100%;
	margin-left: 12px;
	margin-right: 12px;
	gap: 48px;
`;

export const SubTitle = styled.div`
	font-size: 28px;
	color: #5a5247;
`;

export default Transport;
