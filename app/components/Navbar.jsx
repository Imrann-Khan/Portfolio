'use client'
import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'

const NAV_LINKS = [
    { href: '#top', label: 'Home' },
    { href: '#about', label: 'About me' },
    { href: '#services', label: 'My Expertises' },
    { href: '#work', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
]

const Navbar = () => {
    const sideMenuRef = useRef()
    const [isScroll, setIsScroll] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)

    const openMenu = () => {
        setMenuOpen(true)
    }

    const closeMenu = () => {
        setMenuOpen(false)
    }

    useEffect(() => {
        const handleScroll = () => {
            setIsScroll(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    useEffect(() => {
        if (sideMenuRef.current) {
            sideMenuRef.current.style.transform = menuOpen
                ? 'translateX(0)'
                : 'translateX(16rem)'
        }
    }, [menuOpen])

    return (
        <>
            <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] pointer-events-none'>
                <Image src={assets.header_bg_color} alt='' className='w-full select-none' draggable={false} />
            </div>
            <nav
                className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 transition-all duration-300 ${
                    isScroll
                        ? 'bg-white bg-opacity-70 backdrop-blur-lg shadow-md'
                        : ''
                }`}
            >
                <a href='#top' className='flex items-center'>
                    <Image src={assets.logo} alt='Logo' className='w-20 cursor-pointer mr-8' priority />
                </a>

                <ul className='hidden md:flex items-center gap-6 lg:gap-10 rounded-full px-12 py-3 bg-white shadow-sm bg-opacity-60 backdrop-blur-md'>
                    {NAV_LINKS.map(link => (
                        <li key={link.href}>
                            <a className='font-Ovo text-gray-700 hover:text-rose-500 transition-colors duration-200' href={link.href}>
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>

                <div className='flex items-center gap-4'>
                    <a
                        href='#contact'
                        className='hidden lg:flex items-center gap-3 px-8 py-2.5 border border-gray-400 rounded-full ml-4 font-Ovo text-gray-700 hover:bg-rose-50 transition'
                    >
                        Contact
                        <Image src={assets.arrow_icon} alt='' className='w-3' />
                    </a>
                    <button
                        className='block md:hidden ml-3 p-2 rounded hover:bg-rose-100 transition'
                        onClick={openMenu}
                        aria-label='Open menu'
                    >
                        <Image src={assets.menu_black} alt='Open menu' className='w-6' />
                    </button>
                </div>

                {/* Mobile Side Menu */}
                <ul
                    ref={sideMenuRef}
                    className={`flex md:hidden flex-col gap-6 py-20 px-10 fixed right-0 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 shadow-lg transition-transform duration-500 ${
                        menuOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
                    style={{ transform: menuOpen ? 'translateX(0)' : 'translateX(16rem)' }}
                >
                    <button
                        className='absolute right-6 top-6 p-2 rounded hover:bg-rose-100 transition'
                        onClick={closeMenu}
                        aria-label='Close menu'
                    >
                        <Image src={assets.close_black} alt='Close menu' className='w-5 cursor-pointer' />
                    </button>
                    {NAV_LINKS.map(link => (
                        <li key={link.href}>
                            <a
                                className='font-Ovo text-gray-700 hover:text-rose-500 transition-colors duration-200'
                                onClick={closeMenu}
                                href={link.href}
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>
                {/* Overlay for mobile menu */}
                {menuOpen && (
                    <div
                        className='fixed inset-0 bg-black bg-opacity-30 z-40 md:hidden'
                        onClick={closeMenu}
                        aria-label='Close menu overlay'
                    />
                )}
            </nav>
        </>
    )
}

export default Navbar
