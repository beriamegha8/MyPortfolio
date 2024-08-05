import { motion } from "framer-motion"
import React, { useState } from "react";

export const Test = () => {

  const [open, setOpen]= useState(false)

  // const variants= {
  //   // visible: {opacity: 1, x: 1000, transition: {duration: 2}},
  //   visible: {opacity: 1, x: 400, transition: {type: "spring", stiffness: 200, damping: 100}},
  //   hidden: {opacity: 0},
  // }
  const variants= {
    // visible: {opacity: 1, x: 1000, transition: {duration: 2}},
    visible: {
      opacity: 1, 
      x: 400, 
      transition: { staggerChildren: 0.2},
    },
    hidden: {opacity: 0},
  }
  const items= [
    "item1", "item2", "item3", "item4"
  ]
  return (
    <div className="course">
      {/* <motion.div 
        className="box" 
        variants={variants}
        // initial= "hidden"
        // animate="visible"
        // transition={{ duration: 2}}
        animate= {open ? "visible" : "hidden"}
        // whileHover={{opacity: 1, scale: 2, x: 200, y: 500}}
        // initial={{opacity: 0.5, scale: 0.5}}
        // animate={{opacity: 1, scale: 1, x: 200, y: 500}}
        // transition={{ duration: 2}}
        // whileHover={{opacity: 1, scale: 2}}
        // drag
        >
        </motion.div> */}
        <motion.ul initial= "hidden" animate= "visible" variants={variants}>
          {items.map(item=>(
            <motion.li
              variants={variants}
              key={item}
              // initial={{x: -100}}
              // animate={{x: 0}}
              // transition={{duration: 1}}
            >
              {item}
            </motion.li>
          ))}
        </motion.ul>
        {/* <button onClick={()=> setOpen(prev=> !prev)}>Click</button> */}
    </div>
  );
};