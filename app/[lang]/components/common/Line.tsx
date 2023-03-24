import React from 'react';
import styled, { FlattenSimpleInterpolation } from 'styled-components';

type Props = {
	color: string;
	height: string;
	width: string;
	css?: FlattenSimpleInterpolation;
};

const Line = (props: Props) => {
	return (
		<Liner
			color={props.color}
			height={props.height}
			width={props.width}
			css={props.css}
		>
			{''}
		</Liner>
	);
};

const Liner = styled.div<Props>`
	border-bottom: ${(props) => props.height} solid ${(props) => props.color};
	content: '';
	width: ${(props) => props.width};
	${(props) => props.css}
`;

export default Line;
