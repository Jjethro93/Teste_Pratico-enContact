import { ChevronDownIcon, ChevronUpIcon, ExternalLink, Trash2, Crown, Inbox, UserIcon, Users, X } from "lucide-react"
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


    const [isOpenMobile, setIsOpenMobile] = useState<boolean>(false)

    const changeMenu = (): void => {
        setIsOpenMobile(!isOpenMobile);
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

            <div className="md:hidden flex items-center mt-5 transition-all duration-200 ease-in-out">
                <button type="button"
                    className="text-white p-2 "
                    onClick={changeMenu}
                >
                    {isOpenMobile ? (<X size={24} />) : (
                        <div className=" flex items-center justify-center text-gray-100 dark:text-amber-50
                         w-25 bg-white/3 shadow-xl border
                  border-white/10 backdrop-blur-sm rounded-xl p-2 gap-2 h-10">
                            <Users size={24} />
                            <span className="text-sm font-medium">
                                {t("Contas")}
                            </span>
                        </div>)
                    }
                </button>
            </div>

            {isOpenMobile && (
                <div className="md:hidden rounded-xl w-full p-4 bg-white/80 dark:bg-gray-800 shadow-xl border border-white/10 backdrop-blur-sm">
                    {contacts.map((contact) => (
                        <div key={contact.id} className="flex justify-center mb-4">
                            <div className=" p-4 rounded-xl shadow-xl border w-full border-white/10 backdrop-blur-sm " >
                                <button
                                    className="flex items-center justify-between w-full h-10"
                                    onClick={() => toggleMenu(contact.id)}
                                >
                                    <div className="flex items-center gap-3">
                                        <UserIcon size={25} className="text-amber-600 bg-amber-700/10 dark:bg-gray-700 rounded-full p-2 h-10 w-10 dark:text-white" />
                                        <span className="text-gray-900 dark:text-white">
                                            {t(contact.name)}
                                        </span>

                                    </div>

                                    {isOpen === contact.id ? (
                                        <ChevronUpIcon size={20} className="text-amber-600 dark:text-white" />
                                    ) : (
                                        <ChevronDownIcon size={20} className="text-amber-600 dark:text-white" />
                                    )}
                                </button>

                                {isOpen === contact.id && (
                                    <ul className="p-4 mt-2 bg-amber-100/80 dark:bg-gray-700 rounded-xl">
                                        {contact.subMenus.map((submenu) => {
                                            const Icon = submenuIcons[submenu.name] || MessageCircleMore;

                                            return (

                                                <li
                                                    key={submenu.id}
                                                    onClick={() => {
                                                        onSelectContact(contact, submenu);
                                                        setIsOpenMobile(false);
                                                    }}
                                                    className=" flex flex-row text-gray-900 dark:text-white py-1 rounded-xl gap-3 p-3 items-center active:bg-amber-500/40"
                                                >
                                                    <Icon size={20} /> {t(submenu.name)}
                                                </li>
                                            );
                                        })}
                                    </ul>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            )}

        </div>


    )





}



export default SideConversationItem