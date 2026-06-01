import { useContext, createContext, useState, type ReactNode, useEffect } from "react";




interface subMenuItemProps {
    id: string;
    name: string;
    subject: string;
    owner: string;
    users: string[];
}
interface ArchivedContextType {
    archivedItems: subMenuItemProps[];
    checkedItems: subMenuItemProps[];
    handleCheckItem: (item: subMenuItemProps)=> void;
    handleArchive: ()=> void;

}

const ArchiveContext = createContext< ArchivedContextType | null>(null)

interface ArchiveProviderProps {children: ReactNode}


export function ArchiveProvider({ children }: ArchiveProviderProps){
    
const [checkedItems, setCkeckedItems] = useState<subMenuItemProps[]>([]);
const [archivedItems, setArchivedItems] = useState<subMenuItemProps[]>([])

useEffect(() => {
  console.log("Archived Items:", archivedItems);
}, [archivedItems]);

function handleCheckItem(item:subMenuItemProps){
    
       return setCkeckedItems((prev) => {
        const current = prev ?? [];
        const alreadyChecked = current.some(
            (i) => i.id === item.id);

            if(alreadyChecked){
                return current.filter((i) => i.id !==item.id);
            }

            return [...current, item]
        
       })


 }
 


 function handleArchive(){
    console.log("Itens selecionados:", checkedItems);
    setArchivedItems((prev) =>[
        ...prev,
        ...checkedItems
    ]);

    setCkeckedItems([])

    
}


return(
     <ArchiveContext.Provider
            value={{
                checkedItems,
                archivedItems,
                handleCheckItem,
                handleArchive
            }}
        >
            {children}
        </ArchiveContext.Provider>
);

}


export function useArchive(){
    const context = useContext(ArchiveContext);
    
    if(!context){
        throw new Error(
            "Use Archive deve ser usado dentro do ArchiveProvider"
        );
    }


    return context;
}
