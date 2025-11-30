import { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import '../styles/EventList.css';
import eventsData from '../../../data/events.json'; // Import the JSON file

function EventList() {
  const [selectedCategory, setSelectedCategory] = useState('All'); // State for category filter

  // Filter events based on selected category
  const filteredEvents = eventsData.events.filter((event) => {
    return selectedCategory === 'All' || event.category === selectedCategory;
  });

  return (
    <>
      <div className='EventListContainer'>
        <div className='EventFilterGroup'>
          <div className='EventFilter'>
            <label>Category</label>
            <br />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)} // Update category filter
            >
              <option value="All">All</option>
              <option value="Seniors">Seniors</option>
              <option value="Juniors">Juniors</option>
              <option value="Cadets">Cadets</option>
            </select>
            <div>
              <p>Latest Competition</p>
              <p>{eventsData.events[0]?.eventName || 'No event available'}</p>
              <p>Date {eventsData.events[0]?.dateFrom || 'N/A'}</p>
            </div>
          </div>
          <div className='EventFilter'>
            <label>Year</label>
            <br />
            <select>
              <option value="2025">2025</option>
              <option value="2024">2024</option>
              <option value="2023">2023</option>
            </select>
            <div>
              <p>Next Competition</p>
              <p>{eventsData.events[0]?.eventName || 'No event available'}</p>
              <p>Date {eventsData.events[0]?.dateFrom || 'N/A'}</p>
            </div>
          </div>
        </div>

        <div className='EventContainer'>
          <table className='EventTable'>
            <thead>
              <tr>
                <th>Event Name</th>
                <th>Location</th>
                <th>Date From</th>
                <th>Date To</th>
                <th>Category</th>
              </tr>
            </thead>
            <tbody>
              {filteredEvents.length > 0 ? (
                filteredEvents.map((event, index) => (
                  <tr key={index}>
                    <td>
                      <Link to={`/event/${event.id}`} className="EventLink">
                        {event.eventName}
                      </Link>
                    </td>
                    <td>{event.location}</td>
                    <td>{event.dateFrom}</td>
                    <td>{event.dateTo}</td>
                    <td>{event.category}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5">No events available for {selectedCategory}</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default EventList;