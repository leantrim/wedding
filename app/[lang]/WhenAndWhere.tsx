import { faClock, faLocationDot } from '@fortawesome/pro-light-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import React from 'react';
import styled, { css } from 'styled-components';
import Line from './components/common/Line';
import { Liner } from './components/Header/Header';
import venueImage from '/public/assets/venue.jpg';

const WhenAndWhere = () => {
	const Style = css`
		padding-top: 24px;
	`;

	return (
		<div style={{ paddingLeft: 16, paddingRight: 16, backgroundColor: '#fff' }}>
			<Container>
				<Title>When and where</Title>
				<Date>13 September 2023</Date>
				<InnerContainer>
					<RevenueContainer>
						<StyledImage
							src={venueImage.src}
							alt={'Venue Image'}
							fill={true}
							priority
						/>
						<GetThereContainer>
							{/* //! Behöver translation */}
							<span>Cómo llegar</span>
							<StyledIcon icon={faLocationDot} />
						</GetThereContainer>
					</RevenueContainer>

					<OuterTimeContainer>
						<FontAwesomeIcon icon={faClock} style={{ fontSize: 22 }} />
						<TimeContainer>
							<Ceremony>CEREMONY</Ceremony>
							<span>17:00 h.</span>
							<Line color='#ddd' height={'1px'} width={'50px'} css={Style} />
						</TimeContainer>
						<TimeContainer>
							<Ceremony>CELEBRATION</Ceremony>
							<span>18:30 h.</span>
							<Line color='#ddd' height={'1px'} width={'50px'} css={Style} />
						</TimeContainer>
					</OuterTimeContainer>
				</InnerContainer>
			</Container>
		</div>
	);
};

const RevenueContainer = styled.div`
	display: flex;
	position: relative;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
	min-width: 330px;
`;

const OuterTimeContainer = styled.div`
	border: 1px solid #ddd;
	padding: 32px;
	display: flex;
	flex-direction: column;
	height: 100%;

	@media (max-width: 768px) {
		margin-top: 24px;
	}

	@media (min-width: 768px) {
		margin-left: 24px;
	}
`;

const Ceremony = styled.h1`
	font-weight: 400;
	font-size: 22px;
	margin-top: 24px;
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

const GetThereContainer = styled.div`
	margin-top: 24px;
	padding: 12px;
	width: 100px;
	background-color: rgb(249, 249, 249);
	font-weight: bold;
	font-size: 12px;
	cursor: pointer;
	text-align: center;
	display: flex;
	align-items: center;

	:hover {
		box-shadow: 0 20px 38px rgba(0, 0, 0, 0.16);
		transition: 0.3s ease-in-out;
		transform: translateY(-3px);
	}
`;

const StyledIcon = styled(FontAwesomeIcon)`
	font-size: 24px;
	margin-left: 8px;
`;

const StyledImage = styled(Image)`
	width: 100%;
	height: 100%;
	object-fit: contain;
	position: relative !important;

	@media (min-width: 768px) {
		max-width: 100%;
	}
`;

const InnerContainer = styled.div`
	border: 1px solid #d6c9b6;
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	padding: 28px;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	@media (min-width: 1024px) {
		width: 70%;
		flex-direction: row;
	}
`;

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding-top: 48px;
	padding-bottom: 96px;
	padding-left: 22px;
	padding-right: 22px;
	color: #444;
`;
const Title = styled.h1`
	margin-bottom: 12px;
	font-weight: 400;
`;

const Date = styled.span`
	margin-bottom: 24px;
`;

export default WhenAndWhere;
