import React from 'react'
import Main from '../components/Home/Main'
import Slider from '../components/Home/Slider'
import Navbar from '../components/Navbar/Navbar'
import Company from '../components/Home/Company'
import Footer from '../components/Home/Footer'

export default function Home() {
    return (
        <div>
            <div className='relative z-10'>
                <Navbar />
            </div>
            <Slider />
            <Main />
            <Company />
            <Footer />
        </div>
    )
}