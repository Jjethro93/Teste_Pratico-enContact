import { ChevronDown, Search, Undo2 } from "lucide-react"
import { useArchive } from "../context/archiveContext"
import { useState, type ChangeEvent } from "react";
import UserMenu from "../components/userMenu";
import { useTranslation } from "react-i18next";
import ButtonLanguage from "../components/ButtonLanguage";
import { useNavigate } from "react-router";
import ButtonDarkMode from "../components/ButtonDarkMode";




function ArchivedPage() {

    const [searchText, setSearchText] = useState<string>("");
    const { t } = useTranslation();
    const [darkMode] = useState(false);

    const navigate = useNavigate()

    const { archivedItems } = useArchive();
    const handleSearchChange = (event: ChangeEvent<HTMLInputElement>): void => {
        setSearchText(event.target.value);

    };




    return (

        <div className={`relative flex flex-col md:flex-row w-full md:min-h-screen bg-linear-to-br from-amber-700
         to-amber-400 dark:bg-linear-to-tl dark:from-black dark:to-gray-700 
         ${darkMode && "dark:"}`}>

            <div className="flex flex-col gap-2 fixed z-50 p-2 top-7 right-1 md:top-auto md:right-auto justify-start md:bottom-10">
                <ButtonDarkMode />

                <ButtonLanguage />
            </div>

            <button
                className="fixed bottom-4 left-45 flex flex-row w-30 gap-1 justify-between items-center
                bg-amber-600 text-white hover:bg-red-500/10 cursor-pointer px-4
                 border dark:border-white h-10.5 p-1.5 mr-3 rounded-lg
                  dark:bg-linear-to-r dark:from-gray-700 dark:to-gray-900 
                 dark:text-amber-50 hover:scale-105"
                onClick={() => navigate("/home")}>
                <Undo2 size={20} />
                {t("VOLTAR")}

            </button>


            <div className="flex flex-col p-4 sticky z-10 bg-none md:z-0 w-full md:w-[35%] h-auto md:h-full top-0 md:p-8 ">
                <nav className="flex flex-row justify-between w-full mt-4 mb-3 gap-2 ">
                    <UserMenu />

                </nav>
            </div>


            <section className=" md:w-full md:h-full z-10 bg-gray-100 pt-6  dark:bg-gray-700 mt-3 md:mt-0 
            shadow-md">
                <div className="flex flex-col justify-between gap-3 m-3.5">
                    <div className="relative flex flex-row items-center gap-1 mb-8  ">
                        <input type="search"
                            placeholder={t("Pesquisar")}
                            onChange={handleSearchChange}
                            value={searchText}
                            className="border-none hover:border-2 outline-none bg-white h-10.5
                     p-2.5 pl-10 rounded-2xl placeholder:text-gray-500 
                     w-70 md:w-150 overflow-hidden dark:placeholder:text-gray-500 
                     dark:border-0 dark:hover:border-gray-500" />
                        <Search
                            className="
                             absolute left-3 text-amber-600 dark:text-gray-600/60
                            pointer-events-none transition-all duration-200"
                        />
                        <ChevronDown color="#f18811" />
                    </div>
                </div>

                <div className="flex flex-col gap-4 m-4 ">

                    {archivedItems.length === 0 ? (
                        <h1
                            className="flex justify-center mt-20 text-2xl 
                md:text-3xl font-semibold text-gray-600
                 dark:text-amber-50 items-center shadow-xl
                     border border-white/10 backdrop-blur-sm p-3 rounded-xl ">
                            {t("Nenhum item arquivado!")}
                        </h1>)
                        :
                        (

                            archivedItems.map(item => (


                                <div key={item.id}
                                    className="flex items-center shadow-xl
                     border border-white/10 backdrop-blur-sm  px-5 py-3 
                     rounded-xl group hover:bg-amber-50 dark:hover:bg-gray-500 
                     transition-colors w-full ">
                                    <div className="flex items-center gap-4 w-full ">

                                        <div
                                            className="flex items-center justify-center w-10 h-10 
                             relative shrink-0">

                                            <div className="group-hover:hidden w-8 h-8 rounded-full bg-amber-600 dark:bg-amber-50 flex items-center justify-center text-white dark:text-amber-900 text-xs">
                                                {item.owner}
                                            </div>

                                        </div>


                                        <div className="flex justify-between items-center p-3 w-full ">


                                            <div
                                                className="w-full flex flex-col gap-1.5 dark:text-amber-50">

                                                <h2 className="font-bold">{item.name}</h2>

                                                <p>{t(item.subject)}</p>


                                            </div>
                                            <div className="flex flex-col items-end w-30 pr-3">
                                                <p className="text-[12px] text-amber-600 dark:text-amber-50">Hoje, 11:42</p>
                                                <p className="text-[10px] font-semibold text-amber-600 dark:text-amber-50">30 min</p>

                                                <div className="flex -space-x-1.5 justify-end" >

                                                    {item.users.map((user, index) => (
                                                        <div key={index}
                                                            className=" flex relative items-center justify-center 
                                             text-[12px] rounded-full bg-amber-600 text-amber-50 
                                             w-8 h-8 border-2 border-white">
                                                            {user}
                                                        </div>
                                                    ))}</div>
                                            </div>

                                        </div>

                                    </div>
                                </div>
                            )))}

                </div>


            </section>
        </div>

    )

}




export default ArchivedPage