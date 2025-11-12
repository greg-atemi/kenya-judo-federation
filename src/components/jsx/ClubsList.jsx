import { useState } from 'react';
import '../styles/ClubsList.css';
import clubsData from '../../../data/clubs.json'; // Import the JSON file

function ClubsList() {
  const [selectedRegion, setSelectedRegion] = useState('all'); // State to track selected region

  // Filter clubs based on the selected region
  const filteredClubs = selectedRegion === 'all'
    ? clubsData
    : clubsData.filter(club => club.region.toLowerCase() === selectedRegion);

  return (
    <>
      <div className='ClubsListContainer'>
        <div className='ClubsListSearch'>
          <p>Club Search</p>
          <p>Region</p>
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
        <div className='ClubsListTable'>
          {filteredClubs.length > 0 ? (
            filteredClubs.map((club, index) => (
              <div key={index} className="ClubItem">
                <div>{club.clubName}</div>
                <div>{club.region} Region</div>
                <div>{club.numberOfJudokas} Judokas</div>
              </div>
            ))
          ) : (
            <p>No clubs for {selectedRegion.charAt(0).toUpperCase() + selectedRegion.slice(1)} region</p>
          )}
        </div>
      </div>
    </>
  );
}

export default ClubsList;