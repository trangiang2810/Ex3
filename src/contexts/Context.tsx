import { ReactNode, createContext, useState } from "react";

interface ContextProviderProps {
  children: ReactNode;
}

export const DarkModeContext = createContext({});
export const DarkModeProvider = ({ children }: ContextProviderProps) => {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  const themeStyle = {
    day: {
      backgroundColor: "#fff",
      color: "#000",
      fontSize: "3rem",
      alignItems: "center",
      paddingTop: "45%",
    },
    night: {
      backgroundColor: "#000",
      color: "#ffffff",
      alignItems: "center",
      paddingTop: "45%",
    },
  };
  const themeBtn = {
    orange: {
      background: "#f36500",
    },
    yellow: {
      background: "yellow",
    },
  };
  return (
    <DarkModeContext.Provider
      value={{
        darkMode,
        setDarkMode,
        themeStyle: themeStyle[darkMode ? "night" : "day"],
        themeBtn: themeBtn[darkMode ? "yellow" : "orange"],
      }}
    >
      {children}
    </DarkModeContext.Provider>
  );
};
