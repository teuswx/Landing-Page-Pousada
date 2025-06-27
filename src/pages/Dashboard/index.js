import './Dashboard.css'
import CardInfo from '../../components/CardInfo';
import img1 from '../../assets/quartocerra/cama.jpg';
import img2 from '../../assets/quartocerra/umacama.jpg';
import img3 from '../../assets/quartocerra/vidrobanheiro.jpg';
import Maps from '../../components/Maps';
import {Link} from 'react-router-dom'

function Dashboard() {

    const cardsInfo = [
        {
            title: "Quarto com vista panorâmica",
            description: "Desfrute de uma vista deslumbrante do cerrado e da represa, proporcionando um ambiente tranquilo e relaxante. O quarto oferece cama de casal, ideal para um descanso revigorante. Com Smart TV e Wi-Fi gratuito, garante conforto e comodidade durante sua estadia.",
            images: [img1, img2, img3],
            order: { carousel: 2, text: 1 },
            icons: ["bi bi-segmented-nav", "bi bi-tv", "bi bi-wifi"],
            textIcons: ["Cama de Casal", "Smart TV", "Wifi Gratuito"]
        },
        {
            title: "Quarto adaptado para cadeirantes",
            description: "Este quarto foi projetado com acessibilidade total, proporcionando conforto e praticidade. Equipado com cama de casal, Smart TV e Wi-Fi gratuito, atende às necessidades de quem busca uma estadia tranquila. Ideal para quem precisa de um espaço adaptado e confortável.",
            images: [img1, img2, img3],
            order: { carousel: 1, text: 2 },
            icons: ["bi bi-universal-access", "bi bi-tv", "bi bi-wifi"],
            textIcons: ["Acessibilidade ", "Smart TV", "Wifi Gratuito"]
        },
        {
            title: "Quarto com duas camas",
            description: "Perfeito para amigos ou família, este quarto oferece duas camas de solteiro, garantindo conforto e praticidade. O ambiente aconchegante é ideal para momentos de descanso. Com Smart TV e Wi-Fi gratuito, você terá tudo o que precisa para uma estadia agradável.",
            images: [img1, img2, img3],
            order: { carousel: 2, text: 1 },
            icons: ["bi bi-people-fill", "bi bi-tv", "bi bi-wifi"],
            textIcons: ["2 Camas", "Smart TV", "Wifi Gratuito"]
        }
    ]

    return (
        <div className="container-fluid px-0">
            <section id="jumbotron" className="jumbotron-fluid background-jumbotron teste">
                <div className="container text-center custom">
                    <h1 className="display-3">Pousada e Restaurante Villa Capetinga</h1>
                    <p>A Villa Capetinga é uma pousada charmosa em Santo Hilário, Minas Gerais,
                        ideal para casais que buscam tranquilidade na natureza</p>
                    <Link to={'/Contatos'} className="btn btn-lg btn-custom" type="button">
                        Entre em Contato
                    </Link>
                </div>
            </section>

            
            <div className='container my-5'>
                <div className='container-fluid d-flex align-items-center'>
                    <div className='tag'></div>
                    <h2 className='texto-info'>Conheça nossos quartos</h2>
                </div>
                


                {cardsInfo.map((card, index) => (
                    <CardInfo
                        key={index}
                        id={`ads${index}`}    // ID único para cada carousel
                        title={card.title}
                        description={card.description}
                        images={card.images}
                        order={card.order}
                        icons = {card.icons}
                        textIcons = {card.textIcons}
                    />
                ))}


                <div className='container-fluid mb-5 d-flex align-items-center'>
                    <div className='tag'></div>
                    <h2 className='texto-info'>Localização</h2>
                </div>

                <Maps />
            </div>



        </div>

    )
}


export default Dashboard;