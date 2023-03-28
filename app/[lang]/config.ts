import catedralImg from '/public/assets/hotels/catedral.jpg';
import universalImg from '/public/assets/hotels/universal.jpg';

export const SiteConfig = {
	colors: {
		primary: '#d6c9b6',
		primaryDarker: '#766d60',
		secondary: '#999',
	},
	date: {
		raw: '2023-09-30T13:37:00',
		formatted: 'September 13, 2023',
		arrivalTime: '17:00 h.',
		ceremonyTime: '17:30 h.',
		celebrationTime: '18:30 h.',
	},
	links: {
		googleMaps: '',
	},
	iban: 'IBAN: NL 91 ABNA 0467 0000 01',
	hotels: [
		{
			image: catedralImg.src,
		},
		{
			image: universalImg.src,
		},
	],
};
