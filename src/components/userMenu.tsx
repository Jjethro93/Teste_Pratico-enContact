
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
        <div >
            <div >
                <img src={userprofile} alt="Profile-image" onClick={() => setIsOpen(true)} className=" w-10 rounded-full gap-2.5 cursor-pointer" />
            

            </div>

            <div onClick={() => setIsOpen(false)} className={`flex flex-col z-index-30 decoration-0 border border-amber-50 text-white bg-amber-600 w-full dark:bg-gray-800 h-66 rounded-b-3xl gap-4 p-5 absolute top-0 left-0 ${isOpen ? "block" : "hidden"} `}>
                <div className="flex flex-row items-center gap-1">

                    <img src={userprofile} alt="Profile-Image" className="w-10 rounded-full " />
                     <h2 className="font-bold text-amber-50">{user?.name}</h2>


                </div>

                <hr></hr>



                
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

                    <a  onClick={() => navigate("/")} className="flex flex-row items-center justify-between gap-3  hover:text-amber-950 dark:hover:text-amber-600">
                        <LogOut size={20} />
                        <p className="w-full">{t("Sair")}</p>
                        <span><ChevronRight size={12} /></span>
                    </a>

                

            </div>
        </div>
    )

}


export default UserMenu