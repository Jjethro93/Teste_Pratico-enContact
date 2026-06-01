import { ChevronDownIcon, ChevronUpIcon } from "lucide-react"
import { useState } from "react";
import { useTranslation } from "react-i18next";



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
    onSelectContact: (contact: contactT, submenu:subMenuprops) => void;
}

function SideConversationItem({ onSelectContact }: SideConversationProps) {

    const {t} = useTranslation();

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

        <div>
            <div className="p-2 ">

                {contacts.map((contact) => (

                    <div key={contact.id}>

                        <button className="flex w-full justify-between" onClick={() => toggleMenu(contact.id)}>
                            <div className="flex items-center gap-2">
                                {isOpen === contact.id ? (<ChevronUpIcon size={18} className="text-gray-100 dark:text-amber-50"/>) : (<ChevronDownIcon size={18} className="text-gray-100 dark:text-amber-50" />)}
                                <span className="text-gray-100 font-medium text-[14px] md:text-2xl hover:text-amber-900 dark:text-amber-50">{t(contact.name)}</span>
                            </div>
                            
                        </button>
                    <div
                    className={`overflow-hidden ${isOpen === contact.id ? "max-h-20 mt-2" : "max-h-0"} transition-max-height duration-300 ease-in-out`}
                    >
                        <div className="flex flex-col justify-between pl-8 cursor-pointer list-none">
                            {contact.subMenus.map((submenu)=>(
                                <li key={submenu.id} onClick={() => onSelectContact(contact, submenu)} className="text-gray-200 hover:text-amber-800">{t(submenu.name)}</li>
                            ))}
                        
                        
                        </div>
                       
                    </div>


                    </div>


                ))}

            </div>

        </div>

    )





}



export default SideConversationItem