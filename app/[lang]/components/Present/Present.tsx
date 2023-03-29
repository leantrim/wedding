import { faGift } from '@fortawesome/pro-duotone-svg-icons';
import { faHeart, faRing } from '@fortawesome/pro-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled, { keyframes } from 'styled-components';
import { PresentType } from '../../../../types/DictionaryTypes';
import { MenusType } from '../../../../types/Menus';
import { SiteConfig } from '../../config';
import Line from '../common/Line';
import { Title } from '../WhenAndWhere/WhenAndWhere';
import HeartBeatLine from './HeartBeatLine';

type Props = {
	present: PresentType;
};

const Present = ({ present }: Props) => {
	return (
		<OuterContainer id={MenusType.Present}>
			<Container>
				<Title style={{ color: '#444' }}>{present.title}</Title>
				<FontAwesomeIcon icon={faGift} className='icon' />
				<Info>{present.text}</Info>
				<Line width='70%' color={SiteConfig.colors.secondary} height='1px' />
				<BankSektion>{present.bankText}</BankSektion>
				<BankSektion>{SiteConfig.iban}</BankSektion>
			</Container>
			<HeartBeatLine />
		</OuterContainer>
	);
};

const BankSektion = styled.span`
	color: #6c757d;
	padding-top: 24px;
	font-style: italic;
	font-size: 14px;
	text-align: center;
`;

const Container = styled.div`
	display: flex;
	height: 100%;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 48px 0;
	max-width: 800px;
	margin: 0 18px;

	.icon {
		--fa-primary-color: ${SiteConfig.colors
			.primary}; /* Change the primary color */
		--fa-secondary-color: ${SiteConfig.colors
			.secondary}; /* Change the secondary color */
		font-size: 48px;
		margin-bottom: 16px;
	}
`;

const OuterContainer = styled.div`
	background-color: white;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding-bottom: 12px;
	height: 100%;
`;

const Info = styled.span`
	font-size: 16px;
	line-height: 1.6;
	text-align: center;
	margin-bottom: 24px;
	color: #676767;
`;

export default Present;
