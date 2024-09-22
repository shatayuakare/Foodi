import React from 'react'

const Testimonial = () => {
    return (
        <section className='content-center'>
            <div className='flex gap-6'>
                <div className='w-2/5 content-center'>
                    <img className='w-fit p-20 ps-0' src="https://food-website-blush-one.vercel.app/pngwing%202.png" alt="" />
                </div>
                <div className='w-3/5 content-center p-4' data-aos="zoom-in-left" data-aos-duration="1500">

                    <h5 className='uppercase text-[#FF6868] font-bold text-xl'>Testimonials</h5>

                    <h4 className='text-[3.5rem] font-bold py-8'>
                        What Our Customers Say About Us
                    </h4>
                    <p className='text-2xl font-semibold text-gray-600'>
                        “I had the pleasure of dining at Foodi last night, and I'm still raving about the experience! The attention to detail in presentation and service was impeccable”
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Testimonial