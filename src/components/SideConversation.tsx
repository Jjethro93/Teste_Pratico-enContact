import { EllipsisVertical, Star } from "lucide-react"
import SideConversationItem from "./sideConversationItem"
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
    onSelectContact: (contact: contactT, submenu: subMenuprops) => void;
}

function SideConversation({ onSelectContact }: SideConversationProps) {

    const { t } = useTranslation();


    return (
        <div>

            <div className="flex flex-row justify-between z-0 gap-2 mt-3 mb-3 items-center rounded-2xl hover:scale-105 dark:border-b-gray-600/60 p-4 shadow-xl border border-white/10 backdrop-blur-sm ">
                <Star size={35} fill="#fff" className="flex items-center text-gray-100 dark:text-amber-50 m-2 bg-white/3 p-2 shadow-xl border border-white/10 backdrop-blur-sm rounded-2xl shrink-0"/>
                <div className="w-full">
                    
                    <h2 className="font-medium text-gray-100 dark:text-amber-50">{t("Favoritas")} </h2>
                    <p className="text-white text-[10px] "> {t("Acesse suas contas favoritas rapidamente")}</p>
                </div>
                <div className="flex items-center gap-4">
                    <span className="text-gray-100 dark:text-amber-50 bg-white/3 shadow-xl border
                  border-white/10 backdrop-blur-sm rounded-2xl p-2" >
                        30
                    </span>
                    <EllipsisVertical className="text-gray-100 dark:text-amber-50 houver:bg-amber-600 shadow-amber-600 cursor-pointer" />

                </div>

            </div>
            <div >
                <SideConversationItem onSelectContact={onSelectContact} />
            </div>
        </div>


    )
}



export default SideConversation