import React from 'react'
import './Work.scss'
import how from '../../assets/how1.png'

const Work = () => {
  return (
    <div className='works'> 
      <div className='work'>
        {/* <div className='work__col'>How does it work?</div> */}
        <img className='work__col' src={how} />
        <img className='work__col style={{animation: 10s, margin-right: 0.6rem}}' src={how} />
        {/* <div className='work__col style={{animation: 10s}}'>How does it work?</div> */}
      </div>
    </div>
    
  )
}

export default Work