import '../globals.css';
import { Baskervville } from 'next/font/google';
import { AppShellDataContextProvider } from '../context/appShellData';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { SiteConfig } from './config';
import { i18n } from '../../i18n-config';
import mobileHeader from '/public/assets/mobile-header.webp';
import { Metadata } from 'next';
config.autoAddCss = false;

const karla = Baskervville({ weight: '400', subsets: ['latin'] });

export async function generateStaticParams() {
	return i18n.locales.map((locale) => ({ lang: locale }));
}

type Props = {
	params: { lang: string };
	searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const description =
		params.lang === 'en'
			? "Sepideh & George are getting married, and you're invited!"
			: 'Sepideh y George se van a casar, ¡y estás invitado!';

	return {
		title: 'Sepideh & George',
		description: description,
		openGraph: {
			title: 'Sepideh & George',
			images: [mobileHeader.src],
			description: description,
			url: 'https://sepidehandgeorge.com',
			siteName: 'Sepideh & George',
			type: 'website',
			alternateLocale: params.lang,
		},
	};
}

export default async function Root({
	children,
	params,
}: {
	children: React.ReactNode;
	params: { lang: string };
}) {
	return (
		<html lang={params.lang}>
			<AppShellDataContextProvider>
				<body style={{ backgroundColor: SiteConfig.colors.primary }}>
					{children}
				</body>
			</AppShellDataContextProvider>
		</html>
	);
}
