import { faLocationDot } from '@fortawesome/pro-light-svg-icons';
import React from 'react';
import styled from 'styled-components';
import {
	HotelsListType,
	HotelType,
} from '../../../../../types/DictionaryTypes';
import { SiteConfig } from '../../../config';
import { Title } from '../../WhenAndWhere/WhenAndWhere';
import { StyledIcon } from '../Recommendations';
import DisplayHotel from './DisplayHotel';

type Props = {
	hotel: HotelType;
	hotelList: HotelsListType[];
};

const Hotels = (props: Props) => {
	const { hotel, hotelList } = props;
	return (
		<Container>
			<StyledIcon icon={faLocationDot} style={{ fontSize: 64 }} />
			<Title>{hotel.title}</Title>
			<HotelsContainer>
				{hotelList.map((hotelSettings, index) => (
					<DisplayHotel
						hotel={hotel}
						hotelList={hotelSettings}
						key={hotelSettings.name}
						image={SiteConfig.hotels[index].image}
					/>
				))}
			</HotelsContainer>
		</Container>
	);
};

const HotelsContainer = styled.div`
	height: 100%;
	max-width: 1000px;
	width: 100%;
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
	gap: 16px;
`;

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 100%;
	gap: 14px;
	padding-left: 12px;
	padding-right: 12px;
`;

export default Hotels;
