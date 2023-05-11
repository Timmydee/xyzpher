import React from 'react'
import './Hero.scss'
import {AiOutlineArrowRight} from 'react-icons/ai'

import Scroll from '../../container/Scroll/Scroll'
// import Work from '../../container/Work/Work'
// import Work from '../../container/Work/Work'
import { motion } from "framer-motion";
// import styles from '../styles'
import { slideIn, staggerContainer, textVariant, navVariants } from "../../utils/motion";

const Hero = () => {
  return (
    <motion.div 
        className='hero'
        
    >
        <motion.div 
            className='hero__col'
            // variants={slideIn('right', 'tween', 0.2, 1)}
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25}}

        >
            <div>
                <div className='hero__col1'>
                    <motion.h1 variants={textVariant(1.1)} className='h_text'><span>Ideas</span> don't wait, neither should your <span>investments</span>.</motion.h1>
                    <motion.p variants={textVariant(1.2)} className='p_text'>Join the revolution of decentralized startup funding</motion.p>
                </div>

                <motion.form variants={textVariant(1.3)} className='form'>
                    <input
                        placeholder='Input your email'
                        className='hero_font'
                    /> 
                    <div>
                        <button className='btn'>
                            <div className='btn__center'>
                                <p>Join Waitlist </p>
                                <AiOutlineArrowRight className='arrow'/>
                            </div>
                        </button> 
                    </div>     
                </motion.form>
            </div>
        </motion.div>
        
        <Scroll />

        {/* <Work /> */}

    </motion.div>
  )
}

export default Hero