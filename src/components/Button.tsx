
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

    <div className='flex flex-row '>
        <button type="button" 
        {...props}
        className= "flex flex-row gap-2 border text-sm bg-amber-600 dark:bg-linear-to-r dark:from-gray-700 dark:to-gray-900 dark:border-amber-50 text-amber-50 dark:text-amber-50 py-2 w-25 md:w-30 px-3.5 cursor-pointer items-center justify-center rounded-2xl hover:scale-105 hover:bg-amber-50 dark:hover:bg-gray-500 shadow-amber-700"
           
        > 
        {children} 
        
        </button>
       
    </div>

)

}


export default Button