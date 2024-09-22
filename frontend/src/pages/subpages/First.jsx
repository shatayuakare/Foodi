import React from 'react'

const First = () => {
    return (
        <section className='content-center'>
            <div className="grid grid-cols-2">
                <div className='content-center'>
                    <h4 className='text-[3.4rem] font-bold py-5'>
                        Dive into Delights Of Delectable <span className='text-[#38DB4B]'>
                            Food
                        </span>
                    </h4>
                    <p className='text-[1.5rem] text-zinc-700 py-4 font-semibold'>
                        Where Each Plate Weaves a Story of Culinary Mastery and Passionate Craftsmanship
                    </p>
                    <div className="flex gap-5 mt-2">
                        <button className='btn btn-ghost rounded-full px-7 text-lg bg-[#38DB4B] hover:bg-[#33e348] text-white '>
                            Order Now
                        </button>

                        <button className="btn btn-ghost hover:bg-transparent gap-3">
                            Watch Video
                            <div className="btn-circle bg-white shadow-lg flex items-center justify-center">
                                <i className='bx bx-play text-4xl' ></i>
                            </div>
                        </button>
                    </div>
                </div>
                <div className='p-0'>
                    <img className='w-full h-full' data-aos="fade-down" data-aos-duration="1000" src="https://food-website-blush-one.vercel.app/static/media/heroimage.b9ee5d44a93ce6a45275.webp" alt="" />
                </div>
            </div>
        </section>
    )
}

export default First