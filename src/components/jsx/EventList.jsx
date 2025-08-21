import '../styles/EventList.css';

function EventList() {

  return (
    <>
      <div className='EventListContainer'>
        <div className='EventFilterGroup'>
          <div className='EventFilter'>
            <label>Region</label>
            <br/>
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
            <label>Year</label>
            <br/>
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
              <tr>
                <td>16-19 Jan</td>
                <td>Kiambu National Championships 2025</td>
                <td>Junior</td>
                <td>109 days ago</td>
              </tr>
              <tr>
                <td>16-19 Jan</td>
                <td>Kiambu National Championships 2025</td>
                <td>Junior</td>
                <td>109 days ago</td>
              </tr>
              <tr>
                <td>16-19 Jan</td>
                <td>Kiambu National Championships 2025</td>
                <td>Junior</td>
                <td>109 days ago</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default EventList