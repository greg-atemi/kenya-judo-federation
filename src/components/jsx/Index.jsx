import HeroImage from './HeroImage.jsx';
import '../styles/Index.css';
import eventsData from '../../../data/events.json'; // Import the JSON file

function Index() {
  return (
    <>
      <HeroImage />
      <section className='Section'>
        <h1>Upcoming Events</h1>
        <div className='EventListGroup'>
          {/* Seniors Section */}
          <div>
            <p className='EventTitle'>SENIORS</p>
            <div className='EventList'>
              <div className='Event'>
                <div className='EventDate'>
                  <p>{eventsData.Seniors[0].date}</p>
                </div>
                <div className='EventName'>
                  <p>{eventsData.Seniors[0].event}</p>
                </div>
              </div>
              <div className='Event'>
                <div className='EventDate'>
                  <p>{eventsData.Seniors[1].date}</p>
                </div>
                <div className='EventName'>
                  <p>{eventsData.Seniors[1].event}</p>
                </div>
              </div>
              <div className='Event'>
                <div className='EventDate'>
                  <p>{eventsData.Seniors[2].date}</p>
                </div>
                <div className='EventName'>
                  <p>{eventsData.Seniors[2].event}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Juniors Section */}
          <div>
            <p className='EventTitle'>JUNIORS</p>
            <div className='EventList'>
              <div className='Event'>
                <div className='EventDate'>
                  <p>{eventsData.Juniors[0].date}</p>
                </div>
                <div className='EventName'>
                  <p>{eventsData.Juniors[0].event}</p>
                </div>
              </div>
              <div className='Event'>
                <div className='EventDate'>
                  <p>{eventsData.Juniors[1].date}</p>
                </div>
                <div className='EventName'>
                  <p>{eventsData.Juniors[1].event}</p>
                </div>
              </div>
              <div className='Event'>
                <div className='EventDate'>
                  <p>{eventsData.Juniors[2].date}</p>
                </div>
                <div className='EventName'>
                  <p>{eventsData.Juniors[2].event}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Cadets Section */}
          <div>
            <p className='EventTitle'>CADETS</p>
            <div className='EventList'>
              <div className='Event'>
                <div className='EventDate'>
                  <p>{eventsData.Cadets[0].date}</p>
                </div>
                <div className='EventName'>
                  <p>{eventsData.Cadets[0].event}</p>
                </div>
              </div>
              <div className='Event'>
                <div className='EventDate'>
                  <p>{eventsData.Cadets[1].date}</p>
                </div>
                <div className='EventName'>
                  <p>{eventsData.Cadets[1].event}</p>
                </div>
              </div>
              <div className='Event'>
                <div className='EventDate'>
                  <p>{eventsData.Cadets[2].date}</p>
                </div>
                <div className='EventName'>
                  <p>{eventsData.Cadets[2].event}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Index;