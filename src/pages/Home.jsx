import React from 'react'
import Slider from '../components/Home/Slider'
import Navbar from '../components/Navbar/Navbar'

export default function Home() {
    return (
        <div>
            <div className='relative z-10'>
                <Navbar />
            </div>
            <Slider />
        </div>
    )
}