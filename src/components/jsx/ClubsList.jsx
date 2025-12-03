import { useState } from 'react';
import '../styles/ClubsList.css';
import clubsData from '../../../data/clubs.json'; // Import the JSON file

function ClubsList() {
  const [selectedRegion, setSelectedRegion] = useState('all'); // State to track selected region

  // Filter clubs based on the selected region
  const filteredClubs = selectedRegion === 'all'
    ? clubsData
    : clubsData.filter((club) => club.region.toLowerCase() === selectedRegion);

  return (
    <>
      <div className='ClubsListContainer'>
        <div className='ClubsListSearch'>
          <p style={{ fontSize: '1.5em', marginTop: '0' }}>Club Search</p>
          <p style={{ fontSize: '1.5em', marginTop: '0' }}>Region</p>
          <select
            value={selectedRegion}
            onChange={(e) => setSelectedRegion(e.target.value)} // Update state on selection
          >
            <option value="all">All Regions</option>
            <option value="nairobi">Nairobi</option>
            <option value="central">Central</option>
            <option value="eastern">Eastern</option>
            <option value="coastal">Coastal</option>
            <option value="rift-valley">Rift Valley</option>
          </select>
        </div>

        <div className='ClubsContainer'>
          <table className='ClubsTable'>
            <thead>
              <tr>
                <th>Club Name</th>
                <th>Region</th>
                <th>Number of Judokas</th>
              </tr>
            </thead>
            <tbody>
              {filteredClubs.length > 0 ? (
                filteredClubs.map((club, index) => (
                  <tr key={index}>
                    <td>{club.clubName}</td>
                    <td>{club.region}</td>
                    <td>{club.numberOfJudokas}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="3">No clubs available for {selectedRegion.charAt(0).toUpperCase() + selectedRegion.slice(1)} region</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default ClubsList;