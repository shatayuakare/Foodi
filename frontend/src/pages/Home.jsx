import React from 'react'
import First from './subpages/First'
import Testimonial from './subpages/Testimonial'
import Menu from './subpages/Menu'
import Category from './subpages/Category'
import Services from './subpages/Services'

const Home = () => {
    return (
        <main>
            <First />
            <Category />
            <Menu />
            <Testimonial />
            <Services />
        </main>
    )
}

export default Home