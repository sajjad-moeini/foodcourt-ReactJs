import React, { useEffect } from 'react'
import './Home.css'
import allInfos from './../../store'
import Typewriter from 'typewriter-effect';
import FoodSwiper from '../../Components/FoodSwiper/FoodSwiper'
import SvgGen from '../../Components/SvgGen/SvgGen'
import {AiFillStar} from 'react-icons/ai'
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Home() {

  useEffect(() => {
    AOS.init();
  }, [])


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
      <div className="home-offs-swiper-container">


        <FoodSwiper />
      </div>
      <div className="home-restaurant-show-section-bg position-relative h1 d-flex-centering text-light">
        رستوران های منتخب
        <SvgGen pos={'buttom'} />
        <SvgGen pos={'top'} />
      </div>
      <div className="home-restaurant-show-section-container w-75 mx-auto row my-5">
        {
          allInfos.companys.map((company,index)=>(
            <div className="col-12 col-md-6 col-lg-3 my-4" key={index}>
            <div data-aos={company.aos}  data-aos-duration="1000" className="home-restaurant-box cp  rounded-3 overflow-hidden">
              <div className="home-restaurant-box-img-container position-relative d-flex-centering ">
                <img src={company.bg} className='img-fluid mx-auto' alt="" />
                <div className="home-restaurant-box-logo position-absolute overflow-hidden">
                  <img src={company.logo} className='img-fluid rounded-4' alt="" />
                </div>
              </div>
              <div className=" d-flex-centering flex-column mt-5">
                <div className="restaurant-box-name fw-bold">
                {company.title}
                </div>
                <div className="d-flex my-3">
                  <div>
                  <AiFillStar className='text-warning'/>{company.rate} 
                  </div>
                  <div className='restaurant-score text-secondary'>
                    ({company.score} امتیاز)
                  </div>
                </div>
                <div className='restaurant-box-properties text-secondary'>
                فست‌فود, پیتزا, ساندویچ, برگر`
                </div>
              </div>
            </div>
          </div>
          ))
        }
     
      </div>
      <div className="home-categories-show-section-bg position-relative h1 d-flex-centering">
        دسته بندی ها
        <SvgGen pos={'buttom'} />
        <SvgGen pos={'top'} />
      </div>
      <div className="home-food-categories-section">
        <div className="row w-75 mx-auto">
          {
            allInfos.foodTypes.map((type,index)=>(
<div className="col-12 col-md-4 col-lg-3 mt-5" key={index}>
            <div className="home-category-box d-flex-centering flex-column cp">
              <div className="home-category-box-img-container d-flex-centering rounded-circle w-75 overflow-hidden" data-aos="zoom-in-down" data-aos-duration="1000">
                <img src={type.img} className='img-fluid home-category-box-img' alt="" />
              </div>
              <div className="home-category-box-title h3 d-flex-centering">
                {type.title}
              </div>
            </div>
          </div>
            ))
          }
          
        </div>
      </div>
    </>
  )
}
