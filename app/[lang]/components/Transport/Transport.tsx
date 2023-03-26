import dynamic from 'next/dynamic';
import React from 'react';
import styled, { css } from 'styled-components';
import { TransportType, WhereType } from '../../../../types/DictionaryTypes';
import { SiteConfig } from '../../config';
import When from '../WhenAndWhere/When';
import { Title } from '../WhenAndWhere/WhenAndWhere';

const MeetingPoint = dynamic(() => import('./MeetingPoint'));

type Props = {
	where: WhereType;
	transport: TransportType;
};

const Transport = (props: Props) => {
	const { where, transport } = props;

	const style = css`
		flex-direction: row;
		justify-content: space-around;
	`;

	return (
		<OuterContainer>
			<Container>
				<Title>{transport.title}</Title>
				<ScheduleContainer>
					<SubTitle style={{ color: SiteConfig.colors.primaryDarker }}>
						{transport.schedule}
					</SubTitle>
					<When where={where} ContainerStyle={style} noLines={true} />
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
