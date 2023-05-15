import React from 'react'
import './Work.scss'
import how from '../../assets/how1.png'

const Work = () => {
  return (
    <div className='works'> 
      <div className='work'>
        <img className='work__col' src={how} />
        <img className='work__col style={{animation: 10s, margin-right: 0.6rem}}' src={how} />
      </div>
    </div>
    
  )
}

export default Work