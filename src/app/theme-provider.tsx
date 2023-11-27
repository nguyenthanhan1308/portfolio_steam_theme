"use client";

import { createContext, useContext, useState } from "react";

type Theme = "light" | "dark" | "system";

const ThemeContext = createContext<Theme>("system");

export const useGetTheme = () => useContext(ThemeContext);

export function ThemeProvider({children}: {children: React.ReactNode;}) {
	const [theme, setTheme] = useState<Theme>("light");

	return (
		<ThemeContext.Provider value={theme}>
			{children}
		</ThemeContext.Provider>
	);
}
