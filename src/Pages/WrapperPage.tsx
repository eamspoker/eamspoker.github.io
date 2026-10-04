import { motion, type Variant } from "framer-motion"

type Props = {
    children: React.ReactNode
}

function WrapperPage(props : Props)
{
      // 1. Define the swipe variants
const pageVariants = {
  initial: {
    opacity: 0,
  } as Variant,
  animate: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1], // Smooth custom cubic-bezier ease
    },
  } as Variant,
  exit: {
    opacity: 0,
    transition: {
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1],
    },
  } as Variant,
};

    return (
        // <motion.div 
        //     initial="inital"
        //     animate="animate"
        //     exit="exit"
        //     key={location.pathname}
        //     variants={pageVariants}

        // >
        //     {props.children}
            
        // </motion.div>

        <div>
            {props.children}
        </div>
    )

}


export default WrapperPage;