import Tickets from '../components/Tickets'
import Info from '../components/Info'
import Buffet from '../components/Buffet'
import EideHeader from '../components/EideHeader'

export default function EideBailly() {
    return (
        <div>
            <EideHeader />
            <Info />
            <Buffet />
            <Tickets />
        </div>
    )
}
