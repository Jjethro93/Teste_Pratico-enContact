


import { useEffect, useState } from "react";
import { motion } from "framer-motion"

type FloatingShapeProps = {
    className?: string;
}

const FloatingShape = ({ className }: FloatingShapeProps) => {

    const randomTarget = () => ({
        x: Math.random() * 40-20,
        y: Math.random() * 40-20,
        rotate: Math.random() * 30-15

});


    const [position, setPosition] = useState(randomTarget);

    useEffect(() => {
        const interval = setInterval(() => {
            setPosition(randomTarget());
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    


    return (
        <motion.div className={className}
       animate={position}
       transition={{
        duration: 3,
        ease: "easeInOut"}}>
            


        </motion.div>
    );
};


export default FloatingShape