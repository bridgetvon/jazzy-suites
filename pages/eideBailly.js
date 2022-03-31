import Nav from '../components/Nav'
import Contact from '../components/Contact'
import Tickets from '../components/Tickets'
import Image from 'next/image'
import Info from '../components/Info'
import Buffet from '../components/Buffet'
import EideHeader from '../components/EideHeader'

export default function EideBailly() {
    return (
        <div>
            <Nav />
           <EideHeader />
            <Info />
            <Buffet />
            <Tickets />
            <Contact />
        </div>
    )
}
