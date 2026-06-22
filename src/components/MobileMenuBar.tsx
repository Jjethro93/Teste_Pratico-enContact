import { Archive, ChevronDownIcon, ChevronUpIcon, Crown, ExternalLink, Home, Inbox, MessageCircle, Trash2, UserIcon, Users } from "lucide-react";
import { useState, type ComponentType } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate, useLocation } from "react-router";

interface MenuProps {
    name: string;
    icon: ComponentType<{ className?: string; size?: number }>;
    path?: string;
    action?: string;
    
}

const Menu: MenuProps[] = [
    { name: "Home", icon: Home, path: "/home" },
    { name: "Contas", icon: Users, action: "contacts" },
    { name: "Mensagens", icon: MessageCircle, path: "/messages" },
    { name: "Arquivados", icon: Archive, path: "/archives" },
]


const submenuIcons: Record<string, React.ElementType> = {
    "Caixa de entrada": Inbox,
    "Caixa de saída": ExternalLink,
    "Lixo": Trash2,
    "Vip": Crown,
    "Entrada": Inbox,
};

interface contactT {
    id: number;
    name: string;
    subMenus: subMenuprops[];
}

interface subMenuprops {
    id: number;
    name: string;
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



interface MobileMenuBarProps {
    onSelectContact?: (contact: contactT, submenu: subMenuprops) => void;
}

const MobileMenuBar = ({ onSelectContact: onSelectContact }: MobileMenuBarProps) => {
    const navigate = useNavigate();
    const location = useLocation();
    const [showContacts, setShowContacts] = useState(false);

    const { t } = useTranslation();
    
        const [isOpen, setIsOpen] = useState<number | null>(null);
        const toggleMenu = (id: number) => {
            setIsOpen(isOpen === id ? null : id);
        }


    



    return (
        <div className="flex flex-row md:hidden fixed bottom-0 z-50 w-full bg-white dark:bg-gray-800
         py-4 justify-center items-center gap-9">
            {Menu.map((menu) => {
                const Icon = menu.icon
                const isActive = menu.path === location.pathname

                return (

                    <button
                        key={menu.path}
                        onClick={() => {
                            if (menu.action === "contacts") {
                                setShowContacts(prev => !prev)
                            } else {
                                menu.path && navigate(menu.path)
                                setShowContacts(false)
                            }
                        }}
                        className="flex flex-col items-center">
                        <Icon size={30} className={isActive ? "text-amber-600 dark:text-amber-200" : "text-gray-600 dark:text-gray-400"} />
                        <p className={`text-xs ${isActive ? "text-amber-600 dark:text-amber-200" : "text-gray-600 dark:text-gray-400"}`} >{menu.name}</p>
                        {isActive && (
                            <div className="absolute bottom-3 w-13 h-1 rounded-full bg-amber-600 dark:bg-amber-200" />
                        )}
                    </button>)

            })}



            {showContacts && (
                <div
                    className="
      fixed bottom-20 left-4 right-4
      rounded-xl bg-white dark:bg-gray-800
      shadow-xl border border-white/10
      p-4 z-50
    "
                >
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
                                            const Icon = submenuIcons[submenu.name] || MessageCircle;

                                            return (

                                                <li
                                                    key={submenu.id}
                                                    onClick={() => {
                                                        onSelectContact?.(contact, submenu);
                                                        setShowContacts(false);
                                                        setIsOpen(null)
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
    );
};

export default MobileMenuBar;
