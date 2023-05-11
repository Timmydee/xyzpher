import React, {useEffect, useState} from 'react'
import polygon1 from '../../assets/polygon1.png'
import polygon2 from '../../assets/polygon2.png'
import './GovernanceToken.scss'
import { motion } from "framer-motion";

import { slideIn, staggerContainer, textVariant } from "../../utils/motion";

const GovernanceToken = () => {
    const [rotation, setRotation] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
        setRotation((prevRotation) => (prevRotation + 1) % 360);
        }, 1000 / 60); // 60 frames per second.

        return () => clearInterval(interval);
    }, []);

    const x =
        350 -
        46.5 +
        (298.5 - 93 / 2 - 1.2 * 16 - 10) * Math.cos((rotation * Math.PI) / 180) -
        93 / 2;
    const y =
        105 -
        46.5 +
        (157.5 - 93 / 2 - 1.2 * 16 - 20) * Math.sin((rotation * Math.PI) / 180) -
        93 / 2;


    return (
    <motion.div className='purpose__items'>
        <motion.div
            variants={textVariant(1.4)}
            className='purpose__desc'>
            <div className='purpose__title'>
                <div className='purpose__img'>
                    <img className="img1" src={polygon1} />
                    <img className='img2' src={polygon2} />
                </div>
                <h6>Purchase of Governance Token</h6>
            </div>
            <p>
                Users purchase xyz tokens. The tokens give users the right to vote on proposals and to be eligible for certain
                rewards such as shares of the startup.
            </p>
        </motion.div>

        <div className='purpose__banner'>
            <div className="banner1">
                <div
                    className="banner2"
                    style={{
                        // transform: `translate(${x}px, ${y}px)`,
                    }}
                >
                    <div className="banner3">
                        <h6 className="xyz">xyz</h6>
                        <h6>
                            <span> </span>pher
                        </h6>
                    </div>
                </div>
            </div>
        </div>
    </motion.div>
    )
}

export default GovernanceToken