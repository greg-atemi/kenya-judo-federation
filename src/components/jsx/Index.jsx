import HeroImage from './HeroImage.jsx';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import '../styles/Index.css';
import eventsData from '../../../data/events.json'; // Import the JSON file

function Index() {
  return (
    <>
      <HeroImage />
      <section className='IndexSection'>
        <h1>Upcoming Events</h1>
        <div className='EventListGroup'>
          {/* Seniors Section */}
          <div>
            <p className='EventTitle'>SENIORS</p>
            <div className='EventList'>
              {eventsData.events
                .filter((event) => event.category === 'Seniors')
                .slice(0, 3) // Display only the first 3 events
                .map((event, index) => (
                  <div key={index} className='Event'>
                    <div className='EventDate'>
                      <p>{event.dateFrom}</p>
                      <p>{event.monthFrom}</p>
                    </div>
                    <div className='EventName'>
                      <Link to={`/event/${event.id}`} className="EventLink">
                        {event.eventName}
                      </Link>
                    </div>
                  </div>
                ))}
            </div>
          </div>

          {/* Juniors Section */}
          <div>
            <p className='EventTitle'>JUNIORS</p>
            <div className='EventList'>
              {eventsData.events
                .filter((event) => event.category === 'Juniors')
                .slice(0, 3) // Display only the first 3 events
                .map((event, index) => (
                  <div key={index} className='Event'>
                    <div className='EventDate'>
                      <p>{event.dateFrom}</p>
                      <p>{event.monthFrom}</p>
                    </div>
                    <div className='EventName'>
                      <Link to={`/event/${event.id}`} className="EventLink">
                        {event.eventName}
                      </Link>
                    </div>
                  </div>
                ))}
            </div>
          </div>

          {/* Cadets Section */}
          <div>
            <p className='EventTitle'>CADETS</p>
            <div className='EventList'>
              {eventsData.events
                .filter((event) => event.category === 'Cadets')
                .slice(0, 3) // Display only the first 3 events
                .map((event, index) => (
                  <div key={index} className='Event'>
                    <div className='EventDate'>
                      <p>{event.dateFrom}</p>
                      <p>{event.monthFrom}</p>
                    </div>
                    <div className='EventName'>
                      <Link to={`/event/${event.id}`} className="EventLink">
                        {event.eventName}
                      </Link>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Index;