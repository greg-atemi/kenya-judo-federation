import '../styles/OurLeadership.css';
import OurLeadershipHeroImage from './OurLeadershipHeroImage.jsx';
import LeadershipCard from './LeadershipCard.jsx'; // Import the LeadershipCard component
import managementData from '../../../data/management.json'; // Import the JSON data

function OurLeadership() {
  return (
    <>
      <OurLeadershipHeroImage />
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