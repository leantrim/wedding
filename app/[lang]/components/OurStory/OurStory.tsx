import React from 'react';
import styled from 'styled-components';
import { OurStoryType } from '../../../../types/DictionaryTypes';
import ImageContainer from './ImageSection';
import TextSection from './TextSection';

type Props = {
	ourStory: OurStoryType;
};

const OurStory = (props: Props) => {
	return (
		<OuterContainer>
			<Container>
				<ImageContainer />
				<TextSection ourStory={props.ourStory} />
			</Container>
		</OuterContainer>
	);
};

const OuterContainer = styled.div`
	background-color: white;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const Container = styled.div`
	max-width: 1468px;
	height: fit-content;
	display: flex;
	padding-left: 12px;
	padding-right: 12px;
	padding-top: 48px;
	padding-bottom: 48px;

	@media (max-width: 1000px) {
		flex-direction: column;
	}
`;

export default OurStory;
