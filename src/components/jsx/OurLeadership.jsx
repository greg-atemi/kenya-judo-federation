import '../styles/OurLeadership.css';
import HeroImage from './HeroImage.jsx';
import LeadershipCard from './LeadershipCard.jsx'; // Import the LeadershipCard component
import managementData from '../../../data/management.json'; // Import the JSON data

function OurLeadership() {
  return (
    <>
      <HeroImage />
      <div className='leadershipParentContainer'>
        <div className='leadershipImagesContainer'>
          {managementData.map((leader) => (
            <LeadershipCard
              key={leader.id}
              name={leader.name}
              position={leader.position}
              portraitURL={leader.portraitURL}
              bio={leader.bio}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default OurLeadership;