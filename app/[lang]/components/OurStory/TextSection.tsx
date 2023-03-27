import React from 'react';
import styled from 'styled-components';
import { OurStoryType } from '../../../../types/DictionaryTypes';
import { Title } from '../WhenAndWhere/WhenAndWhere';

type Props = {
	ourStory: OurStoryType;
};

const TextSection = (props: Props) => {
	const { ourStory } = props;
	return (
		<Container>
			<Title style={{ textAlign: 'left', fontSize: '40px' }}>
				{ourStory.title}
			</Title>
			<Span>{ourStory.text}</Span>
		</Container>
	);
};

const Span = styled.span`
	color: #676767;
	text-align: left;
`;

const Container = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	flex-direction: column;
	padding-right: 12px;
	padding-left: 12px;
	gap: 48px;
	line-height: 1.6;

	@media (min-width: 1000px) {
		margin-right: 48px;
		margin-left: 48px;
	}
`;

export default TextSection;
