import { useEffect, useState, type ElementType } from "react";
import { fetchItems } from "../services/api";
import { useArchive } from "../context/archiveContext";
import { useTranslation } from "react-i18next";
import { MessageCircleMore } from "lucide-react";
import { ExternalLink, Trash2, Crown, Inbox } from "lucide-react"
import OnlineStatus from "./OnlineStatus";
import {motion} from "framer-motion"


interface subMenuItemProps {
    id: string;
    name: string;
    subject: string;
    owner: string;
    users: string[];
}

interface subMenuApiProps {
    id: number;
    subMenuItems: subMenuItemProps[];
}


interface subMenuprops {
    id: number;
    name: string;
}

interface contactT {
    id: number | null;
    name: string;
    subMenus: subMenuprops[];
}

interface ChatBoxProps {
    activeContact: contactT | null;
    activeSubmenu: subMenuprops | null;
    searchText: string;

}

const submenuIcons: Record<string, ElementType> = {
    "Caixa de entrada": Inbox,
    "Caixa de saída": ExternalLink,
    "Lixo": Trash2,
    "Vip": Crown,
    "Entrada": Inbox,
};


function ChatBox({ activeSubmenu, searchText }: ChatBoxProps) {

    const [items, setItems] = useState<subMenuApiProps[]>([]);
    const { archivedItems, checkedItems } = useArchive();
    const { t } = useTranslation();
    const Icon = submenuIcons[activeSubmenu?.name ?? ""] || MessageCircleMore;



    useEffect(() => {
        async function loadData() {
            const submenuData: subMenuApiProps[] = await fetchItems();
            setItems(submenuData);

        }
        loadData();




    }, []);


    const selectedId = activeSubmenu?.id ?? items[0]?.id;
    const filteredItems = items
        .filter((item) => item.id === selectedId)
        .flatMap((item) => item.subMenuItems);



    const searchedItems = filteredItems.filter((item) =>
        item.name.toLowerCase().includes(searchText.toLowerCase()) ||
        item.subject.toLowerCase().includes(searchText.toLowerCase()) ||
        item.owner.toLowerCase().includes(searchText.toLowerCase())
    );



    const visibleItems = searchedItems.filter(item => !archivedItems.some(archived => archived.id === item.id
    )
    );


    const { handleCheckItem } = useArchive()


    return (
        <div className=" bg-gray-100/10 dark:bg-gray-900 min-h-40
        "
        
        >

            <div className="flex flex-col gap-1 md:gap-4 m-4  ">

                {visibleItems.length === 0 ? (
                    <h1
                        className="flex justify-center mt-10 text-2xl md:text-3xl 
                    font-semibold text-amber-600
                 dark:text-amber-50 items-center shadow-xl
                     border border-white/10 backdrop-blur-sm ">
                        {t("Por favor, selecione uma conta")}
                    </h1>)
                    : (visibleItems.map((item, index) => {
                        const isChecked = checkedItems.some((checkedItem: subMenuItemProps) => checkedItem.id === item.id);

                        return (


                            <motion.div key={item.id} className="flex items-center
                     border border-white/10 backdrop-blur-sm  px-5 py-3 
                     rounded-xl group hover:bg-amber-50 dark:hover:bg-gray-500 
                     transition-colors w-full bg-white dark:bg-gray-800 "
                     
                     initial={{ opacity:0, x:-60 }}
                     whileInView={{ opacity:1, x:0 }}
                     viewport={{ once: false }}
                     transition={{duration:0.6, delay: index * 0.15}}
                     
                     
                     >
                                <div className="flex items-center w-full gap-1 md:gap-2">

                                    <div
                                        className="flex items-center justify-center w-15 h-15 
                                        md:w-20 md:h-20 relative shrink-0">

                                        <div onClick={() => handleCheckItem(item)}
                                            className={`relative md:group-hover:hidden w-13 h-13 md:w-17 md:h-17 rounded-full
                                              flex items-center justify-center
                                             text-white text-2xl font-semibold cursor-pointer 
                                             ${isChecked ? 
                                                "bg-blue-950 dark:bg-blue-950 text-white dark:text-white" 
                                                :"bg-linear-to-bl from-amber-400 to-amber-700 dark:from-white dark:to-gray-500"}`}

                                        >
                                            {item.owner}
                                            <OnlineStatus variant="online" />
                                            
                                            </div>

                                        <input type="checkbox" onChange={() => handleCheckItem(item)} className=" hidden md:group-hover:block w-4 h-4" />

                                    </div>


                                    <div className="flex justify-between items-center ml-1 my-1 md:p-2 w-full ">


                                        <div className="w-full flex flex-col gap-1.5 md:text-2xl dark:text-amber-50">

                                            <h2 className="font-bold">{item.name}</h2>

                                            <p className="text-[12px] md:text-[16px] text-amber-600 dark:text-amber-50">
                                                {t(item.subject)}
                                            </p>
                                            <p className="flex flex-row gap-2 items-center">
                                                <Icon className="text-amber-600 dark:text-amber-50" size={15} />

                                                <span 
                                                className="text-[10px] md:text-[12px] text-gray-400 dark:text-amber-50">{t(activeSubmenu?.name ?? "")}</span>
                                            </p>

                                        </div>
                                        <div className="flex flex-col items-end w-30 pr-3">
                                            <p className="text-[12px] text-amber-600 dark:text-amber-50">{t("Hoje")}, 11:42</p>
                                            <p className="text-[10px] font-semibold text-amber-600 dark:text-amber-50">30 min</p>

                                            <div className="flex -space-x-1.5 justify-end" >

                                                {item.users.map((user, index) => (
                                                    <div key={index}
                                                        className=" flex relative items-center justify-center 
                                                text-[8px] md:text-[12px] 
                                                rounded-full bg-linear-to-bl from-amber-400 to-amber-700 dark:from-white dark:to-gray-500
                                                 dark:border-gray-800 text-white
                                                 w-6 h-6 md:w-8 md:h-8 border-2 
                                                  border-white">
                                                        {user}
                                                    </div>
                                                ))}</div>
                                        </div>

                                    </div>

                                </div>
                            </motion.div>
                        )
                    }))
                }
            </div>
        </div>
    );
}


export default ChatBox;