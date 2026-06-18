import { useState } from "react";
import { Moon, Sun } from "lucide-react";



const ButtonDarkMode = () => {

const [darkMode, setDarkMode] = useState(false);
const toggleDarkMode = () => {

    
        const newMode = !darkMode;

        setDarkMode(newMode);

        document.documentElement.classList.toggle("dark", newMode);
        
    };

    const buttonStyle = "text-white p-3 rounded-[35%] hover:text-amber-600 dark:text-amber-50 dark:hover:text-amber-500 bg-white/3 shadow-xl border border-white/10 backdrop-blur-sm rounded-2xl";
    
    
    return(
            <button onClick={toggleDarkMode} className={buttonStyle}>
                {darkMode ? <Sun size={20} fill="white"  /> : <Moon size={20} fill="white"/>}
            </button>
        )
    };


    export default ButtonDarkMode;


