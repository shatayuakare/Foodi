import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header className="navbar p-0 pt-12">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li><Link to={'/'}>Home</Link></li>
                        <li>
                            Menu
                            <ul className="p-2">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </li>
                        <li>
                            Services
                            <ul className="p-2">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </li>
                        <li><Link to={'/offer'}>Offer</Link></li>
                    </ul>
                </div>
                <Link to={'/'} className="">
                    <img className='h-9' src="https://food-website-blush-one.vercel.app/logo.png" alt="" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-xl flex gap-6">
                    <li><Link to={'/'}>Home</Link></li>
                    <li>
                        <details>
                            <summary>Menu</summary>
                            <ul className="p-2">
                                <li><a>Submenu 1</a></li>
                            </ul>
                        </details>
                    </li>
                    <li>
                        <details>
                            <summary>Services</summary>
                            <ul className="p-2">
                                <li><a>Submenu 1</a></li>
                            </ul>
                        </details>
                    </li>
                    <li>
                        <Link to={'/'}>Offer</Link>
                    </li>
                </ul>
            </div>
            <div className="navbar-end gap-3">
                <button className='btn btn-ghost hover:bg-transparent btn-circle'>
                    <i className='bx bx-search text-[1.6rem]' ></i>
                </button>
                <button className='btn btn-ghost btn-circle hover:bg-transparent'>
                    <i className='bx bx-shopping-bag text-[1.6rem]'></i>
                </button>
                <button className="btn bg-[#38DB4B] hover:bg-[#34e248] text-white rounded-full text-lg px-6">
                    <i className='bx bx-phone-call text-2xl'></i>
                    Contact
                </button>
            </div>
        </header>
    )
}

export default Header