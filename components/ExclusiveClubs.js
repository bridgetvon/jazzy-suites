import Image from 'next/image'

export default function ExclusiveClubs() {
    return (
        <div className='main p-10 bg-black'>
            <h1 className='text-yellow mb-5 font-bold text-xl'>EXCLUSIVE CLUBS</h1>
            <div className="flex-wrap gap-4 lg:columns-2">
                <div className="flex-wrap relative">
                    <Image
                        src='/toyota-club.jpg'
                        alt='Toyota Club'
                        width={650}
                        height={350}
                        layout='responsive'

                    />
                    <div className='inline-block text-white p-35'>TOYOTA CLUB</div>
                </div>
                <div>
                    <Image
                        src='/WFC-insurance-club.jpg'
                        alt='WFC insurance club overlooking the courts'
                        width={650}
                        height={350}
                        layout='responsive'

                    />
                    <div className='inline-block text-white'>WFC INSURANCE CLUB</div>
                </div>
                <div>
                    <Image
                        src='/courtside-club.jpg'
                        alt='The court side club'
                        width={650}
                        height={350}
                        layout='responsive'

                    />
                    <div className='inline-block text-white'>THE COURTSIDE CLUB</div>

                </div>
                <div>
                    <Image
                        src='/eide-bailly-club.jpg'
                        alt='The eide bailly club dining hall'
                        width={650}
                        height={350}
                        layout='responsive'

                    />
                    <div className='inline-block text-white'>EIDE BAILLY CLUB</div>

                </div>
                <div>
                    <Image
                        src='/lexus-club.jpg'
                        alt='The Lexus Club dining hall'
                        width={650}
                        height={350}
                        layout='responsive'

                    />
                    <div className='inline-block text-white'>LEXUS CLUB</div>

                </div>
                <div>
                    <Image
                        src='/legends-club.jpg'
                        alt='Legends club'
                        width={650}
                        height={350}
                        layout='responsive'

                    />
                    <div className='inline-block text-white'>LEGENDS CLUB PRESENTED BY LEGACY POWER</div>

                </div>
            </div>
        </div>
    )
}
