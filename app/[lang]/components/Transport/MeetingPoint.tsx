import Image from 'next/image';
import React from 'react';
import { faLocation } from '@fortawesome/pro-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import { SubTitle } from './Transport';
import meetingImage from '/public/assets/meeting-point.jpg';

const MeetingPoint = () => {
	return (
		<MeetingPointContainer>
			<SubTitle>Meeting Point</SubTitle>
			<StyledIcon icon={faLocation} />
			<MeetingImageContainer>
				<StyledImage src={meetingImage.src} fill={true} alt={'map'} />
			</MeetingImageContainer>
		</MeetingPointContainer>
	);
};

const MeetingPointContainer = styled.div`
	color: #5a5247;
	padding: 16px;
	border-radius: 4px;

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
