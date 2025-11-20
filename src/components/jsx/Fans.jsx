import '../styles/Fans.css';
import HeroImage from './HeroImage.jsx';

function Fans() {

  return (
    <>
      <HeroImage/>
      <div className='fansPageContainer'>
        <h3>To all our dear Fans...</h3>
        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc hendrerit ex at augue faucibus, id aliquam magna consequat. Mauris ullamcorper turpis vitae ex tristique, in ultrices urna vestibulum. Pellentesque urna sapien, convallis nec condimentum vitae, ullamcorper ac nibh. Quisque consectetur gravida odio eget sagittis. Nam pharetra est non sapien facilisis, eget placerat nunc blandit. Quisque sollicitudin sem non massa ultrices malesuada. Suspendisse mauris dui, iaculis in felis id, pretium vulputate velit. Nam faucibus facilisis semper. Aliquam eu nisl magna. Morbi finibus ligula id elementum aliquam. Pellentesque id dignissim mi, sed viverra odio. Phasellus a neque a dui dapibus auctor nec a erat. Ut dignissim erat eget posuere fermentum. Nullam malesuada tincidunt nibh lobortis accumsan. Ut vestibulum tincidunt pharetra. </p>
      </div>
      <div className='feedbackContainer'>
        <div>
          <h3>We value your feedback</h3>
          <p> Contact Us </p>
          <p> Email, call or submit the form to learn how to... </p>
          <p> gitothua@yahoo.com</p>
          <p> +254 123 456908 </p>
          <p> Follow Us </p>
        </div>
        <div>
          <form>
            <div className="firstElementWrapper">
              <h3> Get in Touch </h3>
            </div>
            <div className='fNameLastNameGroup'>
              <div>
                <label for="firstName">First Name</label>
                <input id="firstName" type="text"/>
              </div>
              <div>
                <label for="lastName">Last Name</label>
                <input id="lastName" type="text"/>
              </div>
            </div>
            <div className='Normal'>
              <label for="email">Email</label>
              <input id="email" type="email" />
            </div>
            <div className='Normal'>
              <label for="phone">Phone Number</label>
              <div className='phoneInput'>
                <select style={{ width: '20%' }} id="code" type="tel" >
                  <option value="+254">+254</option>
                  <option value="+1">+1</option>
                  <option value="+44">+44</option>
                </select>
                <input style={{ width: '80%' }} id="phone" type="tel" />
              </div>
            </div>
            <div className='Normal'>
              <label for="message">Message</label>
              <textarea id="message"></textarea>
            </div>
            <button type="submit">SUBMIT</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Fans;