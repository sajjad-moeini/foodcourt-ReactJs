import React, { useContext } from 'react'
import './NavBar.css'
import { AiOutlineInfoCircle, AiOutlineArrowDown, AiOutlineSearch } from 'react-icons/ai'
import { FaStore } from 'react-icons/fa'
import { MdAccountCircle } from 'react-icons/md'
import { foodCurtContext } from '../../context/foodCurtContext'
export default function NavBar() {
  const context = useContext(foodCurtContext)
  return (
    <div className='w-100 navbar-container'>
      <div className="row  h-100 mx-auto" style={{ width: '90%' }}>
        <div className="col-1 navbar-logo-container d-none d-lg-flex d-flex-centering me-5">
          <img src="images/logo/logo.png" className='img-fluid' alt="" />
        </div>
        <div className="navbar-select-location-container col-6 col-lg-3  d-flex-centering ">
          <div className="navbar-select-location-wrapper d-flex-centering justify-content-around p-2 rounded-4  w-100 cp" onClick={()=>{context.setIsMapShow(prev=>!prev)}}>
            <AiOutlineInfoCircle className='navbar-select-location-icon' />
            <div className='navbar-select-location-text-container d-flex align-items-center'>
              <div className='navbar-select-location-text mx-2'>
                آدرستان را انتخاب کنید
              </div>
            </div>
            <AiOutlineArrowDown className='navbar-select-location-icon' />
          </div>
        </div>
        <div className="navbar-searchbar-container col-3 d-flex-centering position-relative d-none d-lg-flex mx-auto">
          <div className="navbar-search-icon-container position-absolute">
            <AiOutlineSearch />
          </div>
          <input type="text" className='form-control navbar-search-input w-100' placeholder='جستجو در فوت کورت ...' />

        </div>

        <div className="col-md-2 d-none d-lg-flex d-flex-centering text-danger text-nowrap">
          <FaStore className='me-2' />
          ثبت نام فروشندگان
        </div>
        <div className="col-md-2 d-none d-lg-flex d-flex-centering">
          <button className='btn btn-danger text-nowrap'>
            ورود یا عضویت
          </button>
        </div>

        <div className='d-flex d-lg-none col-3 d-flex-centering justify-content-around fs-1 text-danger ms-auto'>
          <AiOutlineSearch />
          <MdAccountCircle />
        </div>

      </div>

    </div>
  )
}
