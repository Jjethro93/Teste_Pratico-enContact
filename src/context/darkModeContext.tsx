import { createContext, useContext, useEffect, useState } from "react";

interface DarkModeContextT {
    darkMode: boolean;
    toggleDarkMode: () => void;
}

const DarkModeContext = createContext<DarkModeContextT>({} as DarkModeContextT);

export function DarkModeProvider({ children }: { children: React.ReactNode }) {
    const [darkMode, setDarkMode] = useState(() => {
        return localStorage.getItem("darkMode") === "true";
    });

    useEffect(() => {
        document.documentElement.classList.toggle("dark", darkMode);
        localStorage.setItem("darkMode", String(darkMode));
    }, [darkMode]);

    const toggleDarkMode = () => setDarkMode(prev => !prev);

    return (
        <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
            {children}
        </DarkModeContext.Provider>
    );
}

export const useDarkMode = () => useContext(DarkModeContext);
