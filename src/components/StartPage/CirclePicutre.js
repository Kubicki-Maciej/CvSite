import React from 'react'
import { motion } from "framer-motion"

export default function CirclePicutre({src, alt}) {

    return (
        
      <div className="w-full h-full relative" >
        <motion.div 
          initial={{opacity: 0}}
          transition={{
            delay: 1,
          }}
          animate={{
            opacity:1 , transition: {delay:0.3 , duration: 0.4, ease: "easeIn"}
          }}

          className='w-[300px] h-[300px] xl:w-[560px] xl:h-[560px] '
        >
          <motion.div 
          initial={{opacity: 0}}
          transition={{
            delay: 1,
          }}
          animate={{
            opacity:1 , transition: {delay:0.3 , duration: 0.4, ease: "easeOut"}
          }}

          className='w-[298px] h-[298px] xl:w-[560px] xl:h-[560px] absolute'
          >

            <img
              
              src={src}
              alt={alt}
              className="w-full h-full object-scale-down rounded-full"
            />

          </motion.div>
          <motion.svg
            className="w-[300px] xl:w-[560px] h-[300px] xl:h-[560px] absolute "
            fill="transparent"
            viewBox=" 0 0 506 506"
            xmlns="http://www.w3.org/2000/svg"
          >

            <motion.circle 
              className="absolute"
              cx="253"
              cy="253"
              r="250"
              stroke="#67e8f9"
              strokeWidth="9"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ strokeDasharray: "24 10 0 0"}}
              animate={{
                strokeDasharray: ["12, 120 25 25", "16 25 92 72", "4 250 22 22"],
                rotate: [120, 360]
              }}
              transition={{
                duration:20,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />
          </motion.svg>

          </motion.div>
          </div>
        
    );
}
