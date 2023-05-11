import React from 'react'
import './App.scss'
import Navbar from './component/Navbar/Navbar'
import Hero from './component/Hero/Hero'
import Scroll from './container/Scroll/Scroll'
import Work from './container/Work/Work'
import Purpose from './container/Purpose/Purpose'
import LoadingSpinner from './container/LoadingSpinner/LoadingSpinner'

const App = () => {
  return (
    <div className='app'>
      <div className='app__container'>
        <Navbar />
        <Hero />
        {/* <Scroll /> */}
        <div className='work__app'>
          <Work />
          <Purpose />
        </div>
        
      </div>
    </div>
    
  )
}

export default App