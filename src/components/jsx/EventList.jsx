import '../styles/EventList.css';
import eventsData from '../../../data/events.json'; // Import the JSON file
import { useState } from 'react';

function EventList() {
  const [selectedCategory, setSelectedCategory] = useState('Seniors'); // Default category

  // Get the filtered data based on the selected category
  const filteredEvents = eventsData[selectedCategory] || [];

  return (
    <>
      <div className='EventListContainer'>
        <div className='EventFilterGroup'>
          <div className='EventFilter'>
            <label>Category</label>
            <br />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)} // Update state on selection
            >
              <option value="Select Category">Select Category</option>
              <option value="Seniors">Seniors</option>
              <option value="Juniors">Juniors</option>
              <option value="Cadets">Cadets</option>
            </select>
            <div>
              <p>Latest Competition</p>
              <p>{filteredEvents[0]?.event || 'No event available'}</p>
              <p>Date {filteredEvents[0]?.date || 'N/A'}</p>
            </div>
          </div>
          <div className='EventFilter'>
            <label>Year</label>
            <br />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)} // Update state on selection
            >
              <option value="Select Year">Select Year</option>
              <option value="2025">2025</option>
              <option value="2024">2024</option>
              <option value="2023">2023</option>
            </select>
            <div>
              <p>Next Competition</p>
              <p>{filteredEvents[0]?.event || 'No event available'}</p>
              <p>Date {filteredEvents[0]?.date || 'N/A'}</p>
            </div>
          </div>
        </div>

        <div className='EventContainer'>
          <table className='EventTable'>
            <thead>
              <tr>
                <th>Date</th>
                <th>Event</th>
                <th>Category</th>
                <th>Time Ago</th>
              </tr>
            </thead>
            <tbody>
              {filteredEvents.length > 0 ? (
                filteredEvents.map((event, index) => (
                  <tr key={index}>
                    <td>{event.date}</td>
                    <td>{event.event}</td>
                    <td>{event.category}</td>
                    <td>{event.time}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4">No events available for {selectedCategory}</td>
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