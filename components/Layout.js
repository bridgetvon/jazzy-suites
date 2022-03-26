import Nav from './Nav'
import Header from './Header'
import Contact from './Contact'

export default function Layout() {
  return (
    <>
    <Nav />
    <div>
        <main>
            <Header />
            <Contact />
        </main>
    </div>
    </>
  )
}
