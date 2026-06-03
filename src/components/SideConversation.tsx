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
            <div className="flex flex-row justify-between gap-2 mt-3 pb-3 mb-4 mr-4">
                <h2 className="font-medium text-gray-100 dark:text-amber-50">{t("Favoritas")} </h2>
                <div className="flex items-center gap-4">
                 <EllipsisVertical className="text-gray-100 dark:text-amber-50" /> 
                 <span className="text-gray-100 dark:text-amber-50" >30</span>  
                </div>
                
            </div>
            <div >
                <SideConversationItem onSelectContact={onSelectContact} />
            </div>
        </div>


    )
}



export default SideConversation