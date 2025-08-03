import './ImageTitle.css'
import {Link} from 'react-router-dom'

function ImageTitle({titulo, paragrafo, disableButton}){
    return(
        <section id="jumbotron" className="jumbotron-fluid background-jumbotron teste">
                <div className="container text-center custom">
                    <h1 className="display-3 pb-3">{titulo}</h1>
                    <p className="d-none d-md-block">{paragrafo}</p>
                    {!disableButton && (
                        <Link to={'/contatos'} className="btn btn-lg btn-custom" type="button">
                            Entre em Contato
                        </Link>
                    )}
                </div>
        </section>
    )
}

export default ImageTitle;