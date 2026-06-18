import { EllipsisVertical } from "lucide-react"
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

    const{t} = useTranslation();


    return (
        <div>
            
            <div className="flex flex-row justify-between gap-2 mt-3 border-b border-b-amber-600 dark:border-b-gray-600/60 p-4 ">
                <h2 className="font-medium text-gray-100 dark:text-amber-50">{t("FAVORITAS")} </h2>
                <div className="flex items-center gap-4">
                 <span className="text-gray-100 dark:text-amber-50" >30</span> 
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