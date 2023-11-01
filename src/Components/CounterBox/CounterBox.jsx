import React, { memo } from 'react'
import './CounterBox.css'
import { useTimeCounter } from '../../Hooks/UseTimeCounter'
export default memo(function CounterBox() {
  const [ hours, minutes, seconds] = useTimeCounter()
  return (
    <>
      <section className="row justify-content-between">
      <section className="col-3 mx-auto   time-container ">{seconds > 9 ? seconds : `0${seconds}`}
          <section className="time-title">
              ثانیه
          </section>
        </section>
      
        <section className="col-3 mx-auto   time-container ">{minutes > 9 ? minutes : `0${minutes}`}
          <section className="time-title">
              دقیقه
          </section>
        </section>
        <section className="col-3 mx-auto   time-container ">{hours > 9 ? hours : `0${hours}`}
          <section className="time-title">
              ساعت
          </section>
        </section>
        
      </section>
    </>
  )
})
