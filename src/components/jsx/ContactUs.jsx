import '../styles/ContactUs.css';

function ContactUs() {

  return (
    <>
      <div className='ContactUsContainer'>
        <div className='ContactUsContainerTitle'>
          <h3>Get In Touch</h3>
        </div>
        <div className='contactUsFormContainer'>
          <div>
            <form>
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
                  <input style={{ width: '25%' }} id="code" type="tel" />
                  <input style={{ width: '75%' }} id="phone" type="tel" />
                </div>
              </div>
              <div className='Normal'>
                <label for="message">Message</label>
                <textarea id="message"></textarea>
              </div>
              <button type="submit">SUBMIT</button>
            </form>
          </div>
          <div>
            <p> Call us from Mon - Fri from 8am to 5pm </p>
            <p> +254 123 456 78 </p>
            <p> Chat With Us </p>
            <p> Visit Us  </p>
            <a href="https://maps.app.goo.gl/Yyimen23bAnHMQmk8" target="_blank" rel="noopener noreferrer">
              <p> Moi Sports center Kasarani - Nairobi</p>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default ContactUs;