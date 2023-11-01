import React from 'react'
import './Footer.css'
import { AiFillInstagram, AiFillLinkedin, AiFillTwitterCircle } from 'react-icons/ai'
import { BsTelegram } from 'react-icons/bs'
export default function Footer() {
       return (
              <>
                     <div className="row footer">
                            <div className="col-12 col-md-4">
                                   <div className="row">
                                          <div className="col-6 p-4 d-flex justify-content-end">
                                                 <img src="images/logo/logo.png" className='img-fluid' alt="" style={{ width: '100px' }} />
                                          </div>
                                          <div className="col-6 pt-4 ">
                                                 <div className='text-danger'>
                                                        فوت کورد راد
                                                 </div>
                                                 <div className='text-secondary ' style={{fontSize:'.8rem'}}>
                                                        تجربه سفارش غذا، از  فوت کورد راد
                                                 </div>
                                          </div>
                                   </div>
                                   <div className="d-flex justify-content-center">
                                          <div className="footer-social-icon-container rounded-circle d-flex-centering mx-1">
                                                 <AiFillInstagram />
                                          </div>
                                          <div className="footer-social-icon-container rounded-circle d-flex-centering mx-1">
                                                 <AiFillLinkedin />
                                          </div>
                                          <div className="footer-social-icon-container rounded-circle d-flex-centering mx-1">
                                                 <BsTelegram />
                                          </div>
                                          <div className="footer-social-icon-container rounded-circle d-flex-centering mx-1">
                                                 <AiFillTwitterCircle />
                                          </div>
                                   </div>
                            </div>
                            <div className="col-12 col-md-4">
                                   <ul>
                                          <li>
                                          درباره فوت کورد
                                          </li>
                                          <li>
                                          همکاری با ما
                                          </li>
                                          <li>
                                          وبلاگ
                                          </li>
                                          <li>
                                          قوانین سایت
                                          </li>
                                          <li>
                                          حریم خصوصی
                                          </li>
                                          <li>
                                          ثبت نام فروشندگان
                                          </li>
                                   </ul>
                            </div>
                            <div className="col-12 col-md-4">
                                   <ul>
                                          <li>
                                          تماس با فود کورت
                                          </li>
                                          <li>
                                          پرسش‌های متداول
                                          </li>
                                          <li>
                                          ثبت شکایات
                                          </li>
                                          <li>
                                          اپلیکیشن موبایل
                                          </li>
                                   </ul>
                            </div>
                     </div>
              </>
       )
}
