import Tickets from '../components/Tickets'
import Suites from '../components/Suites'
import LuxurySuites from '../components/LuxurySuites'
import ExclusiveClubs from '../components/ExclusiveClubs'
import Header from '../components/Header'
import Contact from '../components/Contact'
import Layout from '../components/Layout'
import Nav from '../components/Nav'

export default function Home() {
  return (
    <div>
      <Nav />
      <Header />
      <Suites />
      <Tickets />
      <LuxurySuites />
      <ExclusiveClubs />
      <Contact />
    </div>
  )
}
