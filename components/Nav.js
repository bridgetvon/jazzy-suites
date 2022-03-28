import Link from 'next/link'
import navStyles from '../styles/Nav.module.css'
import { useState } from 'react'
import Image from 'next/image'

export default function Nav() {
    const [open, setOpen] = useState(false)
    return (
        <nav className='flex bg-black items-center flex-wrap inline'>
            <MobileNav open={open} setOpen={setOpen} />
            {/* <div className="flex lg:inline-flex lg:w-auto w-full px-3 py-2"> */}

            {/* </div> */}
            <div className="w-9/12 flex justify-end items-center">
                <div className="z-50 flex relative w-8 h-8 flex-col justify-between items-center md:hidden" onClick={() => {
                    setOpen(!open)
                }}>
                    {/* hamburger button */}
                    <span className={`h-1 w-full bg-white rounded-lg transform transition duration-300 ease-in-out ${open ? "rotate-45 translate-y-3.5" : ""}`} />
                    <span className={`h-1 w-full bg-white rounded-lg transition-all duration-300 ease-in-out ${open ? "w-0" : "w-full"}`} />
                    <span className={`h-1 w-full bg-white rounded-lg transform transition duration-300 ease-in-out ${open ? "-rotate-45 -translate-y-3.5" : ""}`} />
                </div>
                <div className="hidden w-full lg:inline-flex lg:flex-grow lg:w-auto text-yellow ">
                    <div className='lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto'>
                        <Image
                            src='/../public/images/jazzlogo.png'
                            alt='jazz logo'
                            width={50}
                            height={50}
                        />
                        <span className='text-white pl-3 tracking-wide flex-start'>UTAH JAZZ PREMIUM SEATING</span>
                        <Link href='/'>
                            <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 items-center justify-center hover:bg-green-600 hover:text-white '>
                                Luxury Suites
                            </a>
                        </Link>
                        <Link href='/'>
                            <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 items-center justify-center hover:bg-green-600 hover:text-white'>
                                Exclusive Clubs
                            </a>
                        </Link>
                        <Link href='/'>
                            <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 items-center justify-center hover:bg-green-600 hover:text-white'>
                                Contact us
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>

    )
}

function MobileNav({ open, setOpen }) {
    return (
        <div className={`absolute top-0 left-0 h-screen w-screen bg-white transform ${open ? "-translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out filter drop-shadow-md `}>
            <div className="flex items-center justify-center filter drop-shadow-md bg-white h-20"> {/*logo container*/}
                {/* <a className="text-xl font-semibold" href="/">LOGO</a> */}
            </div>
            <div className="flex flex-col ml-4">
                <a className="text-xl font-medium my-4 text-yellow" href="/about" onClick={() => setTimeout(() => { setOpen(!open) }, 100)}>
                    About
                </a>
                <a className="text-xl font-normal my-4" href="/contact" onClick={() => setTimeout(() => { setOpen(!open) }, 100)}>
                    Contact
                </a>
            </div>
        </div>
    )
}

{/* <nav className='flex p-15 bg-black text-yellow justify-end content-center'>
<ul>
    <li className={navStyles.icon}>
       <img src='https://www.nba.com/resources/static/team/v2/jazz/JAZ1718_SeasonTickets_JNoteWhite.png'></img>
    </li>
    <li className='text-white justify-start'>UTAH JAZZ PREMIUM SEATING</li>
    <li>
        <a href='#luxury-suites'>Luxury Suites</a>
    </li>
    <li>
       <a href='#exclusive-clubs'>Exclusive Clubs</a>
    </li>
    <li>
       <a href='#contact-us'>Contact Us</a>
    </li>
</ul>
</nav> */}