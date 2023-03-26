import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { CounterType } from '../../../types/DictionaryTypes';
import { SiteConfig } from '../config';

type Props = {
	timer: CounterType;
};
interface TimeLeft {
	days: number;
	hours: number;
	minutes: number;
	seconds: number;
}

export function CountdownTimer(props: Props) {
	const { timer } = props;
	const targetDate: Date = new Date(SiteConfig.date.raw);
	const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
	const [domLoaded, setDomLoaded] = useState(false);

	function calculateTimeLeft(): TimeLeft {
		const now: Date = new Date();
		const difference: number = targetDate.getTime() - now.getTime();

		const days: number = Math.floor(difference / (1000 * 60 * 60 * 24));
		const hours: number = Math.floor((difference / (1000 * 60 * 60)) % 24);
		const minutes: number = Math.floor((difference / (1000 * 60)) % 60);
		const seconds: number = Math.floor((difference / 1000) % 60);

		return { days, hours, minutes, seconds };
	}

	useEffect(() => {
		const interval = domLoaded ? 1000 : 1;
		const timer = setInterval(() => {
			setTimeLeft(calculateTimeLeft());
		}, interval);

		setDomLoaded(true);
		return () => clearInterval(timer);
	}, []);

	return (
		<>
			<CountdownContainer>
				<CountName>
					{domLoaded && timeLeft.days}
					<CountValue>{timer.days}</CountValue>
				</CountName>
				<CountName>
					{domLoaded && timeLeft.hours}
					<CountValue>{timer.hours}</CountValue>
				</CountName>
				<CountName>
					{domLoaded && timeLeft.minutes}
					<CountValue>{timer.minutes}</CountValue>
				</CountName>
				<CountName>
					{domLoaded && timeLeft.seconds}
					<CountValue>{timer.seconds}</CountValue>
				</CountName>
			</CountdownContainer>
		</>
	);
}

const CountValue = styled.span`
	font-size: 14px;
`;

const CountName = styled.span`
	display: flex;
	flex-direction: column;
	color: white;
	font-size: 32px;
	text-align: center;
`;

const CountdownContainer = styled.div`
	display: flex;
	justify-content: space-around;
	width: 30%;
	gap: 32px;
`;
