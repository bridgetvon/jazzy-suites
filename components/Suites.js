import Image from 'next/image'


export default function Suites() {
    return (
        <div id="mainDiv" className='bg-white p-15 flex'>
            <div className="text-white bg-black ml-20 mr-4 my-5">
                <div className="max-w-sm overflow-hidden shadow-lg">
                    <div>
                        <Image
                            src='/../public/images/luxury-suites.jpg'
                            alt='Luxury suite picture'
                            width={500}
                            height={220}
                        />
                        <div className="font-bold text-xl text-yellow m-2">Luxury Suites</div>
                        <p className="text-gray-700 text-base p-3">
                            Your suite can enhance your corporate profile and give you an advantage over your competitors. It offers the chance to communicate your message in a luxurious setting while making entertaining as easy as it is elegant. Take advantage of the most unique and exciting way to entertain in Utah by becoming a Vivint Arena luxury suite holder.
                        </p>
                        <button className='text-yellow p-5'>Learn More</button>
                    </div>
                </div>
                </div>
                <div className='text-white bg-black mr-20 my-5'>
                <div className="max-w-sm overflow-hidden shadow-lg">
                    <div>
                        <Image
                            src='/../public/images/exclusive-clubs.jpg'
                            alt='Luxury suite picture'
                            width={500}
                            height={220}
                        />
                        <div className="font-bold text-xl text-yellow m-2">Exclusive Clubs</div>
                        <p className="text-gray-700 text-base p-3">
                            Your suite can enhance your corporate profile and give you an advantage over your competitors. It offers the chance to communicate your message in a luxurious setting while making entertaining as easy as it is elegant. Take advantage of the most unique and exciting way to entertain in Utah by becoming a Vivint Arena luxury suite holder.
                        </p>
                        <button className='text-yellow p-5'>Learn More</button>
                    </div>
                </div>
            </div>
        </div>

    )
}

{/* <div id="mainDiv" className='bg-white p-15'>
<div className="grid grid-cols-2 gap-1 text-white bg-black m-20">
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
            <div className="font-bold text-xl text-yellow mb-2">Exclusive Clubs</div>
            <p className="text-gray-700 text-base">
                Your suite can enhance your corporate profile and give you an advantage over your competitors. It offers the chance to communicate your message in a luxurious setting while making entertaining as easy as it is elegant. Take advantage of the most unique and exciting way to entertain in Utah by becoming a Vivint Arena luxury suite holder.
            </p>
            <button className='text-yellow'>Learn More</button>
        </div>
    </div>
</div>
</div> */}
