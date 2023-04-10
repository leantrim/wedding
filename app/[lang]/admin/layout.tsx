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

const roboto = Roboto({ weight: '400', subsets: ['latin'] });

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en' className={roboto.className}>
			<body className={roboto.className}>{children}</body>
		</html>
	);
}
