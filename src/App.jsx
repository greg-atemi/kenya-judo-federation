import Navbar from './components/jsx/Navbar.jsx'
import Footer from './components/jsx/Footer.jsx'
import Events from './components/jsx/Events.jsx'
import Ranking from './components/jsx/Ranking.jsx'
import HeroImage from './components/jsx/HeroImage.jsx'
import EventsList from './components/jsx/EventList.jsx'
import EventDetail from './components/jsx/EventDetail.jsx'
import ClubsList from './components/jsx/ClubsList.jsx'
import ClubDetail from './components/jsx/ClubDetail.jsx'

function App() {

  return (
    <>
      <Navbar />
      {/* <HeroImage /> */}
      {/* <Events /> */}
      {/* <Ranking /> */}
      {/* <EventsList /> */}
      {/* <EventDetail /> */}
      {/* <ClubsList/> */}
      <ClubDetail />
      <Footer />
    </>
  )
}

export default App