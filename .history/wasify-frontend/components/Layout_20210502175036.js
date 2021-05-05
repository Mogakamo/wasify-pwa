import React from 'react'
import Footer from '../components/Footer'
import TopNav from '../components/navs/TopNav'
import Hero from './Hero'
import Feature from './Feature'
import CallToAction from './CallToAction'
import Testimonials from './Testimonials'

const Layout = () => {
    return (
        <>
        <TopNav />

        <Hero />

        <Feature />

        <Testimonials />

        <CallToAction />

        <Footer />
        </>
    )
}

export default Layout