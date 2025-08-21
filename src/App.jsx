import Navbar from './components/jsx/Navbar.jsx'
import Footer from './components/jsx/Footer.jsx'
import Events from './components/jsx/Events.jsx'
import Ranking from './components/jsx/Ranking.jsx'
import HeroImage from './components/jsx/HeroImage.jsx'
import EventsList from './components/jsx/EventList.jsx'

function App() {

  return (
    <>
      <Navbar />
      {/* <HeroImage />
      <Events />
      <Ranking /> */}
      <EventsList />
      <Footer />
    </>
  )
}

export default App