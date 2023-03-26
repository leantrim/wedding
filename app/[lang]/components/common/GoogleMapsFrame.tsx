import React from 'react';
import styled from 'styled-components';
import { SiteConfig } from '../../config';

const GoogleMapsFrame = () => {
	return (
		<MapContainer>
			<iframe
				src={SiteConfig.links.googleMapsApi}
				width='600'
				height='450'
				loading='lazy'
				allowFullScreen={false}
			></iframe>
		</MapContainer>
	);
};

const MapContainer = styled.div`
	width: 100%;
	height: 85%;
	iframe {
		border: 0;
		height: 100%;
		left: 0;
		top: 0;
		width: 100%;
	}
`;

export default GoogleMapsFrame;
