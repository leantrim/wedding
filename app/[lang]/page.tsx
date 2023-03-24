import { getDictionary } from '../../get-dictionary';
import { Locale } from '../../i18n-config';
import MenuList from './components/Header/MenuList';
import StyledComponentsRegistry from './lib/registry';
import Main from './main';

export default async function IndexPage({
	params,
	searchParams,
}: {
	params: { lang: Locale };
	searchParams?: { [key: string]: string | string[] | undefined };
}) {
	const dictionary = await getDictionary(params.lang);
	const bypassPin = searchParams?.bypasspin === '42069';
	return (
		<>
			<StyledComponentsRegistry>
				{bypassPin ? (
					<div>
						<Main dictionary={dictionary} />
						<MenuList menu={dictionary.menu} />
					</div>
				) : (
					<div
						style={{
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'center',
							alignItems: 'center',
							gap: '48px',
							margin: '24px',
						}}
					>
						<title>Website access forbidden</title>
						<h3>Sepideh And George are getting married!</h3>
						<h4>
							Unfortunetly the website is not finished yet, however feel free to
							check back soon!
						</h4>
					</div>
				)}
			</StyledComponentsRegistry>
		</>
	);
}
