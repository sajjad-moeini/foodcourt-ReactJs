import React, { useContext } from 'react';
import GoogleMapReact from 'google-map-react';
import './GoogleMap.css'
import { AiFillCloseCircle } from 'react-icons/ai'
import { foodCurtContext } from '../../context/foodCurtContext';
export default function GoogleMap() {

  const defaultProps = {
    center: {
      lat: 35.79033532245513,
      lng: 51.42994156748372
    },
    zoom: 11
  };
  const AnyReactComponent = ({ text }) => <div>{text}</div>;

  const context = useContext(foodCurtContext)


  const closeMapHandler = () => {
    context.setIsMapShow(false)
  }

  return (
    <>
      
        <div className="google-map-modal position-absolute rounded-2">
          <div className='row'>
            <div className="col-1 d-flex-centering p-3">
              <AiFillCloseCircle className='goole-map-close-btn text-danger cp' onClick={closeMapHandler} />
            </div>
          </div>
          <div className='h3 px-2'>
            انتخاب آدرس
          </div>
          <p className=' px-2'>
            برای مشاهده مناسب‌ترین پیشنهادها به شما، ابتدا موقعیتتان را مشخص کنید.
          </p>
          <div className="google-map-container">
            <GoogleMapReact
              // bootstrapURLKeys={{ key: "AIzaSyCk1Nn1870gF4z5Rz7i_RoqNsWF3AyJOK8" }}
              defaultCenter={defaultProps.center}
              defaultZoom={defaultProps.zoom}
              language={'fa'}
              scrollwheel={true}
              onClick={(obj) => console.log(obj.x, obj.y, obj.lat, obj.lng, obj.event)}

            >
              {/* 35.79033532245513, 51.42994156748372 */}
              <AnyReactComponent
                lat={35.79033532245513}
                lng={51.42994156748372}
                text="My Marker"
              />
            </GoogleMapReact>
          </div>
          <button className='btn btn-danger w-100' onClick={closeMapHandler}>
            تایید
          </button>
        </div>
      
    </>

  )
}
