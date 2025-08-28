import '../styles/ClubDetail.css';
import HeroImage from './HeroImage.jsx';

function ClubDetail() {

  return (
    <>
      <HeroImage/>
      <div className='clubDetailContainer'>
        <h3> Club Leadership </h3>
        <div className='clubLeaderSection'>
          <img src="imagePlaceholder.png" alt="Club Leader" />
          <div className='clubLeaderInfo'>
            <p> Coach Mburu </p>
            <p> Coach </p>
            <p> Gitothua Judo Club </p>
          </div>
        </div>
        <h3> About Us </h3>
        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc hendrerit ex at augue faucibus, id aliquam magna consequat. Mauris ullamcorper turpis vitae ex tristique, in ultrices urna vestibulum. Pellentesque urna sapien, convallis nec condimentum vitae, ullamcorper ac nibh. Quisque consectetur gravida odio eget sagittis. Nam pharetra est non sapien facilisis, eget placerat nunc blandit. Quisque sollicitudin sem non massa ultrices malesuada. Suspendisse mauris dui, iaculis in felis id, pretium vulputate velit. Nam faucibus facilisis semper. Aliquam eu nisl magna. Morbi finibus ligula id elementum aliquam. Pellentesque id dignissim mi, sed viverra odio. Phasellus a neque a dui dapibus auctor nec a erat. Ut dignissim erat eget posuere fermentum. Nullam malesuada tincidunt nibh lobortis accumsan. Ut vestibulum tincidunt pharetra. </p>

        <h3> Our History </h3>
        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc hendrerit ex at augue faucibus, id aliquam magna consequat. Mauris ullamcorper turpis vitae ex tristique, in ultrices urna vestibulum. Pellentesque urna sapien, convallis nec condimentum vitae, ullamcorper ac nibh. Quisque consectetur gravida odio eget sagittis. Nam pharetra est non sapien facilisis, eget placerat nunc blandit. Quisque sollicitudin sem non massa ultrices malesuada. Suspendisse mauris dui, iaculis in felis id, pretium vulputate velit. Nam faucibus facilisis semper. Aliquam eu nisl magna. Morbi finibus ligula id elementum aliquam. Pellentesque id dignissim mi, sed viverra odio. Phasellus a neque a dui dapibus auctor nec a erat. Ut dignissim erat eget posuere fermentum. Nullam malesuada tincidunt nibh lobortis accumsan. Ut vestibulum tincidunt pharetra. </p>

        <div className='contactUs'>
          <div>
            <h3>Contact Us</h3>
            <p>Email: clubone@gmail.com</p>
            <p>Phone: 0722334455</p>
            <p>Location: Moi Sports Center Kasarani</p>
            <p>Nairobi</p>
            <p>Kenya</p>
          </div>
          <button>Join Us</button>
        </div>
      </div>
    </>
  )
}

export default ClubDetail;