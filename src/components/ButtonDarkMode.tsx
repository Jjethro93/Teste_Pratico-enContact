import { useState } from "react";
import { Moon, Sun } from "lucide-react";



const ButtonDarkMode = () => {

const [darkMode, setDarkMode] = useState(false);
const toggleDarkMode = () => {

    
        const newMode = !darkMode;

        setDarkMode(newMode);

        document.documentElement.classList.toggle("dark", newMode);
        
    };

    const buttonStyle = "text-amber-50 p-3 border rounded-[35%] bg-none hover:text-amber-600 dark:text-amber-50 dark:hover:text-amber-500";
    
    
    return(
            <button onClick={toggleDarkMode} className={buttonStyle}>
                {darkMode ? <Sun size={15} /> : <Moon size={15} />}
            </button>
        )
    };


    export default ButtonDarkMode;


