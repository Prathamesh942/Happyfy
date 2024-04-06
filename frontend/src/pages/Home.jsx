import React from 'react'
import Navbar from '../components/Navbar'
import Breathe from '../components/Breathe'

const Home = () => {
  return (
    <div className=' bg-[#FBE099] h-screen'>
        <Navbar/>
        <div className=' h-[70%] bg-orange-400 w-[100%] flex justify-between'>
          <div>
            <h1 className=' font'>Happyfy</h1>
          </div>
          <img src="/assets/saint.png" alt="" />
        </div>
    </div>
  )
}

export default Home