import { faLocationDot } from '@fortawesome/pro-light-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled from 'styled-components';
import { WhereType } from '../../../../types/DictionaryTypes';
import { MenusType } from '../../../../types/Menus';
import { SiteConfig } from '../../config';
import Line from '../common/Line';
import Venue from './Venue';
import When from './When';

type Props = {
	where: WhereType;
};

const WhenAndWhere = (props: Props) => {
	const { where } = props;
	return (
		<div
			style={{
				paddingLeft: 16,
				paddingRight: 16,
				backgroundColor: '#f9f9f9',
			}}
		>
			<Container id={MenusType.WhenAndWhere}>
				<Title>{where.title}</Title>
				<Date>{SiteConfig.date.formatted}</Date>
				<InnerContainer>
					<Venue />
					<ThereAndWhenContainer>
						<a href={SiteConfig.links.googleMaps} target='_blank'>
							<GetThereContainer>
								<span>{where.buttonTitle}</span>
								<StyledIcon icon={faLocationDot} />
							</GetThereContainer>
						</a>
						<Line
							color={SiteConfig.colors.primary}
							width='100%'
							height={'1px'}
						/>
						<When where={where} />
					</ThereAndWhenContainer>
				</InnerContainer>
			</Container>
		</div>
	);
};

const ThereAndWhenContainer = styled.div`
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
`;

export const GetThereContainer = styled.div`
	margin-top: 24px;
	margin-bottom: 24px;
	padding: 12px;
	width: 140px;
	justify-content: center;
	background-color: ${SiteConfig.colors.primary};
	font-weight: bold;
	font-size: 12px;
	cursor: pointer;
	text-align: center;
	display: flex;
	align-items: center;
	width: 156px;

	:hover {
		box-shadow: 0 20px 38px rgba(0, 0, 0, 0.16);
		transition: 0.3s ease-in-out;
		transform: translateY(-3px);
	}
`;

const InnerContainer = styled.div`
	border: 1px solid ${SiteConfig.colors.primary};
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	padding: 8px;
	flex-direction: column;
	align-items: center;

	/* @media (min-width: 1024px) {
		flex-direction: row;
	} */

	@media (min-width: 1200px) {
		max-width: 962px;
	}
`;

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding-top: 48px;
	padding-bottom: 24px;
	color: #444;
`;
export const Title = styled.h1`
	margin-bottom: 12px;
	font-weight: 400;
	color: #444;
	text-align: center;
`;

const Date = styled.span`
	margin-bottom: 24px;
`;
export const StyledIcon = styled(FontAwesomeIcon)`
	font-size: 24px;
	margin-left: 8px;
`;

export default WhenAndWhere;
