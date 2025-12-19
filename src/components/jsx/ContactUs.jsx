import '../styles/ContactUs.css';
import { useState } from 'react';
import countryCodes from '../../../data/countryCodes.json'; // Import the JSON file

function ContactUs() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneCode: '+254', // Set default value to +254
    phone: '',
    message: '',
  });

  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form fields
    const { firstName, lastName, email, phoneCode, phone, message } = formData;
    if (!firstName || !lastName || !email || !phoneCode || !phone || !message) {
      setErrorMessage('Please fill in all the fields first.');
      setSuccessMessage('');
      return;
    }

    // Show success message
    setSuccessMessage('Thank you for your feedback!');
    setErrorMessage('');

    // Clear the form
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phoneCode: '+254', // Reset to default value
      phone: '',
      message: '',
    });
  };

  return (
    <>
      <div className='ContactUsContainer'>
        <div className='ContactUsContainerTitle'>
          <h3>Get In Touch</h3>
        </div>
        <div className='contactUsFormContainer'>
          <div>
            <form onSubmit={handleSubmit}>
              {/* <div className="firstElementWrapper">
                <h2>Get in Touch</h2>
              </div> */}
              {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
              {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
              <div className='fNameLastNameGroup'>
                <div>
                  <label htmlFor="firstName">First Name</label>
                  <input id="firstName" type="text" value={formData.firstName} onChange={handleChange} />
                </div>
                <div>
                  <label htmlFor="lastName">Last Name</label>
                  <input id="lastName" type="text" value={formData.lastName} onChange={handleChange} />
                </div>
              </div>
              <div className='Normal'>
                <label htmlFor="email">Email</label>
                <input id="email" type="email" value={formData.email} onChange={handleChange} />
              </div>
              <div className='Normal'>
                <label htmlFor="phone">Phone Number</label>
                <div className='phoneInput'>
                  <select
                    style={{ width: '22%' }}
                    id="phoneCode"
                    value={formData.phoneCode}
                    onChange={handleChange}
                  >
                    {countryCodes.map((country, index) => (
                      <option key={index} value={country.code}>
                        {country.flag} {country.code}
                      </option>
                    ))}
                  </select>
                  <input
                    style={{ width: '78%' }}
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className='Normal'>
                <label htmlFor="message">Message</label>
                <textarea id="message" value={formData.message} onChange={handleChange}></textarea>
              </div>
              <button type="submit">SUBMIT</button>
            </form>
          </div>
        </div>
        <div className='contactUsLocationContainer'>
          <div className='mapContainer'>
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3824.990674956227!2d36.889139506178495!3d-1.2296183905498288!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f15ead8566faf%3A0xf2138b665ed9ab02!2sKasarani%20Indoor%20Arena!5e0!3m2!1sen!2sus!4v1766177543925!5m2!1sen!2sus"
              width="100%"
              height="400px"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className='detailsContainer'>
            <div>
              <h4 className='first'> Phone </h4>
              <p> +254 123 456 78 </p>
              <h4> Email </h4>
              <p> kenyajudo@gmail.com </p>
              <h4> Address </h4>
              <a href="https://maps.app.goo.gl/Yyimen23bAnHMQmk8" target="_blank" rel="noopener noreferrer">
                <p> Moi Sports center Kasarani - Nairobi</p>
              </a>
            </div>
            <div>
              <div>
                <h4>Follow Us:</h4>
              </div>
              <div className="detailsContainerSocialIcons">
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                    <img src="/facebook.png" alt="Facebook Icon" style={{ width: '13.5px', height: '25px' }} />
                </a>
                <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                    <img src="/youtube.png" alt="YouTube Icon" style={{ width: '23.7px', height: '16.67px' }} />
                </a>
                <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">
                    <img src="/tiktok.png" alt="TikTok Icon" style={{ width: '18px', height: '20px' }} />
                </a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                    <img src="/instagram.png" alt="Instagram Icon" style={{ width: '20px', height: '20px' }} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactUs;