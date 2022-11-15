import React from 'react'
import styles from './Footer.module.css'


export default function Footer() {
  return (
    <>
    <footer className='text-white'>
      <div className={styles.footerBg}>
      <div className="container py-4">
      <div className='row text-center gy-2'>
        <div className='col-md-4'>
          <h4>Location</h4>
          <p>2215 John Daniel Drive Clark, MO 65243</p>
        </div>
        <div className='col-md-4'>
          <h4>AROUND THE WEB</h4>
          <div className={`${styles.social}`}>
            <div><i className='fa-brands fa-facebook-f'></i></div>
            <div><i className='fa-brands fa-twitter'></i></div>
            <div><i className='fa-brands fa-linkedin-in'></i></div>
            <div><i className='fa-solid fa-basketball'></i></div>
          </div>
        </div>
        <div className='col-md-4'>
          <h4>ABOUT FREELANCER</h4>
          <p>Freelance is a free to use, MIT licensed Bootstrap theme created by Route</p>
        </div>
      </div>
      </div>
      </div>
      <div className={`${styles.copyright} text-center text-white py-2`}>
        <p className='mb-0'>Copyright © Your Website 2021</p>
    </div>
      
    </footer>
    
    </>
    
  )
}
