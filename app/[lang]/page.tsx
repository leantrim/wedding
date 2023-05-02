import { Baskervville } from 'next/font/google';
import { ParsedUrlQuery } from 'querystring';
import { getDictionary } from '../../get-dictionary';
import { Locale } from '../../i18n-config';
import MenuList from './components/Header/MenuList';
import StyledComponentsRegistry from './lib/registry';
import Main from './main';
const karla = Baskervville({ weight: '400', subsets: ['latin'] });

type IndexPageProps = {
	params: { lang: Locale; slug: string };
	searchParams?: ParsedUrlQuery;
};

export default async function IndexPage({
	params,
	searchParams,
}: IndexPageProps) {
	const dictionary = await getDictionary(params.lang);

	return (
		<>
			<StyledComponentsRegistry>
				<div className={karla.className}>
					<Main dictionary={dictionary} />
					<MenuList menu={dictionary.menu} />
				</div>
			</StyledComponentsRegistry>
		</>
	);
}
