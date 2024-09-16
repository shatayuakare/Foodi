import React from 'react'

const categories = [
    {
        title: "Main Dish",
        types: "86 dishes",
        img: "https://food-website-blush-one.vercel.app/pngwing%204.png"
    },
    {
        title: "Break Fast",
        types: "12 break fast",
        img: "https://food-website-blush-one.vercel.app/pngwing%206.png"
    },
    {
        title: "Dessert",
        types: "48 dessert",
        img: "https://food-website-blush-one.vercel.app/pngwing%203.png"
    },
    {
        title: "Browse All",
        types: "255 Items",
        img: "https://food-website-blush-one.vercel.app/pngwing%207.png"
    },
]

const Category = () => {
    return (
        <section className="content-center">
            <div className="text-center">
                <h5 className='uppercase text-[#FF6868] font-bold text-xl'>Customer favorites</h5>

                <h4 className='text-[3.5rem] font-bold py-8'>
                    Popular Categories
                </h4>
            </div>
            <div className="grid grid-cols-4 gap-10">


                {
                    categories.map((elem, index) => (
                        <div className='p-8 border shadow-md hover:shadow-xl rounded-[2rem] text-center' key={index}>
                            <div className='h-36 w-36 bg-[#C1F1C6] rounded-full mx-auto flex items-center justify-center'>
                                <img className='p-3' src={elem.img} alt={elem.title} />
                            </div>
                            <h4 className='text-3xl font-bold'>
                                {elem.title}
                            </h4>
                            <div className='text-xl'>
                                ({elem.types})
                            </div>
                        </div>
                    ))
                }


            </div>
        </section>
    )
}

export default Category