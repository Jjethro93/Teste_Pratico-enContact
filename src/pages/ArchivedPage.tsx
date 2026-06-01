import { ChevronDown, Moon, Sun } from "lucide-react";
import { useArchive } from "../context/archiveContext"
import { useState } from "react";
import UserMenu from "../components/userMenu";
import { useUser } from "../context/userContext";
import { useTranslation } from "react-i18next";
import ButtonLanguage from "../components/ButtonLanguage";


function ArchivedPage() {
    const{t} = useTranslation();
    const [darkMode, setDarkMode] = useState(false);
   




  const { archivedItems } = useArchive();
const {user} = useUser()
      const toggleDarkMode = () => {
           const newMode = !darkMode;

           setDarkMode(newMode);

           document.documentElement.classList.toggle("dark", newMode);
       };

 

  return (
    <div className={`flex flex-col md:flex-row w-full md:min-h-screen bg-amber-600 dark:bg-gray-600  md:p-6 ${darkMode && "dark:"}`}>
            <div className="fixed z-50 p-2 shadow-md top-28 right-3 md:top-auto md:left-auto md:bottom-10">
            <button onClick={toggleDarkMode} className=" cursor-pointer md:left-10 rounded-[20%] transition-all ease-in-out text-white border  hover:bg-gray-100 hover:text-amber-600 font-semibold">
                {darkMode ? <Sun size={15} /> : <Moon size={15} />}
            </button>

            <ButtonLanguage className=" cursor-pointer md:left-10 rounded-[20%] transition-all ease-in-out text-white border  hover:bg-gray-100 hover:text-amber-600 font-semibold" />
            </div>

           

            <div className="flex flex-col sticky z-20 bg-amber-600 dark:bg-gray-600 md:z-0 w-full md:w-[25%] h-[10%] md:h-full top-0 p-3 md:p-0 ">
                <nav className="flex flex-row justify-between w-full mt-4 mb-3 gap-2  ">
                    
                    <div className="flex flex-row  items-center  animate-[fadeIn_1.5s_ease-in-out_forwards] gap-2">
                        <UserMenu />
                        <h2 className="font-extrabold text-gray-100 dark:text-white">
                            {user?.name}
                        </h2>
                    </div>
                    <div className="flex flex-row items-center gap-1 border-2 border-amber-100 dark:border-white h-10.5 p-1.5 mr-3 rounded-l-lg ">
                        <button className="text-amber-100 dark:text-amber-50 font-medium"> {t("New")} </button>
                        <ChevronDown className="text-amber-100 dark:text-amber-50" />
                    </div>

                </nav>
                 <hr className="border-gray-100 border-2 dark:border-cyan-800 dark:border-b-cyan-950  "></hr>
            </div>

        <div className="bg-gray-100 dark:bg-cyan-900">

         <div className="flex flex-col ">

                 {archivedItems.map(item => (


                     <div key={item.id} className="flex items-center border-b border-amber-200 px-5 py-3 rounded-bl-xl group hover:bg-amber-50 dark:hover:bg-gray-500 transition-colors ">
                         <div className="flex items-center gap-4 w-full ">

                             <div className="flex items-center justify-center w-10 h-10 relative shrink-0">

                                 <div className="group-hover:hidden w-8 h-8 rounded-full bg-amber-600 dark:bg-amber-50 flex items-center justify-center text-white dark:text-amber-900 text-xs">
                                     {item.owner}
                                 </div>

                                 {/* <input type="checkbox" onChange={() => handleCheckItem(item)} className=" hidden group-hover:block w-4 h-4" /> */}

                             </div>


                             <div className="flex justify-between items-center p-3 w-full ">


                                 <div className="w-full flex flex-col gap-1.5 dark:text-amber-50">

                                     <h2 className="font-bold">{item.name}</h2>

                                     <p>t(item.subject)</p>


                                 </div>
                                 <div className="flex flex-col items-end w-30 pr-3">
                                     <p className="text-[12px] text-amber-600">Hoje, 11:42</p>
                                     <p className="text-[10px] font-semibold">30 min</p>

                                     <div className="flex -space-x-1.5 justify-end" >

                                         {item.users.map((user, index) => (
                                             <div key={index}
                                             className=" flex relative items-center justify-center text-[12px] rounded-full bg-amber-600 text-amber-50 w-8 h-8 border-2 border-white">{user}</div>
                                         ))}</div>
                                 </div>

                             </div>

                         </div>
                     </div>
                 ))}

             </div>
             </div>


         </div>   
         )
}



            export default ArchivedPage