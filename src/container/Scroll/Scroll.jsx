import React from 'react'
// import Slider from 'react-slick'
import './Scroll.scss'
import { motion } from 'framer-motion';
import { slideIn, staggerContainer, textVariant, navVariants } from "../../utils/motion";


// import 'slick-carousel/slick/slick.css'
// import 'slick-carousel/slick/slick-theme.css'

const about = [
    {
        name: "start a dao",
        color: "#72B8D2",
    },
    {
        name: "Invest with XYZPHER",
        color: "#97529D",
    },
    {
        name: "Shape startup funding future",
        color: "#C7B5A6",
    },
    {
        name: "Decentralized funding",
        color: "#9D7CAC",
    },
    {
        name: "Join the community",
        color: "#9DBCB2",
    },
    {
        name: "start a dao",
        color: "#525D33",
    },
    {
        name: "democratic",
        color: "#98DB6D",
    },
    {
        name: "Get in early",
        color: "#D0A2B8",
    },
    
]

const about2 = [ 
    {
        name: "Funding transparency",
        color: "#72B8D2",
    },
    {
        name: "Equity for all",
        color: "#636264",
    },
    {
        name: "decentralized Legal entity",
        color: "#6977C4",
    },
    {
        name: "secure Document storage",
        color: "#5C5E61",
    },
    {
        name: "Equity ownership",
        color: "#A15561",
    },
    {
        name: "decision makers",
        color: "#653A64",
    },
    {
        name: "community led",
        color: "#663e3e",
    },
]

const Scroll = () => {
    
      return (
        <motion.div 
          variants={navVariants}
          initial="hidden"
          whileInView="show"
          className="scroll-container"
        >
          <div className="scroll-row">
            {about.map((item, i) => {
              return (
                <div key={i} className="scroll-item" style={{ background: item.color }}>
                  {item.name}
                </div>
              );
            })}
          </div>
    
          <div className="scroll-row">
            {about2.map((item, i) => {
              return (
                <div key={i} className="scroll-item" style={{ background: item.color }}>
                  {item.name}
                </div>
              );
            })}
          </div>
        </motion.div>
      );
    }
    
export default Scroll;    