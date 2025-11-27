import '../styles/EventDetail.css';
import eventData from '../../../data/event.json'; // Import the JSON file

function EventDetail() {
  // Assuming we are rendering the first event from the JSON file
  const event = eventData.events[0];

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
        <div className='EventCards'>
          <table>
            <thead>
              <tr>
                <th colSpan="2">Dates</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>FROM</td>
                <td>{event.dateFrom}</td>
              </tr>
              <tr>
                <td>TO</td>
                <td>{event.dateTo}</td>
              </tr>
            </tbody>
          </table>

          <table>
            <thead>
              <tr>
                <th colSpan="2">Numbers</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>CLUBS</td>
                <td>{event.numberOfClubs}</td>
              </tr>
              <tr>
                <td>JUDOKAS</td>
                <td>{event.numberOfJudokas}</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div className="Ranking">
          <table className="RankingTable">
            <thead>
              <tr>
                  <th className="Neutral">#</th>
                  <th className="Neutral">Club</th>
                  <th className="Gold"></th>
                  <th className="Silver"></th>
                  <th className="Bronze"></th>
              </tr>
            </thead>
            <tbody>
              {event.clubRanking.map((club, index) => (
                <tr key={index}>
                  <td>{club.rank}</td>
                  <td>{club.club}</td>
                  <td>{club.gold}</td>
                  <td>{club.silver}</td>
                  <td>{club.bronze}</td>
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