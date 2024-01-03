import { Dispatch, SetStateAction, createContext } from "react";

type ThemeContextType = {
  darkTheme: boolean,
  setDarkTheme: Dispatch<SetStateAction<boolean>>
}

const ThemeContext = createContext<ThemeContextType>({
  darkTheme: false,
  setDarkTheme: () => {}
});

export default ThemeContext;

// # typing requires .ts
// # default theme will be light theme
