'use client';
import { faClose } from '@fortawesome/pro-light-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react';
import styled, { keyframes } from 'styled-components';
import { AppShellDataContext } from '../../../context/appShellData';
import { SiteConfig } from '../../config';
import { MenuProps } from '../../main';

type SyleProps = {
	index: number;
};

const fade = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;
type Props = {
	menu: MenuProps;
};

const MenuList = ({ menu }: Props) => {
	const { menuActive, setMenuActive } = useContext(AppShellDataContext);

	return (
		<>
			<MenuOverlay menuActive={menuActive} isTop />
			{menuActive && (
				<Container menuActive={menuActive}>
					<CloseContainer onClick={() => setMenuActive(false)}>
						<CloseButton icon={faClose} />
					</CloseContainer>
					<StyledLink index={0}>{menu.whenAndWhere}</StyledLink>
					<StyledLink index={1}>{menu.rsvp}</StyledLink>
					<StyledLink index={2}>{menu.present}</StyledLink>
					<StyledLink index={3}>{menu.transport}</StyledLink>
					<StyledLink index={4}>{menu.recommendations}</StyledLink>
				</Container>
			)}
			<MenuOverlay menuActive={menuActive} />
		</>
	);
};

type MenuOverlayProps = {
	menuActive?: boolean;
	isTop?: boolean;
};

const MenuOverlay = styled.div<MenuOverlayProps>`
	position: fixed;
	${(props) => (props.isTop ? 'top: 0' : 'bottom: 0')};
	height: 48px;
	background-color: ${SiteConfig.colors.primary};
	width: 100%;
	opacity: ${(props) => (props.menuActive ? 1 : 0)};
	transition: opacity 0.3s ease-in-out;
`;

const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const CloseContainer = styled.div`
	position: absolute;
	top: 0;
	right: 0;
	margin: 24px;
	background-color: #2d2d2d;
	height: 50px;
	width: 50px;
	border-radius: 48px;
	display: flex;
	align-items: center;
	justify-content: center;
	animation: ${fadeIn} 0.5s ease-in-out;

	&:hover {
		background-color: #3d3d3d;
		cursor: pointer;
		transition: 0.3s ease-in-out;
		transform: scale(1.1);
	}
`;

const CloseButton = styled(FontAwesomeIcon)`
	color: white;
	font-size: 15px;
`;

const StyledLink = styled.a<SyleProps>`
	font-size: 1.5rem;
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

const Container = styled.div<MenuOverlayProps>`
	height: 90%;
	min-width: 280px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: baseline;
	position: fixed;
	right: 0;
	top: 0;
	z-index: 100;
`;

export default MenuList;
