import React from 'react';
import {
	faRingsWedding,
	faChampagneGlasses,
} from '@fortawesome/pro-solid-svg-icons';
import styled, { css } from 'styled-components';
import Line from '../common/Line';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SiteConfig } from '../../config';
import { WhereProps } from '../../main';

type Props = {
	where: WhereProps;
};

const When = ({ where }: Props) => {
	const Style = css`
		padding-top: 24px;
	`;

	return (
		<OuterTimeContainer>
			<TimeContainer>
				<Ceremony>{where.ceremony}</Ceremony>
				<Icons
					icon={faRingsWedding}
					style={{ color: SiteConfig.colors.primary, margin: '12px 0' }}
				/>
				<span>{SiteConfig.date.ceremonyTime}</span>
				<Line color='#ddd' height={'1px'} width={'50px'} css={Style} />
			</TimeContainer>
			<TimeContainer>
				<Ceremony>{where.celebration}</Ceremony>
				<Icons
					icon={faChampagneGlasses}
					style={{ color: SiteConfig.colors.primary, margin: '12px 0' }}
				/>
				<span>{SiteConfig.date.celebrationTime}</span>
				<Line color='#ddd' height={'1px'} width={'50px'} css={Style} />
			</TimeContainer>
		</OuterTimeContainer>
	);
};

const Icons = styled(FontAwesomeIcon)`
	color: ${SiteConfig.colors.primary};
	margin: 12px 0;
	font-size: 24px;
	margin-left: 8px;
`;

const Ceremony = styled.h1`
	font-weight: 400;
	font-size: 22px;
	margin-top: 24px;
`;

const OuterTimeContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	height: 100%;
`;

const TimeContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	text-align: center;
	font-weight: 400;

	span {
		font-weight: 200;
		font-size: 20px;
		margin-bottom: 18px;
	}
`;

export default When;
