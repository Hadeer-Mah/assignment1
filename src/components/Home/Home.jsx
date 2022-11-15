import React from 'react'
import avatar from '../../imgs/avataaars.svg'
import HorizontalLine from '../HorizontalLine/HorizontalLine'

export default function Home() {
  return (
    <>
    <section className='vh-100 text-white d-flex justify-content-center text-center align-items-center' style={{backgroundColor:"#1abc9c"}}>
        <div>
            <div className='w-75 mx-auto'><img src={avatar} className='w-75'/></div>
            <h1 style={{fontSize:"5rem"}}>Start React</h1>
            <HorizontalLine color='white' bg='white'/>
            <p className='fs-4'>Graphic Artist - Web Designer - Illustrator</p>
        </div>
    </section>
    </>
  )
}
