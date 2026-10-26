import { motion, type Variant } from "framer-motion"

type Props = {
    children: React.ReactNode
}

function WrapperPage(props : Props)
{
      // 1. Define the swipe variants with gentle fade settings
      const pageVariants = {
        initial: {
          opacity: 0,
        } as Variant,
        animate: {
          opacity: 1,
          transition: {
            duration: 0.4, // Slightly faster than before for responsiveness but smooth
            ease: "easeInOut", // Standard gentle easing curve (alternative to custom bezier)
          },
        } as Variant,
        exit: {
          opacity: 0,
          transition: {
            duration: 0.4, 
            ease: "easeInOut", // Consistent smoothness on exit
          },
        } as Variant,
      };

    return (
        <motion.div 
            // Using key={location.pathname} triggers re-animation when routes change.
            // Ensure 'location' is available from your routing context (e.g., react-router-dom).
            initial="initial"
            animate="animate"
            exit="exit"
            variants={pageVariants}
            key={location.pathname} 
        >
            {props.children}
        </motion.div>
    )

}


export default WrapperPage;
