import { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
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

            <tbody style={{ position: "relative" }}>
              <AnimatePresence>
                {filteredClubs.length > 0 ? (
                  filteredClubs.map((club, index) => (
                    <motion.tr
                      key={club.id || index}
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.25 }}
                      layout
                    >
                      <td>{club.clubName}</td>
                      <td>{club.region}</td>
                      <td>{club.numberOfJudokas}</td>
                    </motion.tr>
                  ))
                ) : (
                  <motion.tr
                    key="empty-row"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    layout
                  >
                    <td colSpan="3">
                      No clubs available for{" "}
                      {selectedRegion.charAt(0).toUpperCase() + selectedRegion.slice(1)}{" "}
                      region
                    </td>
                  </motion.tr>
                )}
              </AnimatePresence>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default ClubsList;