
import type {ButtonHTMLAttributes,  ReactNode} from 'react'


interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
   children: ReactNode
    isloading?: boolean
}

const Button = ({
    children,
    isloading = false,
    ...props
}: ButtonProps) => {

return(

    <div className='flex flex-row '>
        
        <button type="button" 
        {...props}
        className= ' border border-amber-600 dark:border-amber-50 text-amber-500 dark:text-amber-50 p-1.5 w-[100] px-3.5 rounded-[8%] cursor-pointer items-center justify-center hover:bg-amber-600 hover:scale-110 hover:text-amber-50 dark:hover:bg-gray-500  shadow-amber-700'> 
        {children} 
        
        </button>
       
    </div>

)

}


export default Button