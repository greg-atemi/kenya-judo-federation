import '../styles/OurLeadership.css';
import HeroImage from './HeroImage.jsx';

function OurLeadership() {

  return (
    <>
      <HeroImage/>
      <div className='leadershipParentContainer'>
        <h3>Meet our leadership team...</h3>
        <div className='leadershipImagesContainer'>

          <div className='leadershipImagesRow'>
            <div className='leadershipImageCard' style={{ backgroundImage: `url("image1.png")` }}>
              <div>
                <h2>Shadrack Maluki</h2>
                <p>President</p>
              </div>
            </div>
          </div>

          <div className='leadershipImagesRow'>
            <div className='leadershipImageCard' style={{ backgroundImage: `url("image2.png")` }}>
              <div>
                <h2>Shadrack Maluki</h2>
                <p>President</p>
              </div>
            </div>
            <div className='leadershipImageCard' style={{ backgroundImage: `url("image3.png")` }}>
              <div>
                <h2>Shadrack Maluki</h2>
                <p>President</p>
              </div>
            </div>
          </div>

          <div className='leadershipImagesRow'>
            <div className='leadershipImageCard' style={{ backgroundImage: `url("image1.png")` }}>
              <div>
                <h2>Shadrack Maluki</h2>
                <p>President</p>
              </div>
            </div>
            <div className='leadershipImageCard' style={{ backgroundImage: `url("image2.png")` }}>
              <div>
                <h2>Shadrack Maluki</h2>
                <p>President</p>
              </div>
            </div>
            <div className='leadershipImageCard' style={{ backgroundImage: `url("image3.png")` }}>
              <div>
                <h2>Shadrack Maluki</h2>
                <p>President</p>
              </div>
            </div>
          </div>

        </div>        
      </div>
    </>
  )
}

export default OurLeadership;