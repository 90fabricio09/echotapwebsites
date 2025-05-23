import { Link } from 'react-router-dom';
import FabricioBettarelloImage from '../assets/images/fabriciobettarello.jpeg';
import { useLanguage } from '../contexts/LanguageContext';
import LanguageSelector from '../components/LanguageSelector';

const FabricioBettarello = () => {
  const { translations } = useLanguage();

  const links = [
    {
      title: translations.whatsapp,
      description: translations.whatsappDesc,
      icon: "bi-whatsapp",
      path: "https://wa.me/5511994921448",
      color: "#2563EB",
      isExternal: true
    },
    {
      title: translations.instagram,
      description: translations.instagramDesc,
      icon: "bi-instagram",
      path: "https://instagram.com/fabriciobettarello",
      color: "#2563EB",
      isExternal: true
    },
    {
      title: "LinkedIn",
      description: "Conecte-se",
      icon: "bi-linkedin",
      path: "https://linkedin.com/in/fabriciobettarello",
      color: "#2563EB",
      isExternal: true
    }
  ];

  return (
    <div className="home-container">
      <div className="content-wrapper">
        <LanguageSelector />
        <div className="profile-section">
          <div className="profile-image">
            <img src={FabricioBettarelloImage} alt="Fabricio Bettarello" />
          </div>
          <div className="profile-info">
            <h1>Fabricio Bettarello</h1>
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
                <div className="link-icon">
                  <i className={`bi ${link.icon}`}></i>
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

export default FabricioBettarello;