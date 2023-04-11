import { faStar, faStarHalf } from '@fortawesome/pro-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled from 'styled-components';

const Stars = () => {
	return (
		<StarContainer>
			<StyledStar icon={faStar} />
			<StyledStar icon={faStar} />
			<StyledStar icon={faStar} />
			<StyledStar icon={faStar} />
		</StarContainer>
	);
};

const StyledStar = styled(FontAwesomeIcon)`
	color: white;
`;

const StarContainer = styled.div`
	z-index: 2;
`;

export default Stars;
