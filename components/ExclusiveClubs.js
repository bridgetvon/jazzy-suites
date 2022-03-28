import Image from 'next/image'

export default function ExclusiveClubs() {
  return (
    <div className='main p-20 bg-black'>
    <h1 className='text-yellow mb-5'>Exclusive Clubs</h1>
    <div className="flex-wrap columns-2 gap-5">
        <div className="flex-wrap">
            <Image
                src='/../public/images/toyota-club.jpg'
                alt='Toyota Club'
                width={650}
                height={350}
            />
        </div>
        <div>
            <Image
                src='/../public/images/WFC-insurance-club.jpg'
                alt='WFC insurance club overlooking the courts'
                width={650}
                height={350}
            />
        </div>
        <div>
            <Image
                src='/../public/images/courtside-club.jpg'
                alt='The court side club'
                width={650}
                height={350}
            />
        </div>
        <div>
            <Image
                src='/../public/images/eide-bailly-club.jpg'
                alt='The eide bailly club dining hall'
                width={650}
                height={350}
            />
        </div>
        <div>
            <Image
                src='/../public/images/lexus-club.jpg'
                alt='The Lexus Club dining hall'
                width={650}
                height={350}
            />
        </div>
        <div>
            <Image
                src='/../public/images/legends-club.jpg'
                alt='Legends club'
                width={650}
                height={350}
            />
        </div>
    </div>
</div>
  )
}
