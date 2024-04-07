import React from 'react'
import Navbar from '../components/Navbar'
import Breathe from '../components/Breathe'

const Home = () => {
  return (
    <div className=' bg-[#99fbc2] h-screen'>
        <Navbar/>
        <div className=' h-[70%]  w-[100%] flex justify-between'>
          <div>
            <h1 className=' font'>Happyfy</h1>
          </div>
          <img src="/assets/hero.png" alt="" />
        </div>
    </div>
  )
}

export default Home