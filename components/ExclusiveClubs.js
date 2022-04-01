import Image from 'next/image'

export default function ExclusiveClubs() {
    return (
        <div className='main p-10 bg-black' id='exclusive-clubs'>
            <h1 className='text-yellow mb-5 font-bold text-xl'>EXCLUSIVE CLUBS</h1>
            <div className="flex-wrap gap-4 grid lg:grid-cols-2 md:cols-2">
                <div className="relative brightness-50">
                    <Image
                        src='/toyota-club.jpg'
                        alt='Toyota Club'
                        width={650}
                        height={350}
                        layout='responsive'

                    />
                    <div className='text-white absolute inset-x-20 top-20 lg:inset-x-48 lg:top-24 font-bold lg:text-lg'>TOYOTA CLUB</div>
                </div>
                <div className='relative brightness-50'>
                    <Image
                        src='/WFC-insurance-club.jpg'
                        alt='WFC insurance club overlooking the courts'
                        width={650}
                        height={350}
                        layout='responsive'

                    />
                    <div className='text-white absolute inset-x-20 top-20 lg:inset-x-44 lg:top-24 font-bold lg:text-lg'>WFC INSURANCE CLUB</div>
                </div>
                <div className='relative brightness-50'>
                    <Image
                        src='/courtside-club.jpg'
                        alt='The court side club'
                        width={650}
                        height={350}
                        layout='responsive'

                    />
                    <div className='text-white absolute inset-x-20 top-20 lg:inset-x-44 lg:top-24 font-bold lg:text-lg'>THE COURTSIDE CLUB</div>

                </div>
                <div className='relative brightness-50'>
                    <Image
                        src='/eide-bailly-club.jpg'
                        alt='The eide bailly club dining hall'
                        width={650}
                        height={350}
                        layout='responsive'

                    />
                    <div className='text-white absolute inset-x-20 top-20 lg:inset-x-48 lg:top-24 font-bold lg:text-lg'>EIDE BAILLY CLUB</div>
                </div>
                <div className='relative brightness-50'>
                    <Image
                        src='/lexus-club.jpg'
                        alt='The Lexus Club dining hall'
                        width={650}
                        height={350}
                        layout='responsive'

                    />
                    <div className='text-white absolute inset-x-20 top-20 lg:inset-x-52 lg:top-24 font-bold lg:text-lg'>LEXUS CLUB</div>

                </div>
                <div className='relative brightness-50'>
                    <Image
                        src='/legends-club.jpg'
                        alt='Legends club'
                        width={650}
                        height={350}
                        layout='responsive'

                    />
                    <div className='text-white absolute inset-x-20 top-20 lg:inset-x-32 lg:top-24 font-bold lg:text-lg'>LEGENDS CLUB PRESENTED BY LEGACY POWER</div>

                </div>
            </div>
        </div>
    )
}
