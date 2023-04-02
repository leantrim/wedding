import { faHeart } from '@fortawesome/pro-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled, { keyframes } from 'styled-components';
import { SiteConfig } from '../../config';

const HeartBeatLine = () => {
	return (
		<HeartbeatContainer>
			<HeartIconContainer>
				<StyledIcon icon={faHeart} scale={1} />
				<ThankYouText>Thank you</ThankYouText>
			</HeartIconContainer>
		</HeartbeatContainer>
	);
};

const HeartIconContainer = styled.div`
	display: flex;
	flex-direction: column;
`;

const HeartbeatContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	position: relative;
	width: 100%;
	height: 60px;
	@media (min-width: 768px) {
		margin-bottom: 48px;
	}
`;
const pulse = keyframes`
  0% {
    color: ${SiteConfig.colors.primary};
    transform: scale(1);
  }
  50% {
    color: #c2b19e;
    transform: scale(1.05);
  }
  100% {
    color: ${SiteConfig.colors.primary};
    transform: scale(1);
  }
`;

const StyledIcon = styled(FontAwesomeIcon)<StyledIconProps>`
	font-size: 32px;
	color: ${(props) => `rgba(214, 201, 182, ${1 - props.scale * 0.2})`};

	animation: ${pulse} 1s ease infinite;
`;

const HeartbeatLine = styled.svg`
	width: 100px;
	height: 100%;
`;

const ThankYouText = styled.span`
	font-size: 16px;
	color: #999;
	font-style: italic;
`;

type StyledIconProps = {
	scale: number;
};

export default HeartBeatLine;
