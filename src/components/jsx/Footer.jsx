import '../styles/Footer.css';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

function Footer() {
    return (
        <footer className="Footer">
            <div className="FooterContent">
                <div className="FooterSectionLeft">
                    <div className="LogoPlaceholderContainer">
                        <div className="LogoPlaceholder"/>
                    </div>
                    <p>Kenya Judo Federation is dedicated to promoting Judo through discipline, respect, and excellence. Together, we nurture athletes and inspire future generations</p>
                </div>
                <div className="FooterSectionRight">
                    <div className="FooterSubSection">
                        <h3>Quick Links</h3>
                        <p><Link to="/events">Events Page</Link></p>
                        <p><Link to="/contactUs">Contact Us</Link></p>
                        <p><Link to="/fans">Fans Page</Link></p>
                        <p><Link to="/ranking">Ranking Page</Link></p>
                        <p><Link to="/clubs">Clubs Page</Link></p>
                    </div>
                    <div className="FooterSubSection">
                        <h3>Follow Us</h3>
                        <p><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></p> {/* Updated Facebook link */}
                        <p><a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">Youtube</a></p>
                        <p><a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">Tiktok</a></p>
                        <p><a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></p>
                    </div>
                </div>
            </div>
            <hr></hr>
            <div className="FooterBottom">
                <div>
                    <p className="Copyright">2025 Soft-O Copyright - All Rights Reserved</p>
                </div>
                <div className="SocialIcons">
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                        <img src="facebook.png" alt="Facebook Icon" style={{ width: '13.5px', height: '25px' }} />
                    </a>
                    <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                        <img src="youtube.png" alt="YouTube Icon" style={{ width: '23.7px', height: '16.67px' }} />
                    </a>
                    <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">
                        <img src="tiktok.png" alt="TikTok Icon" style={{ width: '18px', height: '20px' }} />
                    </a>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                        <img src="instagram.png" alt="Instagram Icon" style={{ width: '20px', height: '20px' }} />
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
