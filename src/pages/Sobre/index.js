import './Sobre.css'
import ImageTitle from "../../components/ImageTitle";
import imageFora from '../../assets/imagensFora/fotoFora.jpg'
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function Sobre() {

    const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        // Rola suave até o elemento
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  
    return (
        <div className="container-fluid p-0">
            <ImageTitle
                titulo="Conheça um pouco da nossa história"
                disableButton={true}
            />


            <div className='container'>
                <div className='container-fluid d-flex align-items-center mt-5'>
                    <div className='tag'></div>
                    <h2 className='texto-info'>Como tudo começou...</h2>
                </div>
                <div className="row mt-5">
                    <div className="col-12 col-lg-6 text-center mt-3">
                        <p>Há mais de 30 anos conhecemos Santo Hilário e nos apaixonamos à primeira vista. Desde então,
                            visitamos o vilarejo várias vezes para nos hospedar. Com o tempo, amadureceu a ideia de nos
                            estabelecer aqui.
                        </p>
                        <p>Em 2018, surgiu o desejo de construir uma pousada e um restaurante, que logo se transformou em
                            um sonho. Em 2019, esse sonho começou a sair do papel e demos início à obra, com o objetivo de
                            proporcionar a mais pessoas a oportunidade de desfrutar deste lugar maravilhoso.
                        </p>
                        <p>Durante esses seis anos, enfrentamos vários obstáculos, incluindo a pandemia, mas nunca desistimos.
                            Com otimismo e muita luta, em 2025 o sonho se torna realidade. A pousada está pronta para receber
                            hóspedes que já conhecem e amam Santo Hilário, assim como aqueles que irão se encantar pela primeira
                            vez com a magia deste lugar e tudo o que ele oferece.</p>
                    </div>

                    <div className="col-12 col-lg-6 view-history d-flex justify-content-center">
                        <img src={imageFora} className="rounded img-fluid" alt="Imagem com bordas arredondadas" />
                    </div>

                    <div className='container-fluid d-flex align-items-center mt-5'   id="sobre-trekking">
                        <div className='tag'></div>
                        <h2 className='texto-info'>Sobre o Trekking</h2>
                    </div>
                    <div className="info-content mt-4">
                        <p>A caminhada, com aproximadamente 15 km no total, terá início no Porto Capetinga Bar, de onde partiremos rumo ao alto do cerrado, passando pelas antenas e seguindo até a igrejinha do Chevet, dedicada à Nossa Senhora Aparecida.</p>

                        <p>Durante o trajeto, haverá uma parada na cachoeira da Fazenda, onde estará disponível um ponto de apoio para hidratação.</p>

                        <p>Em seguida, a caminhada continuará pela deslumbrante estrada das cachoeiras, com mais um ponto de apoio ao longo do percurso, encerrando com chave de ouro no Porto Capetinga Bar.</p>

                        <ul className="info-list">
                            <li><strong>Data:</strong> 13/07/2025 (Domingo)</li>
                            <li><strong>Horário de concentração e café da manhã:</strong> 6 horas</li>
                            <li><strong>Horário de saída para caminhada:</strong> 7 horas</li>
                            <li><strong>Local:</strong> Santo Hilário - MG</li>
                            <li><strong>Mais informações em:</strong>
                                <a href="https://www.instagram.com/keepsportingbrasil?igsh=MTd6NTJnOGJ2bGpkZA==" target="_blank" rel="noopener noreferrer" className="instagram-link">
                                    <i className="bi bi-instagram instagram-icon mx-2"></i>
                                    <span className="instagram-text">keepsportingbrasil</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>





        </div>

    );
}

export default Sobre;
