import '../styles/Footer.css';

function Footer() {
    return (
        <footer className="Footer">
            <div className="FooterContent">
                <div className="FooterSectionLeft">
                    <div className="LogoPlaceholderContainer">
                        <div className="LogoPlaceholder"/>
                    </div>
                    <p>Kenya Judo Federation is dedicated to promoting Judo through discipline, respect, and excellence. Together, we nurture athletes and inspire future generations</p>
                    <div className="LogoPlaceholderContainer">
                        <div className="SocialIcons">
                            <span>f</span>
                            <span>f</span>
                            <span>f</span>
                            <span>f</span>
                        </div>
                    </div>
                </div>
                <div className="FooterSectionRight">
                    <div className="FooterSubSection">
                        <h3>Quick Links</h3>
                        <p>About Us</p>
                        <p>Contact Us</p>
                        <p>Fans Page</p>
                        <p>Ranking</p>
                        <p>Clubs</p>
                    </div>
                    <div className="FooterSubSection">
                        <h3>Follow Us</h3>
                        <p>Facebook</p>
                        <p>Youtube</p>
                        <p>Tiktok</p>
                        <p>Instagram</p>
                    </div>
                </div>
            </div>
            <div className="Copyright">
                <p>2025 Soft-O Copyright - All Rights Reserved</p>
            </div>
        </footer>
    );
}

export default Footer;
