import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Fans from './components/jsx/Fans.jsx'
import KJFHistory from './components/jsx/KJFHistory.jsx'
import WhoWeAre from './components/jsx/WhoWeAre.jsx'
import OurLeadership from './components/jsx/OurLeadership.jsx'
import JudoHistory from './components/jsx/JudoHistory.jsx'
import Navbar from './components/jsx/Navbar.jsx'
import Footer from './components/jsx/Footer.jsx'
import Events from './components/jsx/Index.jsx'
import Ranking from './components/jsx/Ranking.jsx'
import EventsList from './components/jsx/EventList.jsx'
import EventDetail from './components/jsx/EventDetail.jsx'
import ClubsList from './components/jsx/ClubsList.jsx'
import ClubDetail from './components/jsx/ClubDetail.jsx'
import ContactUs from './components/jsx/ContactUs.jsx'
import '../src/App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <div className="content">
          <Routes>
            <Route path="/" element={<Events />} />

            <Route path="/who-we-are" element={<WhoWeAre />} />
            <Route path="/leadership" element={<OurLeadership />} />
            <Route path="/kjf-history" element={<KJFHistory />} />
            <Route path="/judo-history" element={<JudoHistory />} />

            <Route path="/events" element={<EventsList />} />
            <Route path="/event/:id" element={<EventDetail />} />

            <Route path="/clubs" element={<ClubsList />} />
            <Route path="/club/:id" element={<ClubDetail />} />

            <Route path="/ranking" element={<Ranking />} />

            <Route path="/fans" element={<Fans />} />
            <Route path="/contactUs" element={<ContactUs />} />

            <Route path="*" element={<div>Page Not Found</div>} />
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
