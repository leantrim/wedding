import React from 'react';
import styled from 'styled-components';
import { SiteConfig } from '../../config';
import { fadeIn } from '../Header/MenuList';

type Props = {
	href: string;
	title: string;
	index: number;
};

const MenuLink = (props: Props) => {
	const { href, title, index } = props;
	return (
		<StyledLink index={index} href={`#${href}`}>
			{title}
		</StyledLink>
	);
};

type SyleProps = {
	index: number;
};

const StyledLink = styled.a<SyleProps>`
	font-size: 1rem;
	color: white;
	margin-bottom: 12px;
	margin-left: 48px;
	cursor: pointer;
	position: relative; /* Add position relative */

	&::before {
		content: '';
		position: absolute;
		left: 0;
		bottom: 0;
		width: 0;
		height: 2px;
		background-color: white;
		transition: width 0.3s ease-in-out;
	}

	&:hover::before {
		width: 100%;
	}
	animation: ${fadeIn} 0.5s ease-in-out;
	animation-delay: ${(props) => props.index * 0.1}s;
	animation-fill-mode: both;
	animation-delay: ${(props) => props.index * 0.1}s;
`;

export default MenuLink;
