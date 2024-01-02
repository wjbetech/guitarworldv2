import { Dispatch, SetStateAction, createContext } from "react";

type ThemeContextType = {
  darkTheme: boolean,
  setDarkTheme: Dispatch<SetStateAction<boolean>>
}

const themeContext = createContext<ThemeContextType>({
  darkTheme: false,
  setDarkTheme: () => {},
});

export default themeContext;


// default theme will be light theme
