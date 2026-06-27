import { Moon, Sun } from "lucide-react";
import { useDarkMode } from "../context/darkModeContext";

const ButtonDarkMode = () => {
    const { darkMode, toggleDarkMode } = useDarkMode();

    return (
        <button onClick={toggleDarkMode} className="cursor-pointer text-white p-3 hover:scale-105 dark:text-amber-50 bg-white/3 shadow-xl border border-white/10 backdrop-blur-sm rounded-2xl">
            {darkMode ? <Sun size={20} fill="white" /> : <Moon size={20} fill="white" />}
        </button>
    );
};

export default ButtonDarkMode;
