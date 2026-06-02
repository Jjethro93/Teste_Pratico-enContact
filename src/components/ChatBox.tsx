import { useEffect, useState } from "react";
import { fetchItems } from "../services/api";
import { useArchive } from "../context/archiveContext";
import { useTranslation } from "react-i18next";



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

}

function ChatBox({ activeSubmenu }: ChatBoxProps) {

    const [items, setItems] = useState<subMenuApiProps[]>([]);
    const { archivedItems, checkedItems } = useArchive();
    const { t } = useTranslation();

    


    useEffect(() => {
        async function loadData() {
            const submenuData: subMenuApiProps[] = await fetchItems();
            setItems(submenuData);

           
        }
        loadData();


    }, []);


   const filteredItems = items?.filter((item) =>
       item.id === activeSubmenu?.id).flatMap((item) => item.subMenuItems);

   const visibleItems = filteredItems.filter( item =>!archivedItems.some(archived => archived.id === item.id
    )
);


    const {handleCheckItem} = useArchive()


    return (
        <div className="bg-gray-100 dark:bg-gray-600 rounded-b-2xl min-h-40">

            <div className="flex flex-col ">

                {visibleItems.length===0 ? (<h1 className="flex justify-center mt-10 text-2xl md:text-3xl font-semibold text-amber-600 dark:text-amber-50 items-center">{t("Por favor, selecione uma conta")}</h1>)
                 : (visibleItems.map((item) => {
                    const isChecked = checkedItems.some((checkedItem: subMenuItemProps) => checkedItem.id === item.id);
                    return (


                    <div key={item.id} className="flex items-center border-b border-amber-200 px-5 py-3 rounded-b-xl group hover:bg-amber-50 dark:hover:bg-gray-500 transition-colors ">
                        <div className="flex items-center gap-4 w-full ">

                            <div className="flex items-center justify-center w-10 h-10 relative shrink-0">

                                <div onClick={() => handleCheckItem(item)} className={` md:group-hover:hidden w-8 h-8 rounded-full bg-amber-600 dark:bg-amber-50 flex items-center justify-center
                                 text-white dark:text-amber-900 text-xs cursor-pointer 
                                ${ isChecked  ? "bg-blue-950 dark:bg-blue-950 text-white dark:text-white" : "bg-amber-600 dark:bg-amber-50 text-white dark:text-amber-900"}`}
                                    
                                    >
                                    {item.owner} </div>

                                <input type="checkbox" onChange={()=>handleCheckItem(item)}  className=" hidden md:group-hover:block w-4 h-4" />

                            </div>


                            <div className="flex justify-between items-center p-3 w-full ">


                                <div className="w-full flex flex-col gap-1.5 dark:text-amber-50">

                                    <h2 className="font-bold">{item.name}</h2>

                                    <p>{t(item.subject)}</p>
                                    <p>{t(activeSubmenu?.name ?? "")}</p>

                                </div>
                                <div className="flex flex-col items-end w-30 pr-3">
                                    <p className="text-[12px] text-amber-600 dark:text-amber-50">Hoje, 11:42</p>
                                    <p className="text-[10px] font-semibold text-amber-600 dark:text-amber-50">30 min</p>

                                    <div className="flex -space-x-1.5 justify-end" >

                                        {item.users.map((user, index) => (
                                            <div key={index}
                                                className=" flex relative items-center justify-center text-[12px] rounded-full bg-amber-600 text-amber-50 w-8 h-8 border-2 border-white">{user}</div>
                                        ))}</div>
                                </div>

                            </div>

                        </div>
                    </div>
                    )
                }))
                }
            </div>
        </div>
    );
}


export default ChatBox;