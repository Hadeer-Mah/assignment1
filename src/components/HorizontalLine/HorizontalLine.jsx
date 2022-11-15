import React from 'react'
import styles from './HorizontalLine.module.css'
export default function HorizontalLine(props) {
  const {color , bg} = props
  return (
    <>
    <div className={`${styles.horizonLine} d-flex align-items-center justify-content-center my-4`}>
            <span style={{backgroundColor:`${bg}`}}></span>
            <i className="fa-solid fa-star position-relative fa-2xl"  style={{color:`${color}`}}></i>
            <span style={{backgroundColor:`${bg}`}}></span>
    </div>
    </>
  )
}
