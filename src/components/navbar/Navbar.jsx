import "./navbar.scss";
import { Sidebar } from "../sidebar/Sidebar";
import { motion } from "framer-motion";

export const Navbar = () => {
  return (
    <div className="navbar">
        <Sidebar/>
        <div className="wrapper">
            <motion.span 
              initial={{opacity: 0, scale: 0.5}} 
              animate={{opacity: 1, scale: 1}} 
              transition={{duration: 0.5}}
            >
              Megha Beria
            </motion.span>
            <div className="social">
                <a href="https://www.instagram.com/"><img src="/instagram.png" alt="Instagram" className= "logo"/></a>
                <a href="https://www.linkedin.com/in/megha-beria-209b75251/"><img src="/linkedin.png" alt="LinkedIn" className= "logo"/></a>
                <a href="https://github.com/beriamegha8"><img src="/github.png" alt="GitHub" className= "logo"/></a>
                {/* leetcode */}
            </div>
        </div>
    </div>
  )
};
