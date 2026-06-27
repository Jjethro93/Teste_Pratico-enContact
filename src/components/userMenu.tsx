
import { ChevronRight, Settings, FileQuestionMark, LogOut, Pencil, Plus } from "lucide-react"
import { User } from "lucide-react"
import { useState } from "react";
import { useNavigate } from "react-router";
import { useTranslation } from "react-i18next";








const UserMenu = () => {

    const { t } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
    

    return (
        <div>



            <div
                className="flex flex-row gap-3 mt-14 md:mt-0 items-center justify-between dark:md:bg-gray-800  
            rounded-xl p-1 w-[80vw] md:w-full">
                <div className="relative flex items-center w-14 h-14 md:w-18 md:h-16">
                <User size={30} fill="#ed6a0d" className="w-14 h-14 p-2 items-center rounded-full text-amber-600 bg-white border cursor-pointer" onClick={() => setIsOpen(prev => !prev)} />
                
                </div>
                <div className="flex flex-col">
                    <h1 className="leading-6 font-bold text-[18px] md:text-xl text-white">
                        {t("BEM VINDO !")}
                        
                    </h1>
                    <p className="text-[10px] text-white dark:text-white">
                        {t("Gerencie suas contas com facilidade")}
                    </p>
                </div>

                <button className="flex flex-row w-20 gap-1 justify-between items-center
                bg-white text-amber-600 text-[10px] hover:bg-white hover:text-amber-600 cursor-pointer px-3
                h-10.5 p-1 rounded-xl
                  dark:bg-linear-to-r dark:from-gray-600 dark:to-gray-700 
                 dark:text-amber-50 hover:scale-105">
                    <Plus size={20} /> {t("NOVO")}


                </button>
            </div>





            <div className={`absolute flex flex-col justify-center decoration-none bg-white shadow-xl border
             border-white/10 backdrop-blur-sm gap-2 p-0
             dark:bg-gray-800  top-30 z-50 md:top-20 left-0 rounded-xl h-auto w-[80vw] md:w-76
                transition-all duration-700 ease-in-out ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}>
                <label className=" px-8 py-2 mt-3 items-center "> 
                    <p className="text-gray-300 font-semibold"> {t("Conta")}</p>
                    
                    <a href="#" 
                    className="flex flex-row justify-between gap-2 md:gap-3 text-gray-500 text-[13px]
                     hover:text-amber-950 dark:hover:text-amber-600  hover:bg-amber-50 p-3 rounded-2xl items-center">
                        <Pencil size={30} />
                        <p className="w-full">{t("Editar perfil")} </p>
                        <span className="text-gray-600/30 dark:text-gray-600/50"><ChevronRight size={12} /></span>
                    </a>
                    <hr className="text-gray-600/10 dark:text-gray-600/30" />
                    <a href="#" className="flex flex-row gap-2 md:gap-3 justify-between text-gray-500 text-[13px]  hover:text-amber-950 dark:hover:text-amber-600  hover:bg-amber-50 p-3 rounded-2xl items-center">
                        <Settings size={35} />
                        <p className="w-full">{t("Configurações")}</p>
                        <span className="text-gray-600/30 dark:text-gray-600/50"><ChevronRight size={12} /></span>
                    </a>
                    
                </label>
                <hr className="text-gray-600/10 dark:text-gray-600/30 " />
                <label className=" px-8 py-2 " >
                    <p className="  text-gray-300 font-semibold"> {t("Supporte")}</p>
                    <a href="#" 
                    className="flex flex-row gap-2 md:gap-3 justify-between text-[13px] text-gray-500
                     hover:text-amber-950 dark:hover:text-amber-600  hover:bg-amber-50 p-3 rounded-2xl items-center">
                        <FileQuestionMark size={30} />
                        <p className="w-full">{t("Ajuda")}</p>
                        <span className="text-gray-600/30 dark:text-gray-600/50"><ChevronRight size={12} /></span>
                    </a>
                </label>

                <hr className="text-gray-600/10 dark:text-gray-600/30" />
                <div className=" p-4">
                <a onClick={() => navigate("/")} 
                className="flex gap-2 md:gap-4 flex-row justify-between text-red-400 hover:bg-red-500/10 px-8 py-2 
                rounded-2xl items-center hover:text-amber-950 dark:hover:text-red-700 dark:hover:bg-white">
                    <LogOut size={30} />
                    <p className="w-full">{t("Sair")}</p>
                    <span className="text-gray-600/30 dark:text-gray-600/50"><ChevronRight size={12} /></span>
                </a>
                </div>



            </div>
        </div>
    )

}


export default UserMenu