import { faBus } from '@fortawesome/pro-light-svg-icons';
import dynamic from 'next/dynamic';
import React from 'react';
import styled from 'styled-components';
import { TransportType } from '../../../../types/DictionaryTypes';
import { MenusType } from '../../../../types/Menus';
import { SiteConfig } from '../../config';
import DisplayTime from '../WhenAndWhere/DisplayTime';

const MeetingPoint = dynamic(() => import('./MeetingPoint'));

type Props = {
	transport: TransportType;
	buttonTitle: string;
};

const Transport = (props: Props) => {
	const { transport } = props;

	return (
		<OuterContainer id={MenusType.Transport}>
			<Container>
				<ScheduleContainer>
					<DisplayTime
						icon={faBus}
						time={'16:00'}
						title={transport.departure}
						customIconColor={'#5a5247'}
					/>
				</ScheduleContainer>
				<MeetingPoint
					meetingPoint={transport.meetingPoint}
					buttonTitle={props.buttonTitle}
				/>
			</Container>
			<span
				style={{
					marginTop: '12px',
					fontStyle: 'italic',
					color: 'grey',
					textAlign: 'center',
				}}
			>
				{transport.returnInfo}
			</span>
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
	flex-direction: column;
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
`;

export const SubTitle = styled.div`
	font-size: 22px;
	color: #5a5247;
`;

export default Transport;
