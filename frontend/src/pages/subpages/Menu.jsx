import React from 'react'

const menu = [
    {
        title: "Fattoush salad",
        description: "Description of the item",
        img: "https://food-website-blush-one.vercel.app/Fattoush%20salad.png",
        price: 24.00,
        rate: 4.9,
        like: false
    },
    {
        title: "Fattoush salad",
        description: "Description of the item",
        img: "https://food-website-blush-one.vercel.app/Vegetable%20salad.png",
        price: 25.00,
        rate: 3.9,
        like: false
    },
    {
        title: "Fattoush salad",
        description: "Description of the item",
        img: "https://food-website-blush-one.vercel.app/Fattoush%20salad.png",
        price: 22.00,
        rate: 4.8,
        like: false
    },
]

const Menu = () => {
    return (
        <section className='content-center'>
            <div className='w-2/5'>
                <h5 className='uppercase text-[#FF6868] font-bold text-xl'>Special Dishes</h5>

                <h4 className='text-[3.5rem] font-bold py-4'>
                    Standout Dishes From Our Menu
                </h4>
            </div>

            <div className="flex gap-10">

                {
                    menu.map((elem, index) => (
                        <div className="flex-1 shadow-md hover:shadow-xl rounded-[2rem] bg-white p-10 relative" key={index}>
                            <button className="absolute top-0 end-0 h-16 w-20 bg-[#38DB4B] flex items-center justify-center rounded-se-[2rem] rounded-bl-[2rem]">
                                {
                                    elem.like ?
                                        <i className='bx bxs-heart text-3xl text-white' ></i>
                                        :
                                        <i className='bx bx-heart text-3xl text-white' ></i>
                                }
                            </button>

                            <img className='w-[15rem] mx-auto' src={elem.img} alt={elem.title} />

                            <div className='text-[1.8rem] font-bold'>{elem.title}</div>
                            <div className='text-xl py-4 font-semibold text-gray-600'>
                                {elem.description}
                            </div>
                            <div className='flex justify-between'>
                                <div className='font-bold text-3xl'>
                                    <span className='text-[#FF6868] text-2xl'>$</span>
                                    {elem.price}.00
                                </div>
                                <div className='text-xl flex gap-2 items-center font-semibold'>
                                    <i className='bx bxs-star text2xl text-orange-500' ></i>
                                    {elem.rate}
                                </div>
                            </div>
                        </div>
                    ))
                }


            </div>
        </section>
    )
}

export default Menu