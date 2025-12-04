import { useParams } from 'react-router-dom'; // Import useParams to access route parameters
import '../styles/EventDetail.css';
import eventsData from '../../../data/events.json'; // Import the JSON file

function EventDetail() {
  const { id } = useParams(); // Get the event ID from the URL
  const event = eventsData.events.find((event) => event.id === id); // Find the event by ID

  if (!event) {
    return <p>404 not found</p>; // Handle case where event is not found
  }

  return (
    <>
      <div className='EventDetailContainer'>
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
            <p>From: 05 August 2025</p>
            <p>To: 10 August 2025</p>
          </div>
          <div>
            <h3>Numbers</h3>
            <p>Clubs: 12</p>
            <p>Judokas: 125</p>
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
              {event.clubRanking.map((club, index) => (
                <tr key={index}>
                  <td>{club.rank}</td>
                  <td>{club.club}</td>
                  <td style={{ textAlign: 'center' }}>{club.gold}</td>
                  <td style={{ textAlign: 'center' }}>{club.silver}</td>
                  <td style={{ textAlign: 'center' }}>{club.bronze}</td>
                </tr>
              ))}
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