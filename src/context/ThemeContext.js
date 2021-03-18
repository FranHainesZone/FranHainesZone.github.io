import React, { createContext, useContext, useState, useEffect } from "react";
import { ThemeProvider as EmotionThemeProvider } from "emotion-theming";
import theme from "../themes/theme.js";

// Set initial global state
const initialState = {
  // is dark mode activated?
  dark: false,
  // toggle function default state
  toggle: () => {},
};

// Create a context and pass in the default state
// Context: Provides a way to share data that can be considered “global” for a tree of React components
const ThemeContext = createContext(initialState);
// using custom useTheme hook based on the useContext hook
// stops us having to wrap any page of our app in ThemeContext.Consumer
const useTheme = () => useContext(ThemeContext);

// set local state (theme state) when mounting app
const useEffectDarkMode = () => {
  const [themeState, setThemeState] = useState({
    dark: false,
    hasThemeMounted: false,
  });
  useEffect(() => {
    const lsDark = localStorage.getItem("dark") === "true";
    setThemeState({ ...themeState, dark: lsDark, hasThemeMounted: true });
    // pass empty array as the second argument to make sure we only call useEffect when ThemeProvider component mounts
    // otherwise it would be called on every ThemeProvider render
  }, []);

  return [themeState, setThemeState];
};

// provide theme and themeState to whole app
// Provider contains all logic for dark motre feature
const ThemeProvider = ({ children }) => {
  const [themeState, setThemeState] = useEffectDarkMode();

  if (!themeState.hasThemeMounted) {
    return <div />;
  }

  // reverse theme and update themeState
  // update dark key in LS
  const toggle = () => {
    const dark = !themeState.dark;
    localStorage.setItem("dark", JSON.stringify(dark));
    setThemeState({ ...themeState, dark });
  };

  // if dark is set to true in LS, update state
  const computedTheme = themeState.dark ? theme("dark") : theme("light");

  return (
    // dark theme is passed to theme provider
    <EmotionThemeProvider theme={computedTheme}>
      {/*   
      Inject updated state into ThemeContext 
      By using context we avoid passing props through intermediate elements
      */}
      <ThemeContext.Provider
        value={{
          dark: themeState.dark,
          toggle,
        }}
      >
        {children}
      </ThemeContext.Provider>
    </EmotionThemeProvider>
  );
};

export { ThemeProvider, useTheme };
