import React from 'react'
import Header from '../components/Header'
import HeroSection from '../components/HeroSection'
import Projects from '../components/Projects'
import Footer from '../components/Footer'
import Education from '../components/Education'

const Home = () => {
    return (
        <div className='w-full'>
            <Header />
            <HeroSection />
            <Education/>
            <Projects/>

            <Footer/>

        </div>
    )
}

export default Home
