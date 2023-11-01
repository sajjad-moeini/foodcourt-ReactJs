import React, { useContext, useRef, useState } from 'react';
import './FoodSwiper.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Navigation } from 'swiper/modules';
import allInfos from './../../store'


import CounterBox from '../CounterBox/CounterBox'
import { foodCurtContext } from '../../context/foodCurtContext';
export default function FoodSwiper() {

       const allFoods = allInfos.foods
       const foodHasOff = allFoods.filter((food => (food.off > 0)))
       const {setShownProductId,setShownProduct} = useContext(foodCurtContext)

       const showProduct = (Id) => {
              let shownProduct = allFoods.filter((food) => (food.id == Id))[0]
              
              setShownProductId(Id)
              setShownProduct(true)
       }
       return (
              <>
                     <div className="swiper-container mx-auto rounded-4 position-relative d-flex-centering justify-content-start">
                            <div className="offCounter-container position-absolute">
                                   <CounterBox />

                            </div>
                            <div className="swiper-wrapper mx-auto overflow-hidden">

                                   <Swiper slidesPerView={'auto'}
                                          spaceBetween={30}
                                          loop={true}
                                          pagination={{
                                                 clickable: true,
                                          }}
                                          navigation={true}
                                          modules={[Pagination, Navigation]}
                                          className="mySwiper w-90 h-100 mx-auto ">
                                          {
                                                 foodHasOff.map((food, index) => (
                                                        <SwiperSlide className='swiper-slide cp' key={index} onClick={() => showProduct(food.id)}>
                                                               <div className="swiper-img-container d-flex-centering">
                                                                      <img src={food.img}
                                                                             className='img-fluid swiper-img rounded-2' alt="" />
                                                               </div>
                                                               <div className="swiper-food-title d-flex-centering mt-2">
                                                                      {food.name.trim()}
                                                               </div>
                                                               {
                                                                      food.off > 0 ? (<>

                                                                             <div className="swiper-food-price d-flex-centering my-2 fs-6 text-secondary text-decoration-line-through">{food.price.toLocaleString()} تومان</div>
                                                                             <div className="swiper-food-price d-flex-centering my-2 fs-5 text-danger">{(food.price * ((100 - food.off) / 100)).toLocaleString()} تومان</div>
                                                                      </>
                                                                      ) : (
                                                                             <div className="swiper-food-price d-flex-centering my-2 h5">{food.price.toLocaleString()} تومان</div>
                                                                      )
                                                               }

                                                               <div className='swiper-food-btn-container d-flex-centering fw-bolder'>
                                                                      <button className="btn btn-outline-danger swiper-food-btn fw-bolder">
                                                                             افزودن
                                                                      </button>
                                                               </div>
                                                        </SwiperSlide>
                                                 ))
                                          }

                                   </Swiper>
                            </div>
                     </div>

                     <div className="shown-product">

                     </div>
              </>
       )
}
