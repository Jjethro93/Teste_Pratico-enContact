
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
        className= ' border text-sm border-amber-600 dark:border-amber-50 text-amber-500 dark:text-amber-50 py-1 w-24 px-3.5 rounded-2xl cursor-pointer items-center justify-center hover:bg-amber-600 hover:scale-110 hover:text-amber-50 dark:hover:bg-gray-500  shadow-amber-700'> 
        {children} 
        
        </button>
       
    </div>

)

}


export default Button