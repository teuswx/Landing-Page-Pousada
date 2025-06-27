import './Maps.css'

function Maps() {
    return(
        <div className='mapBox'>
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3733.1262858801515!2d-45.83983035940528!3d-20.664440596412373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b447007e454957%3A0x6b1be97e23d1c371!2sPousada%20e%20Restaurante%20Villa%20Capetinga!5e0!3m2!1spt-BR!2sbr!4v1750864247127!5m2!1spt-BR!2sbr" 
                width="100%" 
                height="450" 
                style={{ border: '0' }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa da Pousada e Restaurante Villa Capetinga"
            ></iframe>
        </div>
    );
}

export default Maps;
