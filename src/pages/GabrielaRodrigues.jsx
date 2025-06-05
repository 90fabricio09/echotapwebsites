import { Link } from 'react-router-dom';
import GabrielaRodriguesImage from '../assets/images/gabrielarodrigues.jpg';
import { useLanguage } from '../contexts/LanguageContext';
import LanguageSelector from '../components/LanguageSelector';

const GabrielaRodrigues = () => {
  const { translations } = useLanguage();
  const primaryColor = "#EE82EE";

  const links = [
    {
      title: translations.whatsapp,
      description: translations.whatsappDesc,
      icon: "bi-whatsapp",
      path: "https://wa.me/5511987228766",
      color: primaryColor,
      isExternal: true
    },
    {
      title: translations.instagram,
      description: translations.instagramDesc,
      icon: "bi-instagram",
      path: "https://instagram.com/gabrielarodrigues.oficial",
      color: primaryColor,
      isExternal: true
    },
    {
      title: translations.youtube,
      description: translations.youtubeDesc,
      icon: "bi-youtube",
      path: "https://youtube.com/gabrielarodriguescantora",
      color: primaryColor,
      isExternal: true
    }
  ];

  return (
    <div className="home-container" style={{ "--primary-color": primaryColor }}>
      <div className="content-wrapper">
        <LanguageSelector />
        <div className="profile-section">
          <div className="profile-image">
            <img src={GabrielaRodriguesImage} alt="Gabriela Rodrigues" />
          </div>
          <div className="profile-info">
            <h1>Gabriela Rodrigues</h1>
            <p className="bio">{translations.bio}</p>
          </div>
        </div>

        <div className="links-container">
          {links.map((link, index) => (
            <a 
              href={link.path}
              target={link.isExternal ? "_blank" : undefined}
              rel={link.isExternal ? "noopener noreferrer" : undefined}
              className="link-card" 
              key={index}
              style={{'--hover-color': link.color}}
            >
              <div className="link-content">
                <div className="link-icon" style={{ backgroundColor: link.color }}>
                  <i className={`bi ${link.icon}`} style={{ color: 'white' }}></i>
                </div>
                <div className="link-text">
                  <h3>{link.title}</h3>
                  <p>{link.description}</p>
                </div>
              </div>
              <i className="bi bi-arrow-right"></i>
            </a>
          ))}
        </div>

        <footer className="home-footer">
          <p>{translations.footer} <i className="bi bi-heart-fill"></i> {translations.by} <a href="https://echotap.com.br/" target="_blank" rel="noopener noreferrer" className="footer-link">EchoTap</a></p>
        </footer>
      </div>
    </div>
  );
};

export default GabrielaRodrigues;
