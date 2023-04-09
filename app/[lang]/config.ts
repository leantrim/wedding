import catedralImg from '/public/assets/hotels/catedral.jpg';
import universalImg from '/public/assets/hotels/universal.jpg';

export const SiteConfig = {
	colors: {
		primary: '#ebe7e1',
		primaryDarker: '#d6c9b6',
		secondary: '#999',
	},
	date: {
		raw: '2023-09-24T17:30:00',
		formatted: 'September 24, 2023',
		arrivalTime: '17:00 h.',
		ceremonyTime: '17:30 h.',
		celebrationTime: '18:30 h.',
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
	links: {
		googleMaps: 'https://goo.gl/maps/3McwJ74SBb1ZsExe6',
	},
};
