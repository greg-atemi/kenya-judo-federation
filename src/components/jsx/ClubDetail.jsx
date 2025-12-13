import { useParams } from 'react-router-dom'; // Import useParams to access route parameters
import '../styles/ClubDetail.css';
import HeroImage from './HeroImage.jsx';
import clubData from '../../../data/clubs.json'; // Import the JSON file

function ClubDetail() {
  // const clubData = clubsData[0]; // For demonstration, using the first club's data

  const { id } = useParams(); // Get the event ID from the URL
  const club = clubData.find((club) => club.id === id); // Find the event by ID

  if (!club) {
    return <p>404 not found</p>; // Handle case where event is not found
  }

  return (
    <>
      <HeroImage/>
      <div className='clubDetailContainer'>
        <div className='clubDetailContainerContent'>
          <h2> About Us </h2>
          <p> {club.aboutUs} </p>
        </div>

        <div className='clubDetailContainerContent'>
          <h2> Our History </h2>
          <p> {club.ourHistory} </p>
        </div>

        <div className='contactUs'>
          <div>
            <h3>Contact Us</h3>
            <p>Email: {club.email}</p>
            <p>Phone: {club.phone}</p>
            <p>Location: {club.location}</p>
          </div>
          <button>Join Us</button>
        </div>
      </div>
    </>
  )
}

export default ClubDetail;