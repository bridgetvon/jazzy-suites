import Nav from './Nav'
import Header from './Header'
import Contact from './Contact'
import Tickets from './Tickets'
import Suites from './Suites'

export default function Layout() {
  return (
    <>
    <Nav />
    <div>
        <main>
            <Header />
            <Suites />
            <Tickets />
            <Contact />
        </main>
    </div>
    </>
  )
}
