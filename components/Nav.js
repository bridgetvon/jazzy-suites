import Link from 'next/link'
import { useState } from 'react'
import Image from 'next/image'

export default function Nav() {
    const [open, setOpen] = useState(false)
    return (
        <nav className='flex bg-black items-center flex-wrap inline border-2 text-sm'>
            <MobileNav open={open} setOpen={setOpen} />
            {/* <div className="flex lg:inline-flex lg:w-auto w-full px-3 py-2"> */}

            {/* </div> */}
            <div className="w-11/12 p-3 flex justify-end items-center">
                <div className="z-50 flex relative w-8 h-8 flex-col justify-between items-center lg:hidden" onClick={() => {
                    setOpen(!open)
                }}>
                    {/* hamburger button */}
                    <span className={`h-1 w-full bg-white rounded-lg transform transition duration-300 ease-in-out ${open ? "rotate-45 translate-y-3.5" : ""}`} />
                    <span className={`h-1 w-full bg-white rounded-lg transition-all duration-300 ease-in-out ${open ? "w-0" : "w-full"}`} />
                    <span className={`h-1 w-full bg-white rounded-lg transform transition duration-300 ease-in-out ${open ? "-rotate-45 -translate-y-3.5" : ""}`} />
                </div>
                <div className="hidden w-full lg:inline-flex lg:flex-grow lg:w-auto text-yellow">
                    <div className='lg:inline-flex lg:flex-row lg:ml-48 lg:w-auto w-full lg:items-center items-start flex flex-col lg:h-auto border-b-2 border-white'>
                        <Image
                            src='/jazzlogo.png'
                            alt='jazz logo'
                            width={50}
                            height={50}
                        />
                        <span className='text-white pr-20 pl-5 mr-40 tracking-wide justify-start'>UTAH JAZZ PREMIUM SEATING</span>
                        <Link href='/'>
                            <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 justify-end hover:text-white '>
                                Luxury Suites
                            </a>
                        </Link>
                        <Link href='/'>
                            <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 justify-end hover:text-white'>
                                Exclusive Clubs
                            </a>
                        </Link>
                        <Link href='/'>
                            <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 justify-end hover:text-white'>
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
        <div className={`absolute top-12 left-0 h-screen w-screen bg-black transform ${open ? "-translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out filter drop-shadow-md `}>
            <div className="flex flex-col items-center text-white">
                <a className="text-xl font-medium my-4" href="/about" onClick={() => setTimeout(() => { setOpen(!open) }, 100)}>
                    Luxury Suites
                </a>
                <a className="text-xl font-normal my-4" href="/contact" onClick={() => setTimeout(() => { setOpen(!open) }, 100)}>
                    Exclusive Clubs
                </a>
                <a className="text-xl font-normal my-4" href="/contact" onClick={() => setTimeout(() => { setOpen(!open) }, 100)}>
                    Contact
                </a>
            </div>
        </div>
    )
}

