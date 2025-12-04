import { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import '../styles/EventList.css';
import eventsData from '../../../data/events.json'; // Import the JSON file
import { motion, AnimatePresence } from "framer-motion";

function EventList() {
  const [selectedCategory, setSelectedCategory] = useState('All'); // State for category filter

  // Filter events based on selected category
  const filteredEvents = eventsData.events.filter((event) => {
    return selectedCategory === 'All' || event.category === selectedCategory;
  });

  return (
    <>
      <div className='EventListContainer'>
        <div className='EventListContainerTop'>
          <h2>Events</h2>
          <div className='EventFilters'>
            <div>
              <label>Filter by Category</label>
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
            </div>
            <div>
              <label>Filter by Year</label>
              <br />
              <select>
                <option value="2025">2025</option>
                <option value="2024">2024</option>
              <option value="2023">2023</option>
            </select>
            </div>
          </div>
          <div className='EventsSummary'>
            <div>
              <p><strong>Latest Competition</strong></p>
              <p>{eventsData.events[0]?.eventName || 'No event available'}</p>
              <p>Date From: {eventsData.events[0]?.dateFrom + ' ' + eventsData.events[0]?.monthFrom + ' ' + eventsData.events[0]?.year || 'N/A'}</p>
              <p>Date To: {eventsData.events[0]?.dateTo + ' ' + eventsData.events[0]?.monthTo + ' ' + eventsData.events[0]?.year || 'N/A'}</p>
            </div>
            <div>
              <p><strong>Next Competition</strong></p>
              <p>{eventsData.events[1]?.eventName || 'No event available'}</p>
              <p>Date From: {eventsData.events[1]?.dateFrom + ' ' + eventsData.events[1]?.monthFrom + ' ' + eventsData.events[1]?.year || 'N/A'}</p>
              <p>Date To: {eventsData.events[1]?.dateTo + ' ' + eventsData.events[1]?.monthTo + ' ' + eventsData.events[1]?.year || 'N/A'}</p>
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
              <AnimatePresence>
                {filteredEvents.length > 0 ? (
                  filteredEvents.map((event, index) => (
                    <motion.tr
                      key={event.id || index}
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.25 }}
                      layout
                    >
                      <td>
                        <Link to={`/event/${event.id}`} className="EventLink">
                          {event.eventName}
                        </Link>
                      </td>
                      <td>{event.location}</td>
                      <td>{event.dateFrom} {event.monthFrom} {event.year}</td>
                      <td>{event.dateTo} {event.monthTo} {event.year}</td>
                      <td>{event.category}</td>
                    </motion.tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="5">No events available for {selectedCategory}</td>
                  </tr>
                )}
              </AnimatePresence>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default EventList;