import catedralImg from '/public/assets/hotels/catedral.webp';
import universalImg from '/public/assets/hotels/universal.webp';

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
	iban: 'ES1121002904040288728452',
	bic: 'CAIXESBBXXX',
	hotels: [
		{
			image: catedralImg.src,
		},
		{
			image: universalImg.src,
		},
	],
	links: {
		googleMapsVenue:
			'https://www.google.com/maps?q=Mas+de+Sant+Lle%C3%AD,+Cam%C3%AD+de+Casa+Alta+s/n,+Ctra.+Granollers+a+Masnou,+km+10,+5,+08410,+Barcelona&ftid=0x12a4b8395d0374cb:0x1ce2b635e2b1d59&hl=en-SE&gl=se&entry=gps&coh=175364&lucs=47064843&g_ep=CAISBjYuNjEuMRgAINeCAyoINDcwNjQ4NDNCAkVT&g_st=iw',
		googleMapsMeetingPoint:
			'https://www.google.com/maps/place/Mercat+de+Colom/@41.3753259,2.1781712,15z/data=!4m6!3m5!1s0x12a4a3ee9e301705:0xb6272e6d8f5aeb80!8m2!3d41.3753259!4d2.1781712!16s%2Fg%2F11j8hj2zj0?hl=es&coh=164777&entry=tt&shorturl=1',
	},
};
