import Image from 'next/image'


export default function Suites() {
    return (
        <div id="mainDiv" className='bg-white'>
            <div className="grid grid-cols-2 gap-8 text-white bg-black">
                <div className="max-w-sm rounded overflow-hidden shadow-lg">
                    <div className="px-6 py-4">
                        <Image
                            src='/../public/images/luxury-suites.jpg'
                            alt='Luxury suite picture'
                            width={450}
                            height={220}
                        />
                        <div className="font-bold text-xl text-yellow mb-2">Luxury Suites</div>
                        <p className="text-gray-700 text-base">
                            Your suite can enhance your corporate profile and give you an advantage over your competitors. It offers the chance to communicate your message in a luxurious setting while making entertaining as easy as it is elegant. Take advantage of the most unique and exciting way to entertain in Utah by becoming a Vivint Arena luxury suite holder.
                        </p>
                        <button className='text-yellow'>Learn More</button>
                    </div>
                </div>
                <div className="max-w-sm rounded overflow-hidden shadow-lg">
                    <div className="px-6 py-4">
                        <Image
                            src='/../public/images/exclusive-clubs.jpg'
                            alt='Luxury suite picture'
                            width={450}
                            height={220}
                        />
                        <div className="font-bold text-xl text-yellow mb-2">Luxury Suites</div>
                        <p className="text-gray-700 text-base">
                            Your suite can enhance your corporate profile and give you an advantage over your competitors. It offers the chance to communicate your message in a luxurious setting while making entertaining as easy as it is elegant. Take advantage of the most unique and exciting way to entertain in Utah by becoming a Vivint Arena luxury suite holder.
                        </p>
                        <button className='text-yellow'>Learn More</button>
                    </div>
                </div>
            </div>
        </div>

    )
}
