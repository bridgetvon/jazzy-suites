import Image from 'next/image'


export default function Buffet() {
  return (
    <div className='relative'>
    <Image 
    src='/../public/images/buffet.jpg'
    alt='Buffet in the Eide Bailly suite'
    width={950}
    height={450}
    layout='intrinsic'
    />
    </div>
  )
}
