import { useState } from "react";
import { Moon, Sun } from "lucide-react";



const ButtonDarkMode = () => {

const [darkMode, setDarkMode] = useState(false);
const toggleDarkMode = () => {

    
        const newMode = !darkMode;

        setDarkMode(newMode);

        document.documentElement.classList.toggle("dark", newMode);
        
    };
    
    
    return(
            <button onClick={toggleDarkMode} className=" cursor-pointer md:left-10 rounded-[20%] transition-all ease-in-out text-white border p-1 bg-amber-600 hover:bg-amber-50 hover:text-amber-600 font-semibold">
                {darkMode ? <Sun size={15} /> : <Moon size={15} />}
            </button>
        )
    };


    export default ButtonDarkMode;


