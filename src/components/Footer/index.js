import './Footer.css'
import { NavLink } from "react-router-dom";
import instagram from '../../assets/redesSociais/instagram.png';
import linkedin from '../../assets/redesSociais/linkedin.png';
import whatsapp from '../../assets/redesSociais/whatsapp.png';

function Footer() {
    return (
        <footer className="py-4 mt-5 text-white">
            <div className="container">
                <div className="row">

                    <div className="col-12 col-md-3 mb-4">
                        <h3>Villa Capetinga</h3>
                        <p>Siga-nos nas redes sociais:</p>
                        <div className="d-flex gap-3 redes-sociais">
                            <a href='https://www.instagram.com/villacapetinga/' target='_blank' rel='noopener noreferrer'>
                                <img src={instagram} alt="Instagram"  />
                            </a>
                            <a href='/' target='_blank' rel='noopener noreferrer'>
                                <img src={linkedin} alt="LinkedIn" />
                            </a>
                            <a href='https://wa.me/qr/37QVHI4237N7F1' target='_blank' rel='noopener noreferrer'>
                                <img src={whatsapp} alt="WhatsApp" />
                            </a>
                        </div>
                    </div>

                    <div className="col-6 col-md-2 mb-4">
                        <h3>Link</h3>
                        <ul className="list-unstyled">
                            <li><NavLink to="/" end className="nav-link">Home</NavLink></li>
                            <li><NavLink to="/Sobre" className="nav-link">Sobre</NavLink></li>
                            <li><NavLink to="/Contatos" className="nav-link">Contatos</NavLink></li>
                        </ul>
                    </div>

                    <div className="col-6 col-md-3 mb-4">
                        <h3>Suporte</h3>
                        <ul className="list-unstyled">
                            <li><NavLink to="/" className="nav-link">Como funciona</NavLink></li>
                            <li><NavLink to="/" className="nav-link">Características</NavLink></li>
                            <li><NavLink to="/" className="nav-link">Contato</NavLink></li>
                        </ul>
                    </div>

                    <div className="col-12 col-md-4 mb-4">
                        <h3 className="mb-3 text-white">Nos contate</h3>
                        <ul className="list-unstyled">
                            <li>
                                <i className="bi bi-telephone-fill text-white"></i>
                                <span className="ms-2">+55 37 9 9953-1130</span>
                            </li>
                            <li>
                                <i className="bi bi-envelope-fill text-white"></i>
                                <span className="ms-2">villacapetinga@gmail.com</span>
                            </li>
                            <li>
                                <i className="bi bi-geo-alt-fill text-white"></i>
                                <span className="ms-2">R. José Tomé Filho, 26 - Santo Hilário, Pimenta - MG, 35585-000</span>
                            </li>
                        </ul>
                    </div>

                     <div className="col-12 text-center mt-4">
                        <p className="mb-0">© {new Date().getFullYear()} Villa Capetinga. Todos os direitos reservados.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
