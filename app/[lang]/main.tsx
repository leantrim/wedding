'use client';
import dynamic from 'next/dynamic';
import React, { useContext } from 'react';
import styled from 'styled-components';
import { DictionaryTypes } from '../../types/DictionaryTypes';
import { AppShellDataContext } from '../context/appShellData';
import Footer from './components/Footer';
import Header from './components/Header/Header';
import Navbar from './components/Header/Navbar';
import Transport from './components/Transport/Transport';

const WhenAndWhere = dynamic(
	() => import('./components/WhenAndWhere/WhenAndWhere')
);
const Rsvp = dynamic(() => import('./components/Rsvp/Rsvp'));
const Present = dynamic(() => import('./components/Present/Present'));
const Recommendations = dynamic(
	() => import('./components/Recommendations/Recommendations')
);
const OurStory = dynamic(() => import('./components/OurStory/OurStory'));

const Main = (props: DictionaryTypes) => {
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
			<OurStory ourStory={dictionary.ourStory} />
			<WhenAndWhere where={dictionary.where} />
			<Rsvp form={dictionary.form} />
			<Present present={dictionary.present} />
			<Transport transport={dictionary.transport} where={dictionary.where} />
			<Recommendations recommendations={dictionary.recommendations} />
			<Footer />
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