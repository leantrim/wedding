import '../globals.css';
import { Baskervville } from 'next/font/google';
import { AppShellDataContextProvider } from '../context/appShellData';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { SiteConfig } from './config';
config.autoAddCss = false;

export const metadata = {
	title: 'Sepideh & George',
	description: 'Sepideh & George',
};

const karla = Baskervville({ weight: '400', subsets: ['latin'] });

export default async function Root({
	children,
	params,
}: {
	children: React.ReactNode;
	params: { lang: string };
}) {
	return (
		<html lang={params.lang} className={karla.className}>
			<AppShellDataContextProvider>
				<body style={{ backgroundColor: SiteConfig.colors.primary }}>
					{children}
				</body>
			</AppShellDataContextProvider>
		</html>
	);
}
