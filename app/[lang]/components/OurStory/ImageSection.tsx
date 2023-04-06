import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import imageMiddleRight from '/public/assets/ourstory/2.jpg';
import imageMiddleLeft from '/public/assets/ourstory/1.jpg';
import imageTopMiddle from '/public/assets/ourstory/3.jpg';

const ImageSection = () => {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setIsVisible(true);
					}
				});
			},
			{
				threshold: 0,
				rootMargin: '-100px 0px -100px 0px', // Adjust the rootMargin for the top and bottom
			}
		);

		const container = document.getElementById('image-section-container');

		if (container) {
			observer.observe(container);
		}

		return () => {
			if (container) {
				observer.unobserve(container);
			}
		};
	}, []);

	return (
		<StyledContainer id='image-section-container'>
			<StyledImageStack>
				<StyledImageStackMiddleLeft>
					<StyledImage
						className={isVisible ? 'loaded' : ''}
						src={imageMiddleLeft.src}
						height={350}
						width={300}
						alt={'imageMiddleLeft'}
						index={1}
					/>
				</StyledImageStackMiddleLeft>
				<StyledImageStackTopCenter>
					<StyledImage
						className={isVisible ? 'loaded' : ''}
						src={imageTopMiddle.src}
						height={500}
						width={400}
						alt={'imageTopMiddle'}
						index={0}
					/>
				</StyledImageStackTopCenter>
				<StyledImageStackMiddleRight>
					<StyledImage
						className={isVisible ? 'loaded' : ''}
						src={imageMiddleRight.src}
						height={472}
						width={304}
						alt={'imageMiddleRight'}
						index={2}
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

type ImageProps = {
	index: number;
};

const StyledImage = styled(Image)<ImageProps>`
	width: 100%;
	max-width: 256px;
	max-height: 384px;
	object-fit: cover;
	opacity: 0; // Set the initial opacity to 0
	transition: opacity 0.5s ease-in-out; // Add a transition for the opacity

	${(props) => `
		transition-delay: ${props.index * 0.4}s;
	`}

	&.loaded {
		opacity: 1; // Set the opacity to 1 when the image has loaded
	}
`;
export default ImageSection;
