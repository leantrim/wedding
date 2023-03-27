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
		ceremonyTime: '17:00 h.',
		celebrationTime: '18:30 h.',
	},
	links: {
		googleMaps: '',
		googleMapsApi:
			'https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d227.32355136045604!2d2.1780523492632367!3d41.37525371146383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1ssv!2sse!4v1679830691779!5m2!1ssv!2sse',
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
