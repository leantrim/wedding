import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';
import imageMiddleRight from '/public/assets/ourstory/2.jpg';
import imageMiddleLeft from '/public/assets/ourstory/1.jpg';
import imageTopMiddle from '/public/assets/ourstory/3.jpg';

const ImageSection = () => {
	return (
		<StyledContainer>
			<StyledImageStack>
				<StyledImageStackMiddleLeft>
					<StyledImage
						src={imageMiddleLeft.src}
						height={350}
						width={300}
						alt={'imageMiddleLeft'}
					/>
				</StyledImageStackMiddleLeft>
				<StyledImageStackTopCenter>
					<StyledImage
						src={imageTopMiddle.src}
						height={500}
						width={400}
						alt={'imageTopMiddle'}
					/>
				</StyledImageStackTopCenter>
				<StyledImageStackMiddleRight>
					<StyledImage
						src={imageMiddleRight.src}
						height={472}
						width={304}
						alt={'imageMiddleRight'}
					/>
				</StyledImageStackMiddleRight>
			</StyledImageStack>
		</StyledContainer>
	);
};

const StyledContainer = styled.div`
	width: 100%;
	margin: 0 auto;
	max-width: 900px;
	min-height: 720px;

	@media (max-width: 1000px) {
		max-width: 536px;
	}
	@media (min-width: 1000px) {
		margin-left: 82px;
	}
`;

const StyledImageStack = styled.div`
	display: grid;
	position: relative;
	grid-template-columns: repeat(12, 1fr);
	grid-template-rows: repeat(5, 112px);
`;

const StyledImageStackMiddleLeft = styled.div`
	grid-row: 2;
	grid-column: 1 / span 6;
	padding-top: 80%;
	z-index: 2;

	@media (min-width: 1300px) {
		grid-row: 1;
		grid-column: 2 / span 6;
		padding-top: 80%;
	}
`;

const StyledImageStackTopCenter = styled.div`
	grid-column: 4 / span 7;
	grid-row: 1;
	z-index: 1;

	/* @media (max-width: 470px) {
		grid-column: 3 / span 11;
	} */
`;

const StyledImageStackMiddleRight = styled.div`
	grid-column: 7 / -1;
	grid-row: 4;
	position: absolute;
	margin-left: 12px;
	bottom: -118px;

	@media (min-width: 1300px) {
		bottom: -138px;
		margin-left: 0;
	}
`;
const StyledImage = styled(Image)`
	width: 100%;
	max-width: 256px;
	max-height: 384px;
	object-fit: cover;
`;

export default ImageSection;
