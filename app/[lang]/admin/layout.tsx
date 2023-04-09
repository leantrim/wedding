import { Roboto } from 'next/font/google';

const description =
	'WARNING !!! DO NOT SHARE THIS LINK WITH ANYONE AS THEY WILL BE GRANTED ACCESS TO ALL THE FORMS. WARNING !!!';
export const metadata = {
	title: 'Admin panel | Sepideh & George',
	description: description,
	openGraph: {
		title: 'Admin panel | DO NOT SHARE LINK WITH ANYONE!',
		description: description,
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
