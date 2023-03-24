'use client';
import dynamic from 'next/dynamic';
import React, { useContext } from 'react';
import styled from 'styled-components';
import { AppShellDataContext } from '../context/appShellData';
import Header from './components/Header/Header';
import Navbar from './components/Header/Navbar';

const WhenAndWhere = dynamic(
	() => import('./components/WhenAndWhere/WhenAndWhere')
);

interface Props {
	dictionary: {
		counter: {
			days: string;
			hours: string;
			minutes: string;
			seconds: string;
		};
		header: {
			title: string;
			subtitle: string;
		};
		where: WhereProps;
		menu: MenuProps;
	};
}

export type MenuProps = {
	whenAndWhere: string;
	rsvp: string;
	present: string;
	transport: string;
	recommendations: string;
};

export type WhereProps = {
	title: string;
	ceremony: string;
	celebration: string;
	buttonTitle: string;
};

const Main = (props: Props) => {
	const { dictionary } = props;
	const { menuActive, setMenuActive } = useContext(AppShellDataContext);

	return (
		<MainContainer
			menuActive={menuActive}
			onClick={() => {
				menuActive && setMenuActive(false);
			}}
		>
			<Navbar />
			<Header timer={dictionary.counter} header={dictionary.header} />
			<WhenAndWhere where={dictionary.where} />
		</MainContainer>
	);
};
type StyleProps = {
	menuActive: boolean;
};

const MainContainer = styled.div<StyleProps>`
	transition: all 0.5s ease;
	height: 100vh;
	${(props) =>
		props.menuActive && `transform: translateX(-280px); cursor: pointer;`}
`;

export default Main;
