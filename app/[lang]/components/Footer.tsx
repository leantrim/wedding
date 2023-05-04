import React from 'react';
import styled from 'styled-components';

const Footer = () => {
	return (
		<Container>
			<span>© 2023 - sepidehandgeorge.com</span>
			<span>
				Created by{' '}
				<a
					href='https://www.instagram.com/mediapartners.se/'
					target='_blank'
					style={{ textDecoration: 'underline' }}
				>
					mediapartners.se
				</a>
			</span>
		</Container>
	);
};

const Container = styled.div`
	background-color: #f5f5f5;
	height: 48px;
	display: flex;
	justify-content: space-around;
	align-items: center;
	padding-left: 12px;
`;

export default Footer;
