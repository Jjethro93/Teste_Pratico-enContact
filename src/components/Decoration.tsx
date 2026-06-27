import  FloatingShape  from "./FloatingShape";



const Decoration = () => {

   

   


    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none"
      >
            <FloatingShape 
                className="absolute top-4 right-12 w-20 h-20 bg-white/20 rotate-12 rounded-3xl"
            />


            <FloatingShape
                className="absolute -top-6 -left-6 w-28 h-28 bg-yellow-300/30 rounded-full "
            />


            <FloatingShape className="absolute top-20 right-4 w-16 h-16 bg-white/15 rounded-full "

            />


            <FloatingShape className="absolute bottom-10 left-32 w-12 h-12 bg-amber-200/30 rotate-45 rounded-2xl "

            />


            <FloatingShape className="absolute top-10 left-52 w-6 h-6 bg-white/40 rounded-full "

            />


            <FloatingShape className="absolute bottom-14 right-28 w-8 h-8 bg-yellow-200/40 rounded-full "

            />


            <FloatingShape className="absolute top-28 left-10 w-10 h-10 bg-white/10 rotate-12 rounded-xl "

            />


            <FloatingShape className="absolute bottom-4 right-12 w-14 h-14 border-2 border-white/20 rounded-full "

            />


        </div>
    );
};


export default Decoration