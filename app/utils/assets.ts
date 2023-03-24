export const getAssetUrl = (src: string, lang: string): string => {
	console.log('getAssetUrl: src =', src, 'lang =', lang);
	// Remove the locale from the path if it's present
	const pathWithoutLocale = src.replace(`/${lang}`, '');
	// Check if the path already starts with '/public'
	const hasPublicPath = pathWithoutLocale.startsWith('/public');
	// Return the corrected asset URL
	const result = hasPublicPath
		? pathWithoutLocale
		: `/public${pathWithoutLocale}`;
	return result;
};
