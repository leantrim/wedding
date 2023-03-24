// eslint-disable-next-line import/no-extraneous-dependencies
'use client';
import { ReactNode, useEffect, useRef } from 'react';
import React, { createContext, useState } from 'react';

interface AppShellData {
	setMenuActive: (value: boolean) => void;
	menuActive: boolean;
	headerRef: React.RefObject<HTMLDivElement>;
}

const AppShellDataContext = createContext<AppShellData>({
	setMenuActive: () => {},
	menuActive: false,
	headerRef: {} as React.RefObject<HTMLDivElement>,
});

const AppShellDataContextProvider = ({ children }: { children: ReactNode }) => {
	// Add the custom prop to the component
	const [menuActive, setMenuActive] = useState<boolean>(false);
	const headerRef = useRef<HTMLDivElement>(null);

	function disableScroll() {
		document.addEventListener('touchmove', preventDefault, { passive: false });
		document.addEventListener('wheel', preventDefault, { passive: false });
	}

	function enableScroll() {
		document.removeEventListener('touchmove', preventDefault);
		document.removeEventListener('wheel', preventDefault);
	}

	function preventDefault(event: any) {
		event.preventDefault();
	}

	useEffect(() => {
		if (menuActive) {
			disableScroll();
		} else {
			enableScroll();
		}

		return () => {
			enableScroll();
		};
	}, [menuActive]);

	return (
		<AppShellDataContext.Provider
			value={{
				setMenuActive,
				menuActive,
				headerRef,
			}}
		>
			{children}
		</AppShellDataContext.Provider>
	);
};

export { AppShellDataContext, AppShellDataContextProvider };
