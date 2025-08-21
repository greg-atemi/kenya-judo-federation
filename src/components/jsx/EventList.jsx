import '../styles/EventList.css';

function EventList() {

  return (
    <>
      <div>
      <div className='EventFilterGroup'>
          <div className='EventFilter'>
            <p>Region</p>
            <select>
              <option value="select">Select Event</option>
              <option value="nairobi">Nairobi</option>
              <option value="central">Central</option>
              <option value="eastern">Eastern</option>
            </select>
          </div>

          <div className='EventFilter'>
            <p>Region</p>
            <select>
              <option value="select">Select Event</option>
              <option value="nairobi">Nairobi</option>
              <option value="central">Central</option>
              <option value="eastern">Eastern</option>
            </select>
          </div>
        </div>
      </div>
    </>
  )
}

export default EventList