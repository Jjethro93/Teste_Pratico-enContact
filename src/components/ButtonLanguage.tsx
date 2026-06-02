import { useTranslation } from "react-i18next";

const ButtonLanguage = ({ className }: { className?: string }) => {
    const { i18n } = useTranslation();

    const toggleLanguage = () => {
        const newLanguage = i18n.language === "pt" ? "en" : "pt";
        i18n.changeLanguage(newLanguage);
    };

    return (
        <div className={`flex flex-row ${className ?? ""} text-sm font-medium text-white border  hover:bg-gray-100 hover:text-amber-600 dark:hover:bg-gray-100 dark:hover:text-amber-600 rounded-[20%] transition-all ease-in-out cursor-pointer`}>
            <button onClick={toggleLanguage} className="text-amber-50 p-1 rounded-[20%] bg-amber-600 hover:text-amber-600 hover:bg-amber-50 dark:bg-gray-500 dark:text-amber-50 dark:hover:text-amber-500">
                {i18n.language === "pt" ? "EN" : "PT"}
            </button>
        </div>
    );
};

export default ButtonLanguage;
