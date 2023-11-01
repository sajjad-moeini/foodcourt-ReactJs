import React, { useContext } from 'react'
import './ShownProductBox.css'
import { AiFillStar } from 'react-icons/ai'
import { foodCurtContext } from '../../context/foodCurtContext'
import allInfos from '../../store'
import { CiCircleRemove } from 'react-icons/ci'
import Swal from 'sweetalert2'
export default function ShownProductBox() {
       let foodId = useContext(foodCurtContext).shownProductId
       let shownFood = allInfos.foods.filter((food) => (food.id == foodId))[0]
       const context = useContext(foodCurtContext)
       const addToCartHandler =()=>{
              if(!context.isLogin){
                     Swal.fire({
                            icon: 'info',
                            title: 'لطفا وارد حساب کاربری خود شوید',
                            confirmButtonText:
                            'باشه',
                          }).then((res)=>{
                            if(res.isConfirmed){
                                   context.setShownProduct(false)
                            }
                          })
              }
       }
       return (
              <>
                     {
                            shownFood && (
                                   <div className="shown-product-box overflow-y-scroll overflow-x-hidden">
                                          <div className="p-3">
                                                 <CiCircleRemove className='fs-1 text-danger cp' onClick={() => {
                                                        context.setShownProduct(false)
                                                 }} />
                                          </div>
                                          <div className="row p-3">
                                                 <div className="col-12 col-lg-6 d-flex-centering">
                                                        <div className="shown-product-img-container w-75 mx-auto overflow-hidden rounded-3">

                                                               <img src={shownFood.img} className='img-fluid rounded-3' alt="" />
                                                        </div>
                                                 </div>
                                                 <div className="col-12 col-lg-6">
                                                        <div className="d-flex justify-content-between my-3">
                                                               <div className="h5 text-nowrap fw-bolder">

                                                                      {shownFood.name.trim()}
                                                               </div>
                                                               <div className="shown-food-star-container d-flex-centering p-1 rounded-3">
                                                                      <AiFillStar className='text-warning' /> {shownFood.rate}
                                                               </div>
                                                        </div>
                                                        <p className='my-2 text-secondary'>
                                                               {shownFood.properties}
                                                        </p>
                                                        {
                                                               shownFood.size && <div className="h6 shown-food-size my-4">
                                                                      {shownFood.size}
                                                               </div>
                                                        }

                                                        <div className="d-flex justify-content-between my-4">
                                                               <div className="shown-product-price-container">
                                                                      {
                                                                             shownFood.off > 0 ? (
                                                                                    <>
                                                                                           <div className="shown-food-main-price text-decoration-line-through text-secondary d-flex-centering">
                                                                                                  {shownFood.price.toLocaleString()} تومان
                                                                                           </div>
                                                                                           <div className="shown-food-final-price d-flex-centering text-danger">
                                                                                                  {(shownFood.price * ((100 - shownFood.off) / 100)).toLocaleString()} تومان
                                                                                           </div>
                                                                                    </>
                                                                             ) : (
                                                                                    <div className="shown-food-final-price d-flex-centering text-danger">
                                                                                           {shownFood.price.toLocaleString()} تومان
                                                                                    </div>
                                                                             )
                                                                      }


                                                               </div>
                                                               <div className="shown-food-addBtn-container d-flex-centering">
                                                                      <button className='btn btn-outline-danger' onClick={addToCartHandler}>
                                                                             افزودن
                                                                      </button>
                                                               </div>
                                                        </div>
                                                 </div>
                                          </div>
                                          <div className=" shown-food-comments-container">
                                                 <div className="shown-food-comments-container-title h5 my-4 px-5">
                                                        نظرات کاربران
                                                 </div>

                                                 {
                                                        shownFood.comments.map((comment, index) => (
                                                               <>
                                                                      <div className='row' key={index}>
                                                                             <div className="col-6 col-lg-4 ps-5">
                                                                                    <div className="user-comment-userName">
                                                                                           {comment.person}
                                                                                    </div>
                                                                                    <div className="user-comment-date text-secondary my-2">
                                                                                           {comment.date}
                                                                                    </div>
                                                                                    <div className='d-flex justify-content-start '>
                                                                                           <div className="shown-food-star-container d-flex-centering p-1 rounded-3">
                                                                                                  <AiFillStar className='text-warning' /> {comment.rate}
                                                                                           </div>
                                                                                    </div>
                                                                             </div>
                                                                             <div className="col-6 col-lg-8">
                                                                                    <div className="user-comment-text">
                                                                                           بسیار عالی و با کیفیت بود و به موقع رسید.
                                                                                    </div>
                                                                                    <div className="user-coment-orders d-flex w-100 flex-wrap mt-3">
                                                                                           {comment.props.map((prop, index) => (
                                                                                                  <div className="user-coment-order rounded-2" key={index}>
                                                                                                         {prop}
                                                                                                  </div>
                                                                                           ))}

                                                                                    </div>                                                     </div>
                                                                      </div>

                                                               </>
                                                        ))
                                                 }


                                          </div>
                                   </div>
                            )
                     }

              </>
       )
}
