import React from 'react';
import styled, { css, FlattenSimpleInterpolation } from 'styled-components';
import Line from '../common/Line';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SiteConfig } from '../../config';
import { WhereType } from '../../../../types/DictionaryTypes';
import {
	faRingsWedding,
	faChampagneGlasses,
} from '@fortawesome/pro-duotone-svg-icons';

type Props = {
	where: WhereType;
	noLines: boolean;
	ContainerStyle?: FlattenSimpleInterpolation;
};

const When = ({ where, noLines, ContainerStyle }: Props) => {
	const Style = css`
		padding-top: 24px;
	`;

	return (
		<OuterTimeContainer ContainerStyle={ContainerStyle}>
			<TimeContainer>
				<Ceremony>{where.ceremony}</Ceremony>
				<Icons
					icon={faRingsWedding}
					style={{
						margin: '12px 0',
					}}
					noLines={noLines}
				/>
				<span>{SiteConfig.date.ceremonyTime}</span>
				{!noLines && (
					<Line color='#ddd' height={'1px'} width={'50px'} css={Style} />
				)}
			</TimeContainer>
			<TimeContainer>
				<Ceremony>{where.celebration}</Ceremony>
				<Icons
					icon={faChampagneGlasses}
					style={{
						color: SiteConfig.colors.primary,
						margin: '12px 0',
					}}
					noLines={noLines}
				/>
				<span>{SiteConfig.date.celebrationTime}</span>
				{!noLines && (
					<Line color='#ddd' height={'1px'} width={'50px'} css={Style} />
				)}
			</TimeContainer>
		</OuterTimeContainer>
	);
};

type StyleProps = {
	ContainerStyle?: FlattenSimpleInterpolation;
};

const OuterTimeContainer = styled.div<StyleProps>`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	height: 100%;

	${(props) => props.ContainerStyle}
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

type IconProps = {
	noLines: string;
};

export const Icons = styled(({ noLines, ...rest }) => (
	<FontAwesomeIcon {...rest} />
))<IconProps>`
	color: ${SiteConfig.colors.primary};
	margin: 12px 0;
	font-size: 24px;
	margin-left: 8px;

	--fa-secondary-color: ${SiteConfig.colors.secondary};
	--fa-primary-color: ${(props) =>
		props.noLines
			? SiteConfig.colors.primaryDarker
			: SiteConfig.colors.primary};
`;

const Ceremony = styled.h1`
	font-weight: 400;
	font-size: 22px;
	margin-top: 24px;
`;

export default When;
