import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Fans from './components/jsx/Fans.jsx'
import KJFHistory from './components/jsx/KJFHistory.jsx'
import WhoWeAre from './components/jsx/WhoWeAre.jsx'
import OurLeadership from './components/jsx/OurLeadership.jsx'
import JudoHistory from './components/jsx/JudoHistory.jsx'
import Navbar from './components/jsx/Navbar.jsx'
import Footer from './components/jsx/Footer.jsx'
import Events from './components/jsx/Events.jsx'
import Ranking from './components/jsx/Ranking.jsx'
import RankingPage from './components/jsx/RankingPage.jsx'
import EventsList from './components/jsx/EventList.jsx'
import EventDetail from './components/jsx/EventDetail.jsx'
import ClubsList from './components/jsx/ClubsList.jsx'
import ClubDetail from './components/jsx/ClubDetail.jsx'
import ContactUs from './components/jsx/ContactUs.jsx'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          {/* Home page route */}
          <Route path="/" element={<Events />} />
          
          {/* About routes */}
          <Route path="/who-we-are" element={<WhoWeAre />} />
          <Route path="/leadership" element={<OurLeadership />} />
          <Route path="/kjf-history" element={<KJFHistory />} />
          <Route path="/judo-history" element={<JudoHistory />} />
          
          {/* Events routes */}
          <Route path="/events" element={<EventsList />} />
          <Route path="/events/:id" element={<EventDetail />} />
          
          {/* Clubs routes */}
          <Route path="/clubs" element={<ClubsList />} />
          <Route path="/clubs/:id" element={<ClubDetail />} />
          
          {/* Ranking routes */}
          <Route path="/ranking" element={<Ranking />} />
          <Route path="/ranking-page" element={<RankingPage />} />
          
          {/* Other routes */}
          <Route path="/fans" element={<Fans />} />
          <Route path="/contact" element={<ContactUs />} />
          
          {/* Catch-all route for 404 - optional */}
          <Route path="*" element={<div>Page Not Found</div>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App