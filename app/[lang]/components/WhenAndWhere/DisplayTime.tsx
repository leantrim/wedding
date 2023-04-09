import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled, { css } from 'styled-components';
import { SiteConfig } from '../../config';
import Line from '../common/Line';

type Props = {
	title: string;
	icon: IconDefinition;
	time: string;
	customIconColor?: string;
};

const DisplayTime = (props: Props) => {
	const { title, icon, time } = props;
	const Style = css`
		padding-top: 24px;
	`;
	return (
		<TimeContainer>
			<Ceremony style={{ color: '#5a5247' }}>{title}</Ceremony>
			<StyledIcon
				icon={icon}
				style={{
					margin: '12px 0',
					color: props.customIconColor && props.customIconColor,
				}}
			/>
			<span>{time}</span>

			<Line color='#ddd' height={'1px'} width={'50px'} css={Style} />
		</TimeContainer>
	);
};

const StyledIcon = styled(FontAwesomeIcon)`
	color: ${SiteConfig.colors.primary};
	margin: 12px 0;
	font-size: 24px;
	margin-left: 8px;

	--fa-secondary-color: ${SiteConfig.colors.secondary};
	--fa-primary-color: ${SiteConfig.colors.primary};
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

const Ceremony = styled.h1`
	font-weight: 400;
	font-size: 22px;
	margin-top: 24px;
`;

export default DisplayTime;
