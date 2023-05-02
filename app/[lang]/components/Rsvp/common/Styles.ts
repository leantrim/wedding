import styled from 'styled-components';
import { SiteConfig } from '../../../config';

export const LabelDiv = styled.div`
	width: 100%;
`;

export const ColumnContainer = styled.div`
	display: flex;
	justify-content: space-between;
	flex-direction: row;
	gap: 12px;
`;

export const Label = styled.label`
	display: block;
	margin-bottom: 4px;
	font-size: 16px;
`;

export const Form = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	gap: 12px;
	max-width: 600px;
	width: 100%;
	height: 100%;
`;

export const Row = styled.div`
	display: flex;
	flex-direction: column;
`;

export const StyledInput = styled.input`
	border: 1px solid #ccc;
	border-radius: 4px;
	height: 32px;
	width: 100%;

	&:focus {
		border: 2px solid #999;
		outline: none;
		box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2);
	}
`;

export const Error = styled.span`
	color: red;
	font-size: 12px;
	margin-left: 8px;
`;

export const SubmitButton = styled.button`
	background-color: ${SiteConfig.colors.primaryDarker};
	border: none;
	color: white;
	padding: 15px 32px;
	text-align: center;
	text-decoration: none;
	display: inline-block;
	font-size: 16px;
	margin: 4px 2px;
	cursor: pointer;
	z-index: 1;
	border-radius: 4px;

	&:disabled {
		background-color: #999;
		cursor: not-allowed;
	}
	:hover {
		background-color: #5a5247;
	}
`;
