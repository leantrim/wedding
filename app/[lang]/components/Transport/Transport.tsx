import dynamic from 'next/dynamic';
import React from 'react';
import styled, { css } from 'styled-components';
import { SiteConfig } from '../../config';
import When from '../WhenAndWhere/When';
import { Title } from '../WhenAndWhere/WhenAndWhere';

const MeetingPoint = dynamic(() => import('./MeetingPoint'));

const Transport = () => {
	const where = {
		title: 'Transport',
		ceremony: 'Ceremony',
		celebration: 'Celebration',
		buttonTitle: 'RSVP',
	};

	const style = css`
		flex-direction: row;
		justify-content: space-around;
	`;

	return (
		<OuterContainer>
			<Container>
				<Title>Transport</Title>
				<ScheduleContainer>
					<SubTitle style={{ color: SiteConfig.colors.primaryDarker }}>
						Schedule
					</SubTitle>
					<When where={where} ContainerStyle={style} nolines />
				</ScheduleContainer>

				<MeetingPoint />
			</Container>
		</OuterContainer>
	);
};

const ScheduleContainer = styled.div`
	max-width: 370px;
	width: 100%;
`;

const OuterContainer = styled.div`
	background-color: #f1ede6;
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
`;

export const SubTitle = styled.div`
	font-size: 28px;
	color: #5a5247;
`;

export default Transport;
