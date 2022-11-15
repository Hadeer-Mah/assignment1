import styles from './Contact.module.css'
import React from 'react'
import HorizontalLine from '../HorizontalLine/HorizontalLine'

export default function Contact() {
  return (
    <>
    <section className={`${styles.contactBg} text-center mb-5 pt-5`}>
        <h2>CONTACT ME</h2>
        <HorizontalLine bg='#2c3e50' color='#2c3e50'/>
          <div className="container py-5">
            <div class="form-floating mb-4">
              <input type="text" class="form-control" id="floatingInput" placeholder="Name"/>
              <label for="floatingInput">Name</label>
            </div>
            <div class="form-floating mb-4">
              <input type="email" class="form-control" id="floatingInput" placeholder="Email"/>
              <label for="floatingInput">Email Address</label>
            </div>
            <div class="form-floating mb-4">
              <input type="tel" class="form-control" id="floatingInput" placeholder="Phone Number"/>
              <label for="floatingInput">Phone Number</label>
            </div>
            <textarea name="" id="" cols="30" rows="10" className='form-control' placeholder='Message'></textarea>
            <button className='my-4 text-white border-0 rounded-1 fs-5'>Send</button>

          </div>
    </section>
    </>
  )
}
