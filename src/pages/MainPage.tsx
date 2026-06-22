import { useState, type ChangeEvent } from "react";
import ChatBox from "../components/ChatBox";
import SideConversation from "../components/SideConversation";
import UserMenu from "../components/userMenu"
import { Archive, Calendar, Search, UserPlus, FolderArchive, ListFilter } from "lucide-react";
import { useArchive } from "../context/archiveContext";
import { useNavigate } from "react-router";
import ButtonLanguage from "../components/ButtonLanguage";
import ButtonDarkMode from "../components/ButtonDarkMode";
import { useTranslation } from "react-i18next";
import Decoration from "../components/Decoration";
import MobileMenuBar from "../components/MobileMenuBar";


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
    const [searchText, setSearchText] = useState<string>("");
    const [activeSubmenu, setActiveSubmenu] = useState<subMenuprops | null>(null);

    const handleSearchChange = (event: ChangeEvent<HTMLInputElement>): void => {
        setSearchText(event.target.value);

    };


    function handleClick(contact: contactT, submenu: subMenuprops) {

        setActiveContact(contact);
        setActiveSubmenu(submenu)

    };


    const { handleArchive } = useArchive();



    return (


        <div 
        className={`relative md:overflow-hidden flex flex-col md:flex-row w-full  min-h-screen 
            md:h-screen bg-linear-to-br from-amber-600
         to-amber-400 dark:bg-linear-to-tl dark:from-black dark:to-gray-700 
         ${darkMode && "dark:"}`}>

            <Decoration />

            <MobileMenuBar onSelectContact={handleClick} />


            <div className="flex flex-col gap-2 fixed z-50 md:p-2 top-3 right-2 md:top-auto md:right-auto justify-center items-center md:bottom-10">
                <ButtonDarkMode />

                <ButtonLanguage />
            </div>


            <div className=" flex flex-col p-4 bg-none md:z-0 w-full md:w-[35%] md:overflow-y-auto md:h-sreen top-0 md:p-8 ">


                <nav className="relative flex flex-row justify-between w-full gap-2 z-40 md:z-10 ">
                    <UserMenu />

                </nav>



                <section className="relative z-0" >
                    <SideConversation onSelectContact={handleClick} />
                </section>

            </div>


            <section className=" relative z-0 md:z-0 md:w-full h-full md:flex-1 md:overflow-y-auto bg-gray-100 pt-6 dark:bg-gray-900 mt-3 md:mt-0 
            shadow-md">
                <div className="flex flex-col justify-between gap-3 m-3.5">
                    <div className="relative flex flex-row items-center justify-between gap-1 border-2 border-none mb-8  ">
                        <input type="search"
                            placeholder={t("Pesquisar")}
                            onChange={handleSearchChange}
                            value={searchText}
                            className="border-none hover:border-2 outline-none bg-white h-10.5
                     p-2.5 pl-10 rounded-2xl placeholder:text-gray-500 
                     w-full overflow-hidden dark:placeholder:text-gray-500 
                     dark:border-0 dark:hover:border-gray-500"/>
                        <Search
                            className="absolute left-3 text-amber-600 dark:text-gray-600/60
                            pointer-events-none transition-all duration-200"
                        />
                        <ListFilter className="text-amber-600 dark:text-white" />
                    </div>
                    <div className="ml-5 hidden md:block">
                        <div onClick={() => navigate("/archives")}
                         className="flex flex-row max-w-50  gap-2 cursor-pointer hover:scale-105 text-amber-600 hover:text-amber-600 dark:text-white">
                            <FolderArchive /> {t("ARQUIVOS")}
                        </div>

                        <p className="text-gray-600 dark:text-white text-[12px]">{t("Gerencie e organize seus arquivos")}</p>

                    </div>

                </div>




                <div className="flex flex-row justify-center gap-3 md:gap-5  items-center 
                      m-3">

                    <div className="flex flex-col items-center justify-center px-5 py-2 gap-1 md:gap-2 hover:scale-105 cursor-pointer border rounded-xl shadow border-white/10 backdrop-blur-sm" >
                        <UserPlus size={30} 
                        className="text-amber-600 dark:text-white bg-amber-50 dark:bg-gray-800  rounded-xl w-12 h-12 p-3 " />
                        <p className="text-[12px]  dark:text-gray-400">{t("ATRIBUIR")}</p>
                    </div>
                    <div className="flex flex-col items-center justify-center px-5 py-2 gap-1 md:gap-2 hover:scale-105 cursor-pointer border rounded-xl shadow border-white/10 backdrop-blur-sm"
                        onClick={handleArchive}>
                        <Archive size={30} className="text-amber-600 dark:text-white bg-amber-50 dark:bg-gray-800 rounded-xl w-12 h-12 p-3 " />
                        <p className="text-[12px] dark:text-gray-400"> {t("ARQUIVAR")}</p>
                    </div>
                    <div className="flex flex-col items-center justify-center px-5 py-2 gap-1 md:gap-2 hover:scale-105 cursor-pointer border rounded-xl shadow border-white/10 backdrop-blur-sm" >
                        <Calendar size={30} className="text-amber-600 dark:text-white bg-amber-50 dark:bg-gray-800 rounded-xl w-12 h-12 p-3 " />
                        <p className="text-[12px]  dark:text-gray-400" >{t("AGENDAR")}</p>
                    </div>


                </div>


                <div className="w-full h-full mt-8 ">


                    <ChatBox activeContact={activeContact} activeSubmenu={activeSubmenu} searchText={searchText} />


                </div>


            </section>
        </div>

    )

}



