import React, { useState, useEffect } from 'react';
import moment, { Moment, Duration } from 'moment';
import styled from 'styled-components';

type Props = {
	timer: {
		days: string;
		hours: string;
		minutes: string;
		seconds: string;
	};
};

export function CountdownTimer(props: Props) {
	const { timer } = props;
	const targetDate: Date = new Date('2023-09-30T00:00:00');
	const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
	const [domLoaded, setDomLoaded] = useState(false);

	interface TimeLeft {
		days: number;
		hours: number;
		minutes: number;
		seconds: number;
	}

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
		setDomLoaded(true);
		const timer = setInterval(() => {
			setTimeLeft(calculateTimeLeft());
		}, 1000);

		return () => clearInterval(timer);
	}, []);

	return (
		<>
			{domLoaded && (
				<CountdownContainer>
					<CountName>
						{timeLeft.days}
						<CountValue>{timer.days}</CountValue>
					</CountName>
					<CountName>
						{timeLeft.hours}
						<CountValue>{timer.hours}</CountValue>
					</CountName>
					<CountName>
						{timeLeft.minutes}
						<CountValue>{timer.minutes}</CountValue>
					</CountName>
					<CountName>
						{timeLeft.seconds}
						<CountValue>{timer.seconds}</CountValue>
					</CountName>
				</CountdownContainer>
			)}
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
