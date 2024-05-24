import Link from 'next/link'
import React from 'react'
import NavLink from './NavLink'

const navLinks = [
    {
        title:"About",
        path: "#about",
    },
    {
        title:"Projects",
        path: "#pro",
    },
    {
        title:"Education",
        path: "#edu",
    },
    {
        title:"Contact",
        path: "#con",
    },
]
const Navbar = () => {
  return (
    <nav className='fixed mx-auto border border-[#33353f] top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-90'>
        <div className='container flex flex-wrap items-center justify-between mx-auto px-4 py-2 lg:py-4'>
            <div className='menu hidden md:block md:w-auto' id="navbar">
                <ul className='flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0'>
                    {navLinks.map((link, index) => (
                        <li key={index}>
                            <NavLink href={link.path} title={link.title} />
                        </li>
                    ))}
                </ul>
            </div>
            
            <Link href={"/"} className='text-2xl md:text-5xl text-white font-semibold'>
                Mahak Garg
            </Link>
            
            <Link href={"/"} className='text-5xl text-white font-semibold'>
                Mahak Garg
            </Link>
        </div>
    </nav>
  );
};

export default Navbar
