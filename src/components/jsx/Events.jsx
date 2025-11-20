import HeroImage from './HeroImage.jsx';
import '../styles/Events.css';
import eventsData from '../../../data/events.json'; // Import the JSON file

function Events() {

  return (
    <>
      <HeroImage/>
      <section className='Section'>
        <h1>Upcoming Events</h1>
        <div className='EventListGroup'>
          <div>
            <p className='EventTitle'>SENIORS</p>
            <div className='EventList'>
              <div className='Event'>
                <div className='EventDate'>
                  <p>19 JAN</p>
                </div>
                <div className='EventName'>
                  <p>Kiambu Championship</p>
                </div>
              </div>
              <div className='Event'>
                <div className='EventDate'>
                  <p>19 JAN</p>
                </div>
                <div className='EventName'>
                  <p>Kiambu Championship</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <p className='EventTitle'>SENIORS</p>
            <div className='EventList'>
              <div className='Event'>
                <div className='EventDate'>
                  <p>19 JAN</p>
                </div>
                <div className='EventName'>
                  <p>Kiambu Championship</p>
                </div>
              </div>
              <div className='Event'>
                <div className='EventDate'>
                  <p>19 JAN</p>
                </div>
                <div className='EventName'>
                  <p>Kiambu Championship</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <p className='EventTitle'>SENIORS</p>
            <div className='EventList'>
              <div className='Event'>
                <div className='EventDate'>
                  <p>19 JAN</p>
                </div>
                <div className='EventName'>
                  <p>Kiambu Championship</p>
                </div>
              </div>
              <div className='Event'>
                <div className='EventDate'>
                  <p>19 JAN</p>
                </div>
                <div className='EventName'>
                  <p>Kiambu Championship</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  )
}

export default Events;