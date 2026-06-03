import { useTranslation } from "react-i18next";

const ButtonLanguage = ({ className }: { className?: string }) => {
    const { i18n } = useTranslation();

    const toggleLanguage = () => {
        const newLanguage = i18n.language === "pt" ? "en" : "pt";
        i18n.changeLanguage(newLanguage);
    };

    const buttonStyle = "text-amber-50 p-2 border rounded-[35%] bg-none hover:text-amber-600 dark:text-amber-50 dark:hover:text-amber-500";

    return (
        <div className={`flex flex-row ${className ?? ""} transition-all ease-in-out cursor-pointer`}>
            <button onClick={toggleLanguage} className={buttonStyle}>
                {i18n.language === "pt" ? "EN" : "PT"}
            </button>
        </div>
    );
};

export default ButtonLanguage;
