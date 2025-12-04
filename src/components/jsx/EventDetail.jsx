import { useParams } from 'react-router-dom'; // Import useParams to access route parameters
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import '../styles/EventDetail.css';
import eventsData from '../../../data/events.json'; // Import the JSON file
import { motion, AnimatePresence } from "framer-motion";

function EventDetail() {
  const { id } = useParams(); // Get the event ID from the URL
  const event = eventsData.events.find((event) => event.id === id); // Find the event by ID

  if (!event) {
    return <p>404 not found</p>; // Handle case where event is not found
  }

  return (
    <>
      <div className='EventDetailContainer'>
        <h2>Event Summary</h2>
        <div className='EventDetailSummary'>
          <div>
            <p>{event.eventName}</p>
            <p>{event.location}</p>
          </div>
          <div>
            <p>{event.days}</p>
            <p>Days {event['ago/ahead']}</p>
          </div>
        </div>

        <div className='EventDetailSummary'>
          <div>
            <h3>Dates</h3>
            <p>From: {event.dateFrom} {event.monthFrom} {event.year}</p>
            <p>To: {event.dateTo} {event.monthTo} {event.year}</p>
          </div>
          <div>
            <h3>Numbers</h3>
            <p>Clubs: {event.numberOfClubs}</p>
            <p>Judokas: {event.numberOfJudokas}</p>
          </div>
        </div>

        <div className="Ranking">
          <table className="RankingTable">
            <thead>
              <tr>
                  <th className="Neutral">#</th>
                  <th className="Neutral">Club</th>
                  <th style={{ backgroundColor: 'gold' }}></th>
                  <th style={{ backgroundColor: 'silver' }}></th>
                  <th style={{ backgroundColor: '#cd7f32' }}></th>
              </tr>
            </thead>
            <tbody>
              <AnimatePresence>
                {event.clubRanking.map((club, index) => (
                  <motion.tr
                    key={club.id || index}
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.25 }}
                    layout
                  >
                    <td>{club.rank}</td>
                    <td>
                      <Link to={`/club/${club.id}`} className="EventLink">
                        {club.club}
                      </Link>
                    </td>
                    <td style={{ textAlign: 'center' }}>{club.gold}</td>
                    <td style={{ textAlign: 'center' }}>{club.silver}</td>
                    <td style={{ textAlign: 'center' }}>{club.bronze}</td>
                  </motion.tr>
                ))}
              </AnimatePresence>

            </tbody>
          </table>
        </div>
        <div className="EventGallery">
          <h2>Event Gallery</h2>
          <div className="GalleryGrid">
            {event.eventGallery.map((image, index) => (
              <div key={index} className="GalleryItem-landscape">
                <img src={image.imageUrl} alt={`Gallery Item ${index + 1}`} />
              </div>
            ))}
            
            {/* <video width="640" height="360" controls>
              <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video> */}

          </div>
        </div>
      </div>
    </>
  );
}

export default EventDetail;