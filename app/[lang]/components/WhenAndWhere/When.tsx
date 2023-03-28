import React from 'react';
import styled, { FlattenSimpleInterpolation } from 'styled-components';
import { SiteConfig } from '../../config';
import { WhereType } from '../../../../types/DictionaryTypes';
import {
	faRingsWedding,
	faChampagneGlasses,
} from '@fortawesome/pro-duotone-svg-icons';
import DisplayTime from './DisplayTime';
import { faMapMarkerAlt } from '@fortawesome/pro-light-svg-icons';

type Props = {
	where: WhereType;
	ContainerStyle?: FlattenSimpleInterpolation;
};

const When = ({ where, ContainerStyle }: Props) => {
	return (
		<OuterTimeContainer ContainerStyle={ContainerStyle}>
			<div style={{ display: 'flex', gap: 38 }}>
				<DisplayTime
					icon={faMapMarkerAlt}
					time={SiteConfig.date.arrivalTime}
					title={where.arrival}
				/>
				<DisplayTime
					icon={faRingsWedding}
					time={SiteConfig.date.ceremonyTime}
					title={where.ceremony}
				/>
			</div>

			<DisplayTime
				title={where.celebration}
				icon={faChampagneGlasses}
				time={SiteConfig.date.celebrationTime}
			/>
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

export default When;
