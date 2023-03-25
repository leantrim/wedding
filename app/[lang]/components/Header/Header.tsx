'use client';
import React from 'react';
import styled from 'styled-components';
import { AppShellDataContext } from '../../../context/appShellData';
import useCheckMobileScreen from '../../../hooks/isMobile';
import { CountdownTimer } from '../CountDown';
import desktopHeader from '/public/assets/desktop-header.jpg';
import mobileHeader from '/public/assets/mobile-header.jpg';
import { useContext } from 'react';
import { SiteConfig } from '../../config';
import { CounterType, HeaderType } from '../../../../types/DictionaryTypes';

type Props = {
	timer: CounterType;
	header: HeaderType;
};

export default function Header(props: Props) {
	const isMobile = useCheckMobileScreen();
	const { headerRef } = useContext(AppShellDataContext);

	const { timer, header } = props;
	return (
		<StyledHeader
			ref={headerRef}
			url={isMobile ? mobileHeader.src : desktopHeader.src}
		>
			<TextContainer>
				<OurWeddingContainer>
					<Title>{header.title}</Title>
					<Subtitle>{header.subtitle}</Subtitle>
					<Date>{SiteConfig.date.formatted}</Date>
				</OurWeddingContainer>
				<Liner>{''}</Liner>
				<CountdownTimer timer={timer} />
			</TextContainer>
		</StyledHeader>
	);
}

export const Liner = styled.div`
	border-bottom: 2px solid white;
	content: '';
	width: 61px;
	height: 18px;
	margin-top: 18px;
	margin-bottom: 18px;
`;

const TextContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;

	margin-top: 378px;

	@media (max-width: 768px) {
		margin-top: 258px;
	}
`;

const Date = styled.span`
	color: white;
`;

const OurWeddingContainer = styled.div`
	text-align: center;
`;

const Subtitle = styled.h2`
	color: white;
	font-size: 36px;
`;
const Title = styled.h1`
	color: white;
	font-size: 48px;
	@media (max-width: 380px) {
		font-size: 44px;
	}
`;

type StyleProps = {
	url: any;
};
const StyledHeader = styled.div<StyleProps>`
	background-image: url(${(props) => props.url});
	@media (min-width: 768px) {
		background-image: url(${(props) => props.url});
		background-position: left 30%;
		background-size: cover;
	}
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	filter: grayscale(0.9);
	height: 100%;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;
