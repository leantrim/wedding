import React from 'react';
import styled from 'styled-components';
import { SiteConfig } from '../../../config';
import { GetThereContainer } from '../../WhenAndWhere/WhenAndWhere';
import { StyledIcon } from '../Recommendations';
import { faHotel } from '@fortawesome/pro-thin-svg-icons';

import Stars from './Stars';
import {
	HotelsListType,
	HotelType,
} from '../../../../../types/DictionaryTypes';

type Props = {
	hotelList: HotelsListType;
	hotel: HotelType;
	image: string;
};

const DisplayHotel = (props: Props) => {
	const { hotelList, hotel, image } = props;

	return (
		<HotelContainer src={image}>
			<InnerHotelContainer>
				<TopContainer>
					<StyledIcon
						icon={faHotel}
						style={{ color: 'white', fontSize: '48px' }}
					/>
					<HotelTitle>{hotelList.name}</HotelTitle>
					<Stars />
					<HotelDescription>{hotelList.description}</HotelDescription>
				</TopContainer>
				<ButtonContainer>
					<a href={hotelList.googleMapsLink} target='_blank'>
						<GetThereContainer
							style={{
								backgroundColor: SiteConfig.colors.primary,
							}}
						>
							<HotelDescription style={{ fontStyle: 'normal' }}>
								{hotel.directionsButtonTitle}
							</HotelDescription>
						</GetThereContainer>
					</a>
					<a href={hotelList.reservationLink} target='_blank'>
						<GetThereContainer
							style={{
								backgroundColor: 'white',
							}}
						>
							<HotelDescription
								style={{
									fontStyle: 'normal',
									color: 'black',
								}}
							>
								{hotel.reserveButtonTitle}
							</HotelDescription>
						</GetThereContainer>
					</a>
				</ButtonContainer>

				<VoucerContainer>
					<HotelDescription>{hotel.useVoucherTitle}</HotelDescription>
					<HotelDescription style={{ fontWeight: 'bold' }}>
						{hotelList.voucherCode}
					</HotelDescription>
				</VoucerContainer>
				<HotelDescription style={{ fontSize: '12px' }}>
					{hotelList.voucherAvailabilityTitle}
				</HotelDescription>
			</InnerHotelContainer>
		</HotelContainer>
	);
};

const ButtonContainer = styled.div``;

const InnerHotelContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
	height: 100%;
	width: 100%;
	padding: 14px;
	z-index: 3;
`;

const TopContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 12px;
`;

const VoucerContainer = styled.div`
	display: flex;
	flex-direction: column;
`;

const HotelDescription = styled.span`
	color: white;
	font-style: italic;
	text-align: center;
`;

const HotelTitle = styled.span`
	color: white;
	font-size: 28px;
	font-style: italic;
	text-align: center;
`;

type HotelContainerProps = {
	src: string;
};

const HotelContainer = styled.div<HotelContainerProps>`
	position: relative;
	height: 500px;
	width: 100%;
	display: flex;

	::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		height: 100%;
		width: 100%;
		background-image: url(${(props) => props.src});
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
		z-index: 0;
	}

	::after {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		height: 100%;
		width: 100%;
		background-color: rgba(0, 0, 0, 0.5);
		z-index: 1;
	}
`;

export default DisplayHotel;
