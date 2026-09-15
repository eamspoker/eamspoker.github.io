import { motion } from "framer-motion"



function WrapperPage()
{

    return (
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
        </motion.div>
    )

}


export default WrapperPage;