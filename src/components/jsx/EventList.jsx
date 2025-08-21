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
            <div>
              <p>Latest Competition</p>
              <p>Kiambu National Championships 2025</p>
              <p>Date 23/08/2025</p>
            </div>
          </div>

          <div className='EventFilter'>
            <p>Year</p>
            <select>
              <option value="select">Select Year</option>
              <option value="2025">2025</option>
              <option value="2024">2024</option>
              <option value="2023">2023</option>
            </select>
            <div>
              <p>Next Competition</p>
              <p>Kiambu National Championships 2025</p>
              <p>Date 23/08/2025</p>
            </div>
          </div>
        </div>

        <div className='EventContainer'>
          <div>
            <span>Kiambu National Championships 2025</span>
            <span>Date: 23/08/2025</span>
            <span>Location: Kiambu</span>
            <span>Description: Annual athletics competition featuring top athletes from the region.</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default EventList