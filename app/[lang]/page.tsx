import { ParsedUrlQuery } from 'querystring';
import { getDictionary } from '../../get-dictionary';
import { Locale } from '../../i18n-config';
import MenuList from './components/Header/MenuList';
import StyledComponentsRegistry from './lib/registry';
import Main from './main';

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
				<div>
					<Main dictionary={dictionary} />
					<MenuList menu={dictionary.menu} />
				</div>
			</StyledComponentsRegistry>
		</>
	);
}
