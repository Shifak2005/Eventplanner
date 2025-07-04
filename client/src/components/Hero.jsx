import React from 'react'
import { useNavigate } from 'react-router-dom';
import image from "../assets/images/wedding.webp"


const Hero = () => {
    const navigate = useNavigate();

  return (
   <>

    <div className='-mt-30  ' >
        <img className=' w-1520 absolute -z-1' src={image} alt="" />
          <span className=' italic text-amber-950 font-sans  text-6xl mt-50  ml-70 absolute ' >"TURN YOUR DREAMS INTO REALITY"</span>
          <div className=' italic text-amber-950 font-semibold  font-sans text-2xl mt-70  ml-120 absolute'>Creating unforgettable moments with style and ease <br />from weddings to corporate events, we bring your vision to <br /> life with thoughtful planning and flawless execution.</div>

          <button className=' bg-red-400 text-white px-6 py-4 text-2xl rounded mt-100 ml-160 hover:bg-red-500' onClick={() => navigate('/Btn1')}>Login</button>
          <button className=' bg-transparent border-red-400 border-2 ml-3 text-red-400 px-6 py-4 text-2xl rounded hover:bg-red-400 hover:text-red-50'>Read More</button>

        </div>

        
   </>
    
  )
}

export default Hero