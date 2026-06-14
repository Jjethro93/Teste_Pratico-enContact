
import { ChevronRight, Settings, FileQuestionMark, LogOut, Pencil } from "lucide-react"
import userprofile from "../assets/transferir (2).jpg"
import { useState } from "react";
import { useNavigate } from "react-router";
import { useTranslation } from "react-i18next";
import { useUser } from "../context/userContext";




const UserMenu = () => {

    const { t } = useTranslation();
    const { user } = useUser();
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    return (
        <div className="relative">

            <div>
                <img src={userprofile} alt="Profile-Image" className="w-10 rounded-full cursor-pointer" onClick={() => setIsOpen(true)} />
            </div>
            

            <div onClick={() => setIsOpen(false)} className={` flex flex-col z-30 decoration-0 text-white bg-amber-600 h-auto
             dark:bg-gray-800 gap-4 absolute top-14 left-0 overflow-hidden
                transition-all duration-700 ease-in-out ${isOpen ? "w-44 p-5" : "w-0 p-0"}`}>

                <a href="#" className="flex flex-row items-baseline justify-between gap-3 hover:text-amber-950 dark:hover:text-amber-600">
                    <Pencil size={20} />
                    <p className="w-full">{t("Editar perfil")} </p>
                    <span><ChevronRight size={12} /></span>
                </a>
                <a href="#" className="flex flex-row items-center justify-between gap-3  hover:text-amber-950 dark:hover:text-amber-600">
                    <Settings size={20} />
                    <p className="w-full">{t("Configurações")}</p>
                    <span><ChevronRight size={12} /></span>
                </a>
                <a href="#" className="flex flex-row items-center justify-between gap-3  hover:text-amber-950 dark:hover:text-amber-600">
                    <FileQuestionMark size={20} />
                    <p className="w-full">{t("Ajuda")}</p>
                    <span><ChevronRight size={12} /></span>
                </a>

                <a onClick={() => navigate("/")} className="flex flex-row items-center justify-between gap-3  hover:text-amber-950 dark:hover:text-amber-600">
                    <LogOut size={20} />
                    <p className="w-full">{t("Sair")}</p>
                    <span><ChevronRight size={12} /></span>
                </a>



            </div>
        </div>
    )

}


export default UserMenu