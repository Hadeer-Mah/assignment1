import React from 'react'
import HorizontalLine from '../HorizontalLine/HorizontalLine'


export default function About() {
  return (
    <>
    <section className=' py-5 text-white d-flex justify-content-center text-center align-items-center' style={{backgroundColor:"#1abc9c"}}>
    <div>
        <h2 style={{fontSize:"3.8rem"}}>ABOUT</h2>
        <HorizontalLine color='white' bg='white'/>
        <div className='container d-flex justify-content-between text-start w-75 mt-5 fs-5'>
            <p className='me-4'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
            <p>You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!</p>
        </div>

    </div>
    </section>
    </>
  )
}

