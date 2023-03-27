import { faCircleInfo } from '@fortawesome/pro-light-svg-icons';
import { faPeople, faPersonDress } from '@fortawesome/pro-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled from 'styled-components';
import { HotelsListType, HotelType } from '../../../../types/DictionaryTypes';
import { MenusType } from '../../../../types/Menus';
import { SiteConfig } from '../../config';
import { Title } from '../WhenAndWhere/WhenAndWhere';
import { DressIcon } from './DressIcon';
import Hotels from './Hotels/Hotels';

type Props = {
	recommendations: {
		importantInfoTitle: string;
		dressText: string;
		adultsOnlyText: string;
		hotelsList: HotelsListType[];
		hotel: HotelType;
	};
};

const Recommendations = (props: Props) => {
	const { recommendations } = props;
	return (
		<Container id={MenusType.Recommendations}>
			<Hotels
				hotel={recommendations.hotel}
				hotelList={recommendations.hotelsList}
			/>
			<StyledIcon icon={faCircleInfo} style={{ fontSize: 64 }} />
			<Title>{recommendations.importantInfoTitle}</Title>
			<SubContainer>
				<DressIcon />
				<SubText>{recommendations.dressText}</SubText>
			</SubContainer>
			<SubContainer>
				<StyledIcon icon={faPeople} />
				<SubText>{recommendations.adultsOnlyText}</SubText>
			</SubContainer>
		</Container>
	);
};

const SubText = styled.span`
	font-style: italic;
	text-align: center;
`;

const SubContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 24px;
`;

export const StyledIcon = styled(FontAwesomeIcon)`
	color: ${SiteConfig.colors.primary};
	font-size: 32px;
	font-weight: bold;
`;

const Container = styled.div`
	background-color: white;
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	gap: 48px;
	padding-top: 48px;
	padding-bottom: 48px;
	padding-left: 12px;
	padding-right: 12px;
`;

export default Recommendations;
