import { ChevronDownIcon, ChevronUpIcon, UserIcon, X } from "lucide-react"
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { MessageCircleMore } from "lucide-react"
import { Menu } from "lucide-react"



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

                        <div className=" rounded-xl md:mt-4  md:p-3 shadow-xl border border-white/10 backdrop-blur-sm" >
                            <button className="flex items-center justify-between md:w-full" onClick={() => toggleMenu(contact.id)}>
                                <div className="flex items-center">
                                    <UserIcon size={34} className=" shrink-0 m-2 w-9 text-white rounded-xl dark:text-amber-50 shadow-xl border p-1 
                                 border-white/10 backdrop-blur-sm"/>
                                    <span className="text-white mr-10 w-full text-[10px] md:text-xl 
                                 hover:text-amber-900 dark:text-amber-50"> {t(contact.name)}</span>
                                </div>
                                {isOpen === contact.id ? (<ChevronUpIcon size={30} className="text-white dark:text-amber-50 transition-all duration-900 ease-in-out" />) : (<ChevronDownIcon size={30} className="text-gray-100 dark:text-amber-50" />)}

                                

                            </button>

                            <div
                                    className={`overflow-hidden ${isOpen === contact.id ? "max-h-auto mt-2 flex flex-row rounded-xl " : "max-h-0"}`}
                                >
                                    <ul className="flex flex-col justify-between cursor-pointer list-none gap-1 ml-6">
                                        {contact.subMenus.map((submenu) => (
                                            <li key={submenu.id} onClick={() => onSelectContact(contact, submenu)} 
                                            className="flex flex-row md:w-54 p-3 rounded-xl gap-2 items-center text-white hover:bg-amber-500/40"> 
                                            <MessageCircleMore size={20} /> {t(submenu.name)}</li>
                                        ))}


                                    </ul>

                                </div>




                        </div>





                    </div>


                ))}

            </div>

            <div className="md:hidden flex items-center mt-9">
                <button type="button"
                    className="text-amber-50 p-2 transition-colors"
                    onClick={changeMenu}
                >
                    {isOpenMobile ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {isOpenMobile && (
                <div className="md:hidden mt-4 rounded-lg w-90 p-4">
                    {contacts.map((contact) => (
                        <div key={contact.id} className="mb-4">
                            <div className=" p-4 rounded-xl shadow-xl border border-white/10 backdrop-blur-sm" >
                            <button
                                className="flex items-center justify-between w-full"
                                onClick={() => toggleMenu(contact.id)}
                            >
                                <div className="flex items-center gap-2">
                                <UserIcon size={20} className="text-gray-100 dark:text-amber-50" />
                                <span className="text-white">
                                    {t(contact.name)}
                                </span>

                                </div>

                                {isOpen === contact.id ? (
                                    <ChevronUpIcon size={20} className="text-white" />
                                ) : (
                                    <ChevronDownIcon size={20} className="text-white" />
                                )}
                            </button>

                            {isOpen === contact.id && (
                                <ul className="pl-4 mt-2">
                                    {contact.subMenus.map((submenu) => (
                                        <li
                                            key={submenu.id}
                                            onClick={() => {
                                                onSelectContact(contact, submenu);
                                                setIsOpenMobile(false);
                                            }}
                                            className="text-white py-1 rounded-xl gap-2 items-center active:bg-amber-500/40"
                                        >
                                            {t(submenu.name)}
                                        </li>
                                    ))}
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