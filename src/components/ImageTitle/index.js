import './ImageTitle.css'
import {Link} from 'react-router-dom'

function ImageTitle({titulo, paragrafo, disableButton}){
    return(
        <section id="jumbotron" className="jumbotron-fluid background-jumbotron teste">
                <div className="container text-center custom">
                    <h1 className="display-3">{titulo}</h1>
                    <p>{paragrafo}</p>
                    {!disableButton && (
                        <Link to={'/Contatos'} className="btn btn-lg btn-custom" type="button">
                            Entre em Contato
                        </Link>
                    )}
                </div>
        </section>
    )
}

export default ImageTitle;