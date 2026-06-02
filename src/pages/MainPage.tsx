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


        <div className={`flex flex-col gap-2 md:flex-row w-full md:min-h-screen bg-amber-600 dark:bg-gray-900  md:p-6 ${darkMode && "dark:"}`}>
            <div className="fixed z-50 p-2 shadow-md top-28 right-3 md:top-auto md:left-auto justify-start md:bottom-10">
            <ButtonDarkMode/>

            <ButtonLanguage className=" cursor-pointer md:left-10 rounded-[20%] transition-all ease-in-out text-white border  hover:bg-gray-100 hover:text-amber-600 font-semibold" />
            </div>

            <div className="flex flex-col sticky z-10 bg-amber-600 dark:bg-gray-900 md:z-0 w-full md:w-[25%] h-[10%] md:h-full top-0 p-3 md:p-0 ">
                <nav className="flex flex-row justify-between w-full mt-4 mb-3 gap-2 ">
                    <div className="flex flex-row  items-center  animate-[fadeIn_1.5s_ease-in-out_forwards] gap-2">
                        <UserMenu />
                        <h2 className="font-extrabold text-gray-100 dark:text-white">
                            {user?.name}
                        </h2>
                    </div>
                    <div className="flex flex-row items-center gap-1 border-2 border-amber-100 dark:border-white h-10.5 p-1.5 mr-3 rounded-l-lg ">
                        <button className="text-amber-100 dark:text-amber-50 font-medium"> {t("Novo")} </button>
                        <ChevronDown className="text-amber-100 dark:text-amber-50" />
                    </div>


                </nav>

                <hr className="border-gray-100 border-2 dark:border-cyan-800 dark:border-b-cyan-950  "></hr>

                <section>
                    <SideConversation onSelectContact={handleClick} />
                </section>



            </div>
            <section className=" w-full md:w-[80%] h-[70%] md:h-full bg-gray-100 dark:bg-cyan-950 rounded-2xl mt-3 md:mt-0">
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
               

                <hr className="border-amber-600 border-2 border-t-gray-300 "></hr>

                <div className="flex flex-row gap-3 md:gap-5 p-5 items-center ">
                    <input type="checkbox" className="w-4.5 border-2 border-amber-600
                " />
                    <Button>{t("Atribuir")}</Button>
                    <Button onClick={handleArchive}>{t("Arquivar")}</Button>
                    <Button >{t("Agendar")}</Button>


                </div>


                <div className="w-full h-full mt-4">


                    <ChatBox activeContact={activeContact} activeSubmenu={activeSubmenu} />


                </div>


            </section>
        </div>

    )

}



