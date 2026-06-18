import { useTranslation } from "react-i18next";

const ButtonLanguage = ({ className }: { className?: string }) => {
    const { i18n } = useTranslation();

    const toggleLanguage = () => {
        const newLanguage = i18n.language === "pt" ? "en" : "pt";
        i18n.changeLanguage(newLanguage);
    };

    const buttonStyle = "text-white rounded-2xl items-center w-11 h-11 text-[14px] dark:text-amber-50 dark:hover:text-amber-500 bg-white/3 shadow-xl border border-white/10 backdrop-blur-sm rounded-2xl";
    

    return (
        <div className={`flex flex-row ${className ?? ""} transition-all ease-in-out cursor-pointer`}>
            <button onClick={toggleLanguage} className={buttonStyle}>
                {i18n.language === "pt" ? "EN" : "PT"}
            </button>
        </div>
    );
};

export default ButtonLanguage;
