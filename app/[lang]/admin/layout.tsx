import { Roboto } from 'next/font/google';
import formImage from '/public/assets/wedding_form_image.png';

export const metadata = {
	title: 'Admin panel | Sepideh & George',
	description: 'Admin panel for all forms',
	openGraph: {
		title: 'Admin panel | Sepideh & George',
		description:
			'Anyone with this link can see all forms submitted, so carefull with who you share.',
		url: 'https://sepidehandgeorge.com/en/admin',
		siteName: 'Sepideh & George',
		images: [formImage.src],
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body>{children}</body>
		</html>
	);
}
