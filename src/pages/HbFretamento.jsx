import { Link } from 'react-router-dom';
import HbFretamentoImage from '../assets/images/hbfretamento.png';

const HbFretamento = () => {
    const links = [
        {
            title: "Website",
            description: "Visite nosso site oficial",
            icon: "bi-globe",
            path: "https://hbfretamento.com.br",
            color: "#2563EB",
            isExternal: true
        },
        {
            title: "WhatsApp",
            description: "Entre em contato",
            icon: "bi-whatsapp",
            path: "https://wa.me/5511947081830",
            color: "#2563EB",
            isExternal: true
        },
        {
            title: "Instagram",
            description: "Me siga no Instagram",
            icon: "bi-instagram",
            path: "https://instagram.com/hbfretamento",
            color: "#2563EB",
            isExternal: true
        },
        {
            title: "Avalie no Google",
            description: "Nos avalie no Google",
            icon: "bi-google",
            path: "https://search.google.com/local/writereview?placeid=ChIJaRt3-J5ZzpQR6C0BVe9Rq7c",
            color: "#2563EB",
            isExternal: true
        },
    ];

    return (
        <div className="home-container">
            <div className="content-wrapper">
                <div className="profile-section">
                    <div className="profile-image">
                        <img src={HbFretamentoImage} alt="HB Fretamento" />
                    </div>
                    <div className="profile-info">
                        <h1>HB Fretamento</h1>
                        <p className="bio">Clique nos botões abaixo!</p>
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
                            style={{ '--hover-color': link.color }}
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
                    <p>Desenvolvido com <i className="bi bi-heart-fill"></i> por <a href="https://astrixo.com.br" target="_blank" rel="noopener noreferrer" className="footer-link">EchoTap</a></p>
                </footer>
            </div>
        </div>
    );
};

export default HbFretamento;