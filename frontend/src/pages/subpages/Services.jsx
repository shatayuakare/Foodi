import React from 'react'


const services = [
    {
        title: "Catering",
        description: "Delight your guests with our flavors and presentation",
        img: "https://food-website-blush-one.vercel.app/fi-rr-salad.png"
    },
    {
        title: "Fast delivery",
        description: "We deliver your order promptly to your door",
        img: "https://food-website-blush-one.vercel.app/fi-rr-time-fast.png"
    },
    {
        title: "Online Ordering",
        description: "Explore menu & order with ease using our Online Ordering",
        img: "https://food-website-blush-one.vercel.app/fi-rr-shopping-cart-check.png"
    },
    {
        title: "Gift Cards",
        description: "Give the gift of exceptional dining with Foodi Gift Cards",
        img: "https://food-website-blush-one.vercel.app/fi-rr-gift.png"
    },
]

const Services = () => {
    return (
        <section className="content-center">
            <div className='flex'>
                <div className='w-[55%]'>
                    <div className='w-[90%]'>
                        <h5 className='uppercase text-[#FF6868] font-bold text-xl'>Our Story & Services</h5>

                        <h4 className='text-[3.5rem] font-bold py-10'>
                            Our Culinary Journey And Services
                        </h4>
                        <p className='text-2xl font-semibold text-gray-600'>
                            Rooted in passion, we curate unforgettable dining experiences and offer exceptional services, blending culinary artistry with warm hospitality.
                        </p>

                        <button className='btn btn-ghost rounded-full px-7 mt-10 text-lg bg-[#38DB4B] hover:bg-[#33e348] text-white'>
                            Explore
                        </button>
                    </div>
                </div>
                <div className="w-[45%] grid grid-cols-2 gap-8">
                    {
                        services.map((elem, index) => (
                            <div className="p-8 text-[#38DB4B] border shadow-lg rounded-[2rem] text-center" key={index} data-aos="zoom-in-left" data-aos-duration="1500">
                                <img className='mx-auto w-16 p-1' src={elem.img} alt={elem.title} />

                                <div className='text-2xl font-bold py-3'>
                                    {elem.title}
                                </div>
                                <div className='text-lg font-semibold'>
                                    {elem.description}
                                </div>
                            </div>
                        ))
                    }

                </div>

            </div>
        </section>
    )
}

export default Services