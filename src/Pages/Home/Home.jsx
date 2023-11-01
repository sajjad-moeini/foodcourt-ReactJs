import React from 'react'
import './Home.css'
import allInfos from './../../store'
import Typewriter from 'typewriter-effect';
import FoodSwiper from '../../Components/FoodSwiper/FoodSwiper'
import SvgGen from '../../Components/SvgGen/SvgGen'

console.log(allInfos)
export default function Home() {
  return (
    <>
      <div className="home-bg-container position-absolute w-100">
        <div className="home-bg-layout w-100 h-100"></div>
        <SvgGen pos={'buttom'} />
      </div>
      <div className="home-title-container d-flex-centering w-100">
        <h1 className='home-title text-light'>
        <Typewriter
  options={{
    strings: ['    به فوت کورت راد خوش آمدید'],
    autoStart: true,
    loop: true,
  }}
/>
      
        </h1>
      </div>
          {/* <div className=" off-section-title">
            <div className="h1">
              فود پارتی
            </div>
            <p>
              تخفیف به مدت محدود برای غذای های منتخب شما
            </p>
             </div> */}
      <div className="home-offs-swiper-container">
        
        
      <FoodSwiper/>
      </div>
    </>
  )
}
