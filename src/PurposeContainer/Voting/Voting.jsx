import React, {useEffect, useState} from 'react'
import polygon1 from '../../assets/polygon1.png'
import polygon2 from '../../assets/polygon2.png'
import polygonb2 from '../../assets/polygonb2.png'
import './Voting.scss'
import paper from '../../assets/Paper.png'
import frame from '../../assets/frame.png'


import { FaTimes } from 'react-icons/fa'

const Voting = () => {

    return (
    <div className='voting__items'>

        <div className='purpose__banner'>
            <div className="banner1__submission">
                <img className="img1" src={polygonb2} />
                <div className="banner2__submission" >
                    <div className="banner3__submission">
                        <div className='banner3__sec'>
                            <div className='banner3__header'>
                                <img src={paper} alt='paper-icon'/>
                                <p>Voting history</p>
                            </div>
                            

                            <span><FaTimes /></span>
                        </div>

                        <div className='banner3__sec2'>
                            <h3 className='pSub-text'>Outcome</h3>
                            
                            <img src={frame} />
                        </div>
                    </div>
                    
                </div>
                <img className="img2" src={polygonb2} />
            </div>
        </div>

        <div className='purpose__desc'>
            <div className='purpose__title'>
                <div className='purpose__img'>
                    <img className="img1" src={polygon1} />
                    <img className='img2' src={polygon2} />
                </div>
                <h6>Closure of Purchase</h6>
            </div>
            <p>
                The purchase of tokens is closed and the list of top holders is determined based on the number of tokens they hold.
            </p>
        </div>
    </div>
    )
}

export default Voting