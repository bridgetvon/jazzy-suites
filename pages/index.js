import Tickets from '../components/Tickets'
import Suites from '../components/Suites'
import LuxurySuites from '../components/LuxurySuites'
import ExclusiveClubs from '../components/ExclusiveClubs'
import Header from '../components/Header'

export default function Home() {
  return (
    <div>
      <Header />
      <Suites />
      <Tickets />
      <LuxurySuites />
      <ExclusiveClubs />
    </div>
  )
}
