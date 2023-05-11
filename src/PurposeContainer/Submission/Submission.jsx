import React, {useEffect, useState} from 'react'
import polygon1 from '../../assets/polygon1.png'
import polygon2 from '../../assets/polygon2.png'
import paper from '../../assets/Paper.png'
import './Submission.scss'
import { FaTimes } from 'react-icons/fa'

const GovernanceToken = () => {
   


    return (
    <div className='purpose__items'>
        <div className='purpose__desc'>
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
        </div>

        <div className='purpose__banner'>
            <div className="banner1__submission">
                <div className="banner2__submission" >
                    <div className="banner3__submission">
                        <div className='banner3__sec'>
                            <img src={paper} alt='paper-icon'/>

                            <span><FaTimes /></span>
                        </div>

                        <div className='banner3__sec2'>
                            <h3 className='pSub-text'>Submit Your Proposal</h3>
                            <p className='pSub-text'>Have a great idea for a product that could solve a problem
                                and benefit the community? Submit your proposal here. Ensure you have read the terms before you proceed.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default GovernanceToken