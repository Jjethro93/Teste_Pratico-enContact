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

                        <div>
                            <button className="flex items-center justify-between  px-2" onClick={() => toggleMenu(contact.id)}>

                                <UserIcon size={35} className="text-gray-100 dark:text-amber-50" />
                                <span className="text-gray-100 mr-10 font-medium w-full text-[14px] md:text-2xl  hover:text-amber-900 dark:text-amber-50"> {t(contact.name)}</span>
                                {isOpen === contact.id ? (<ChevronUpIcon size={38} className="text-gray-100 dark:text-amber-50 transition-all duration-900 ease-in-out" />) : (<ChevronDownIcon size={30} className="text-gray-100 dark:text-amber-50" />)}
                            </button>
                        </div>


                        <div
                            className={`overflow-hidden ${isOpen === contact.id ? "max-h-60 mt-2" : "max-h-0"}`}
                        >
                            <div className="flex flex-col justify-between pl-8 cursor-pointer list-none">
                                {contact.subMenus.map((submenu) => (
                                    <li key={submenu.id} onClick={() => onSelectContact(contact, submenu)} className="flex flex-row gap-3 items-center text-gray-200 hover:text-amber-800"> <MessageCircleMore size={20} /> {t(submenu.name)}</li>
                                ))}


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
                <button
                    className="flex items-center justify-between w-full"
                    onClick={() => toggleMenu(contact.id)}
                >
                    <UserIcon size={20} className="text-gray-100 dark:text-amber-50" />
                    <span className="text-white">
                        {t(contact.name)}
                    </span>

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
                                className="text-gray-300 py-1 cursor-pointer hover:text-amber-500"
                            >
                                {t(submenu.name)}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        ))}
    </div>
)}

        </div>


    )





}



export default SideConversationItem