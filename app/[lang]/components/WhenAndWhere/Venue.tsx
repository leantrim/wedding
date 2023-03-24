import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';
import venueImage from '/public/assets/venue.jpg';

const Venue = () => {
	return (
		<>
			<VenueImageContainer>
				<VenueContainer>
					<StyledImage
						src={venueImage.src}
						alt={'Venue Image'}
						fill={true}
						priority
					/>
				</VenueContainer>
			</VenueImageContainer>
		</>
	);
};

const VenueContainer = styled.div`
	display: flex;
`;

const VenueImageContainer = styled.div`
	position: relative;
	width: 100%;
	padding-bottom: calc(
		9 / 16 * 100%
	); // Set padding-bottom based on the aspect ratio (16:9)
	height: 0;
	@media (min-width: 1200px) {
		height: 70vh;
		max-height: 653px;
		max-width: 960px;
		padding-bottom: 0;
	}
`;

const StyledImage = styled(Image)`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	object-fit: cover;
	@media (min-width: 1200px) {
		/* object-fit: cover; */
		max-height: 653px;
		max-width: 960px;
	}
`;

export default Venue;
