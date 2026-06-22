import { ChevronDownIcon, ChevronUpIcon, ExternalLink, Trash2, Crown, Inbox, UserIcon } from "lucide-react"
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { MessageCircleMore } from "lucide-react"




interface subMenuprops {
    id: number;
    name: string;
}

interface contactT {
    id: number;
    name: string;
    subMenus: subMenuprops[];
}

interface SideConversationProps {
    onSelectContact: (contact: contactT, submenu: subMenuprops) => void;
}


const submenuIcons: Record<string, React.ElementType> = {
    "Caixa de entrada": Inbox,
    "Caixa de saída": ExternalLink,
    "Lixo": Trash2,
    "Vip": Crown,
    "Entrada": Inbox,
};

function SideConversationItem({ onSelectContact }: SideConversationProps) {

    const { t } = useTranslation();

    const [isOpen, setIsOpen] = useState<number | null>(null);
    const toggleMenu = (id: number) => {
        setIsOpen(isOpen === id ? null : id);
    }



    


    const contacts: contactT[] = [
        {
            "id": 1,
            "name": "Conta 1",
            "subMenus": [
                {
                    "id": 11,
                    "name": "Caixa de entrada"
                },
                {
                    "id": 12,
                    "name": "Caixa de saída"
                }
            ]
        },
        {
            "id": 2,
            "name": "Conta 2",
            "subMenus": [
                {
                    "id": 22,
                    "name": "Inbox"
                }
            ]
        },
        {
            "id": 3,
            "name": "Conta 3",
            "subMenus": [
                {
                    "id": 33,
                    "name": "Entrada"
                },
                {
                    "id": 34,
                    "name": "Vip"
                },
                {
                    "id": 35,
                    "name": "Lixo"
                }
            ]
        }
    ]



    return (


        <div >

            <div className="hidden md:flex flex-col">

                {contacts.map((contact) => (

                    <div key={contact.id}>

                        <div className=" rounded-xl md:mt-4  md:p-3 shadow-xl border bg-white/90 dark:bg-gray-800 border-white/10 backdrop-blur-sm" >
                            <button className="flex items-center justify-between md:w-full" onClick={() => toggleMenu(contact.id)}>
                                <div className="flex items-center">
                                    <UserIcon size={34} className=" shrink-0 m-2 w-9 text-amber-600 bg-amber-700/10 dark:bg-gray-700  rounded-full dark:text-amber-50 shadow-xl border p-1 
                                 border-white/10 backdrop-blur-sm"/>
                                    <span className="text-gray-900 dark:text-white mr-10 w-full text-[10px] md:text-xl 
                                 hover:text-amber-900 ">
                                        {t(contact.name)}
                                    </span>
                                </div>
                                {isOpen === contact.id ? (<ChevronUpIcon size={30} className="text-amber-600 dark:text-amber-50 transition-all duration-900 ease-in-out" />) :
                                    (<ChevronDownIcon size={30} className="text-amber-600 dark:text-amber-50" />)}



                            </button>

                            <div
                                className={`overflow-hidden ${isOpen === contact.id ? "max-h-auto mt-2 flex flex-row rounded-xl " : "max-h-0"}`}
                            >
                                <ul className="flex flex-col justify-between cursor-pointer list-none gap-1 ml-6 bg-amber-100/80 dark:bg-gray-700 rounded-xl">
                                    {contact.subMenus.map((submenu) => {
                                        const Icon = submenuIcons[submenu.name] || MessageCircleMore;

                                        return (
                                            <li key={submenu.id} onClick={() => onSelectContact(contact, submenu)}
                                                className="flex flex-row md:w-64 p-3 rounded-xl gap-2 items-center text-gray-900 dark:text-white hover:bg-amber-500/40">
                                                <Icon size={20} /> {t(submenu.name)}</li>
                                        );
                                    })}


                                </ul>

                            </div>




                        </div>





                    </div>


                ))}

            </div>


        </div>


    )





}



export default SideConversationItem