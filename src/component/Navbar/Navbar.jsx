import React, {useState} from 'react'
import './Navbar.scss'
import {FaBars, FaTimes} from 'react-icons/fa'
import {AiOutlineArrowRight} from 'react-icons/ai'
import { motion } from "framer-motion";
import { navVariants } from "../../utils/motion";

const Navbar = () => {
  const [click, setClick] = useState(false)

  const handleClick = () => {
    setClick(!click)
  }

  return (
    <motion.nav 
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className="navbar"
    >
        <div className='navbar_col'>
            <div className='logo_name'>
                <h6 className='xyz'>xyz</h6>
                <h6><span> </span>pher</h6>
            </div>

            <div className={`nav__links ${click ? 'nav-menu active' : 'nav-menu'}`}>
              <ul className='nav'>
                <li>
                  <a onClick={() => setClick(false) } href='#home'>Token</a>
                </li>

                <li>
                  <a onClick={() => setClick(false) } href='#about'>Community</a>
                </li>

                <li>
                  <a onClick={() => setClick(false) } href='#work'>Docs</a>
                </li>

                <div>
                  <button className='btn'>
                      <div className='btn__center'>
                          <p>Join Waitlist </p>
                          <AiOutlineArrowRight className='arrow'/>
                      </div>
                  </button> 
                </div>
                
              </ul>          
            </div>

            <div onClick={handleClick} className='toggle'>
              {click ? 
                (<FaTimes className="menuIcon"/>) : <FaBars className="menuIcon"/>
              }
            </div>
        </div>
    </motion.nav>
  )
}

export default Navbar