import '../styles/Fans.css';
import HeroImage from './HeroImage.jsx';
import countryCodes from '../../../data/countryCodes.json'; // Import the JSON file

function Fans() {
  return (
    <>
      <HeroImage />
      <div className='fansPageContainer'>
        <div>
          <h2>To all our dear Fans...</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc hendrerit ex at augue faucibus, id aliquam magna consequat. Mauris ullamcorper turpis vitae ex tristique, in ultrices urna vestibulum. Pellentesque urna sapien, convallis nec condimentum vitae, ullamcorper ac nibh. Quisque consectetur gravida odio eget sagittis. Nam pharetra est non sapien facilisis, eget placerat nunc blandit. Quisque sollicitudin sem non massa ultrices malesuada. Suspendisse mauris dui, iaculis in felis id, pretium vulputate velit. Nam faucibus facilisis semper. Aliquam eu nisl magna. Morbi finibus ligula id elementum aliquam. Pellentesque id dignissim mi, sed viverra odio. Phasellus a neque a dui dapibus auctor nec a erat. Ut dignissim erat eget posuere fermentum. Nullam malesuada tincidunt nibh lobortis accumsan. Ut vestibulum tincidunt pharetra.
          </p>
        </div>
        <div className='fansPageContainerContactUs'>
          <div>
            <h2>We value your feedback</h2>
            <p>Contact Us</p>
            <br></br>
            <p>Email: gitothua@yahoo.com</p>
            <br></br>
            <p>Phone: +254 123 456908</p>
            <br></br>
            <p>Follow Us</p>
          </div>
          <div>
            <form>
              <div className="firstElementWrapper">
                <h2>Get in Touch</h2>
              </div>
              <div className='fNameLastNameGroup'>
                <div>
                  <label htmlFor="firstName">First Name</label>
                  <input id="firstName" type="text" />
                </div>
                <div>
                  <label htmlFor="lastName">Last Name</label>
                  <input id="lastName" type="text" />
                </div>
              </div>
              <div className='Normal'>
                <label htmlFor="email">Email</label>
                <input id="email" type="email" />
              </div>
              <div className='Normal'>
                <label htmlFor="phone">Phone Number</label>
                <div className='phoneInput'>
                  <select style={{ width: '22%' }} id="code" type="tel">
                    {countryCodes.map((country, index) => (
                      <option key={index} value={country.code}>
                        {country.flag} {country.code}
                      </option>
                    ))}
                  </select>
                  <input style={{ width: '78%' }} id="phone" type="tel" />
                </div>
              </div>
              <div className='Normal'>
                <label htmlFor="message">Message</label>
                <textarea id="message"></textarea>
              </div>
              <button type="submit">SUBMIT</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Fans;