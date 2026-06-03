import { useState } from "react";
import Button from "../components/Button";
import ChatBox from "../components/ChatBox";
import SideConversation from "../components/SideConversation";
import UserMenu from "../components/userMenu"
import { ChevronDown } from "lucide-react";
import { useArchive } from "../context/archiveContext";
import { useNavigate } from "react-router";
import { useUser } from "../context/userContext";
import ButtonLanguage from "../components/ButtonLanguage";
import { useTranslation } from "react-i18next";
import ButtonDarkMode from "../components/ButtonDarkMode";

interface subMenuprops {
    id: number;
    name: string;
}

interface contactT {
    id: number;
    name: string;
    subMenus: subMenuprops[];
}





export default function MainPage() {

    const { t } = useTranslation();




    const [darkMode] = useState(false);


const navigate = useNavigate()
    const [activeContact, setActiveContact] = useState<contactT | null>(null);
    const [activeSubmenu, setActiveSubmenu] = useState<subMenuprops | null>(null);


    function handleClick(contact: contactT, submenu: subMenuprops) {

        setActiveContact(contact);
        setActiveSubmenu(submenu)

    };


    const { handleArchive } = useArchive();
    const {user} = useUser()


    return (


        <div className={`flex flex-col md:flex-row w-full md:min-h-screen bg-linear-to-br from-amber-700 to-amber-400 dark:bg-linear-to-tl dark:from-black dark:to-gray-700  md:p-6 ${darkMode && "dark:"}`}>
            <div className="flex flex-col gap-2 fixed z-50 p-2 top-40 right-1 md:top-auto md:left-auto justify-start md:bottom-10">
            <ButtonDarkMode/>

            <ButtonLanguage />
            </div>

            <div className="flex flex-col sticky z-10 bg-none md:z-0 w-full md:w-[25%] h-[10%] md:h-full top-0 p-3 md:p-0 ">
                <nav className="flex flex-row justify-between w-full mt-4 mb-3 gap-2 ">
                    <div className="flex flex-row  items-center  animate-[fadeIn_1.5s_ease-in-out_forwards] gap-2">
                        <UserMenu />
                        <h2 className="font-extrabold text-gray-100 dark:text-white">
                            {user?.name}
                        </h2>
                    </div>
                    <button className="flex flex-row w-25 justify-between items-center gap-1 border border-amber-100 cursor-pointer dark:border-white h-10.5 p-1.5 mr-3 rounded-lg hover:bg-white hover:text-amber-600 text-white ">
                         {t("Novo")} 
                        <ChevronDown className="text-amber-100 dark:text-amber-50 hover:text-amber-600" />
                    </button>


                </nav>

            

                <section>
                    <SideConversation onSelectContact={handleClick} />
                </section>



            </div>
            <section className=" w-full md:w-[70%] h-[70%] md:h-full z-20 bg-gray-100/90  dark:bg-gray-700 rounded-2xl mt-3 md:mt-0 shadow-md">
               <div className="flex flex-col justify-between gap-3 m-3.5">
                <div className="flex flex-row items-center justify-between gap-1 border-2 border-none  ">
                    <input type="search" placeholder={t("Pesquisar")} className="w-full border border-amber-600 hover:border-2 outline-none bg-gray-200 h-10.5
                     p-2.5 rounded-2xl placeholder:text-amber-300 placeholder:pl-2 dark:placeholder:text-gray-500 dark:border-0 dark:hover:border-gray-500 " />
                    <ChevronDown color="#efc82b" />
                     </div>
                     
                    <Button onClick={() => navigate("/archives")} className="font-light text[12px]">
                       {t("Archivados")}
                    </Button>

                    </div>
               

            

                <div className="flex flex-row gap-3 md:gap-5 p-5 items-center ">
                    <input type="checkbox" className="w-4.5 border-2 border-amber-600
                " />
                    <Button>{t("Atribuir")}</Button>
                    <Button onClick={handleArchive}>{t("Arquivar")}</Button>
                    <Button >{t("Agendar")}</Button>


                </div>


                <div className="w-full h-full mt-6">


                    <ChatBox activeContact={activeContact} activeSubmenu={activeSubmenu} />


                </div>


            </section>
        </div>

    )

}



