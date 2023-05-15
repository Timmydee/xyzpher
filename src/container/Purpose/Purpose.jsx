import React, {useEffect, useState} from 'react'
import './Purpose.scss'
import polygon1 from '../../assets/polygon1.png'
import polygon2 from '../../assets/polygon2.png'
import { motion } from 'framer-motion';
import GovernanceToken from '../../PurposeContainer/GovernanceToken/GovernanceToken';
import Purchase from '../../PurposeContainer/Purchase/Purchase';
import Submission from '../../PurposeContainer/Submission/Submission';
import Voting from '../../PurposeContainer/Voting/Voting';


const Purpose = () => {

  return (
    <div className='purpose'>
        <div className='purpose__col'>
            <GovernanceToken />
            <Purchase />
            <Submission />

            <Voting />

            {/* 2 */}
        </div>
    </div>
  )
}

export default Purpose