
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
        className="border text-sm bg-amber-600 dark:bg-linear-to-r dark:from-gray-700 dark:to-gray-900 dark:border-amber-50 text-amber-50 dark:text-amber-50 
        py-2 w-24 px-3.5 cursor-pointer items-center justify-center hover:border-amber-600 dark:hover:border-amber-600/50 rounded-2xl 
        hover:scale-110 hover:text-amber-500 hover:bg-amber-50 dark:hover:bg-gray-500  shadow-amber-700"> 
        {children} 
        
        </button>
       
    </div>

)

}


export default Button