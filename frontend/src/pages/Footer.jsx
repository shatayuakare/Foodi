import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer>
            <div className='flex py-12'>
                <div className='w-1/3'>
                    <img className='h-9' src="https://food-website-blush-one.vercel.app/logo.png" alt="" />
                    <p className='mt-8 text-2xl text-gray-600 w-2/3 font-semibold'>
                        Savor the artistry where every dish is a culinary masterpiece
                    </p>
                </div>
                <div className="grid grid-cols-3 w-2/3">
                    <div>
                        <h5 className='text-2xl font-bold mb-6'>
                            Useful links
                        </h5>
                        <ul className='text-xl grid gap-6 font-semibold text-gray-500'>
                            <li>
                                <Link to={'/about'} >About us</Link>
                            </li>
                            <li>
                                <Link to={'/event'} >Events</Link>
                            </li>
                            <li>
                                <Link to={'/blog'} >Blogs</Link>
                            </li>
                            <li>
                                <Link to={'/faq'}>FAQ</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h5 className='text-2xl font-bold mb-6'>
                            Main Menu
                        </h5>
                        <ul className='text-xl grid gap-6 font-semibold text-gray-500'>
                            <li>
                                <Link to={'/'} >Home</Link>
                            </li>
                            <li>
                                <Link to={'/offer'} >Offers</Link>
                            </li>
                            <li>
                                <Link to={'/menu'} >Menus</Link>
                            </li>
                            <li>
                                <Link to={'/res'}>Reservation</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h5 className='text-2xl font-bold mb-6'>
                            Contact Us
                        </h5>
                        <ul className='text-xl grid gap-6 font-semibold text-gray-500'>
                            <li>example@email.com</li>
                            <li>+91 958 2480 966</li>
                            <li>Social media</li>

                        </ul>
                    </div>
                </div>
            </div>

            <div className='py-12 flex items-center'>
                <div className='flex gap-6 w-1/3'>
                    <button className="btn btn-ghost bg-[#ddffdf] btn-circle hover:bg-[#38DB4B] hover:text-white">
                        <i className='bx bxl-facebook text-3xl' ></i>
                    </button>
                    <button className="btn btn-ghost bg-[#ddffdf] btn-circle hover:bg-[#38DB4B] hover:text-white">
                        <i className='bx bxl-instagram text-3xl' ></i>
                    </button>
                    <button className="btn btn-ghost bg-[#ddffdf] btn-circle hover:bg-[#38DB4B] hover:text-white">
                        <i className='bx bxl-twitter text-3xl' ></i>
                    </button>
                    <button className="btn btn-ghost bg-[#ddffdf] btn-circle hover:bg-[#38DB4B] hover:text-white">
                        <i className='bx bxl-youtube text-3xl' ></i>
                    </button>
                </div>
                <div className='text-xl font-semibold w-2/3 text-zinc-600'>
                    Copyright &copy;2024 Dscode | All rights reserved
                </div>
            </div>
        </footer>
    )
}

export default Footer