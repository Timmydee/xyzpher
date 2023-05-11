import React, {useEffect, useState} from 'react'
import polygon1 from '../../assets/polygon1.png'
import polygon2 from '../../assets/polygon2.png'
import './Purchase.scss'

const GovernanceToken = () => {
    const [rotation, setRotation] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
        setRotation((prevRotation) => (prevRotation + 1) % 360);
        }, 1000 / 60); // 60 frames per second

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
    <div className='purchase__items'>

        <div className='purchase'>
            <div className="banner__purchase">
                <div className='banner2__purchase'>
                    <p><span>XYZ</span></p>
                </div>
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

export default GovernanceToken