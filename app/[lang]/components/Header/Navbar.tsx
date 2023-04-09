import React, { useContext, useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBarsStaggered } from '@fortawesome/pro-light-svg-icons';
import MenuList from './MenuList';
import { AppShellDataContext } from '../../../context/appShellData';
import { SiteConfig } from '../../config';
import useCheckMobileScreen from '../../../hooks/isMobile';
import { MenuType } from '../../../../types/DictionaryTypes';
import MenuLink from '../common/MenuLink';
import { MenusType } from '../../../../types/Menus';

type Props = {
	menu: MenuType;
};

const Navbar = (props: Props) => {
	const { menu } = props;
	const { menuActive, setMenuActive, headerRef } =
		useContext(AppShellDataContext);
	const [isVisible, setHasScrolled] = useState(true);
	const NavRef = useRef<HTMLDivElement>(null);
	const isMobile = useCheckMobileScreen();

	const handleClickMenu = () => {
		setMenuActive(!menuActive);
	};

	useEffect(() => {
		const checkIfScrolled = () => {
			const scrolled =
				window.pageYOffset > 0 || document.documentElement.scrollTop > 0;
			setHasScrolled(scrolled);
		};

		window.addEventListener('scroll', checkIfScrolled);

		// Clean up the event listener when the component is unmounted
		return () => {
			window.removeEventListener('scroll', checkIfScrolled);
		};
	}, []);

	return (
		<NavContainer isVisible={isVisible} ref={NavRef} menuActive={menuActive}>
			<div
				style={{
					marginLeft: 6,
					color: !isVisible ? 'white' : SiteConfig.colors.secondary,
				}}
			>
				SG
			</div>
			{isMobile ? (
				<FontAwesomeIcon
					icon={faBarsStaggered}
					size={'2x'}
					style={{
						marginRight: 6,
					}}
					cursor={'pointer'}
					onClick={() => handleClickMenu()}
				/>
			) : (
				<ListContainer>
					<MenuLink
						href={MenusType.WhenAndWhere}
						title={menu.whenAndWhere}
						index={0}
					/>
					<MenuLink href={MenusType.RSVP} title={menu.rsvp} index={1} />
					<MenuLink
						href={MenusType.Transport}
						title={menu.transport}
						index={2}
					/>
					<MenuLink
						href={MenusType.Recommendations}
						title={menu.recommendations}
						index={3}
					/>
				</ListContainer>
			)}
		</NavContainer>
	);
};

const ListContainer = styled.div`
	width: fit-content;
	margin-right: 48px;
`;

type NavStyle = {
	isVisible: boolean;
	menuActive: boolean;
};

const NavContainer = styled.div<NavStyle>`
	position: fixed;
	z-index: 99;
	height: 52px;
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	top: 0;
	background-color: transparent;
	box-shadow: none;
	transition: color 0.5s ease, background-color 0.5s ease, box-shadow 0.5s ease;
	color: white;

	${(props) =>
		props.isVisible &&
		`
      		background-color: rgba(255, 255, 255, 0.1);
      		box-shadow: 0 3px 45px rgba(0, 0, 0, 0.15);
	  		color: ${SiteConfig.colors.secondary}; 
		`}
`;

export default Navbar;
