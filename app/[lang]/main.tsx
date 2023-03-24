'use client';
import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import { AppShellDataContext } from '../context/appShellData';
import Header from './components/Header/Header';
import Navbar from './components/Header/Navbar';
import WhenAndWhere from './WhenAndWhere';

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
	};
}

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
			<WhenAndWhere />
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
