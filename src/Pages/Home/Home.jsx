import React from 'react'
import './Home.css'
import allInfos from './../../store'
console.log(allInfos)
export default function Home() {
  return (
    <>
      <div className="home-bg-container position-absolute w-100">
        <div className="home-bg-layout w-100 h-100"></div>
      </div>
      <div className="home-title-container d-flex-centering w-100">
        <h1 className='home-title text-light'>
          به فوت کورت راد خوش آمدید
        </h1>
      </div>
    </>
  )
}
