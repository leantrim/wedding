import Image from 'next/image';
import React from 'react';
import { faLocation } from '@fortawesome/pro-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import { SubTitle } from './Transport';
import meetingImage from '/public/assets/meeting-point.webp';
import { SiteConfig } from '../../config';
import { faLocationDot } from '@fortawesome/pro-light-svg-icons';

type Props = {
	meetingPoint: string;
	buttonTitle: string;
};

const MeetingPoint = (props: Props) => {
	const { buttonTitle } = props;
	return (
		<MeetingPointContainer>
			<SubTitle>{props.meetingPoint}</SubTitle>
			<StyledIcon icon={faLocation} />
			<MeetingImageContainer>
				<StyledImage src={meetingImage.src} fill={true} alt={'map'} />{' '}
			</MeetingImageContainer>
			<StyledAddress href={SiteConfig.links.googleMaps} target='_blank'>
				<span>{buttonTitle}</span>
				<StyledIcon icon={faLocationDot} />
			</StyledAddress>
		</MeetingPointContainer>
	);
};

const StyledAddress = styled.a`
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: ${SiteConfig.colors.primaryDarker};
	margin-top: 48px;
	gap: 12px;
	font-weight: bold;
	font-size: 12px;
	padding-left: 12px;
	padding-right: 12px;
	width: 156px;
	cursor: pointer;
	:hover {
		box-shadow: 0 20px 38px rgba(0, 0, 0, 0.16);
		transition: 0.3s ease-in-out;
		transform: translateY(-3px);
	}
`;

const MeetingPointContainer = styled.div`
	color: #5a5247;
	padding: 16px;
	border-radius: 4px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	h3 {
		font-size: 20px;
		margin-bottom: 8px;
	}

	width: 100%;
`;

const StyledImage = styled(Image)`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	object-fit: cover;
	@media (min-width: 428px) {
		object-fit: contain;
	}
`;

const MeetingImageContainer = styled.div`
	position: relative;
	width: 100%;
	padding-bottom: calc(
		9 / 16 * 100%
	); // Set padding-bottom based on the aspect ratio (16:9)
	height: 500px;
	@media (min-width: 1200px) {
		height: 70vh;
		max-height: 653px;
		max-width: 960px;
		padding-bottom: 0;
	}
`;

const StyledIcon = styled(FontAwesomeIcon)`
	margin: 12px 0;
	font-size: 19px;
`;

export default MeetingPoint;
