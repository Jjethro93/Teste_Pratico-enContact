import { Globe } from "lucide-react";
import { useTranslation } from "react-i18next";

const ButtonLanguage = ({ className }: { className?: string }) => {
    const { i18n } = useTranslation();

    const toggleLanguage = () => {
        const newLanguage = i18n.language === "pt" ? "en" : "pt";
        i18n.changeLanguage(newLanguage);
        localStorage.setItem("language", newLanguage);
    };

    const buttonStyle = "text-white rounded-2xl cursor-pointer hover:scale-105 items-center w-11 h-11 text-[14px] dark:text-amber-50 dark:hover:text-amber-500 bg-white/3 shadow-xl border border-white/10 backdrop-blur-sm rounded-2xl";
    

    return (
        <div className={`flex flex-col transition-all ease-in-out cursor-pointer ${className}`}>
            <button onClick={toggleLanguage} className={`${buttonStyle} flex flex-row gap-1 p-1`}>
                <Globe size={15}/> {i18n.language === "pt" ? "EN" : "PT"}
            </button>
        </div>
    );
};

export default ButtonLanguage;
