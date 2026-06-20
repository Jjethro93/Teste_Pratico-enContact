
import type {ButtonHTMLAttributes,  ReactNode} from 'react'


interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
   children: ReactNode 
    isloading?: boolean
}

const Button = ({
    children,
    ...props
}: ButtonProps) => {

return(

    <div className="flex flex-row">
        <button type="button" 
        {...props}
        className= "flex flex-row w-25 gap-1 justify-between items-center bg-amber-600  text-white hover:bg-white hover:text-amber-600 text-[10px] md:text-[14px] cursor-pointer px-4 border dark:border-white h-10.5 rounded-lg dark:bg-linear-to-r dark:from-gray-700 dark:to-gray-900 dark:text-amber-50 text-sm py-2 md:w-30 hover:scale-105 dark:hover:bg-gray-500 shadow-amber-700"
           
        > 
        {children} 
        
        </button>
       
    </div>

)

}


export default Button