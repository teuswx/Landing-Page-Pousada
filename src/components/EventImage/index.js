import './EventImage.css'
import { Link } from 'react-router-dom';

function EventImage() {
  return (
    <div id="backgroundevent" className="background-backgroundevent teste">
      <div className="container">
         <div className="row h-100" >
          <div className="col-6  text-center d-flex flex-column justify-content-center">
            <h1>TREKKING</h1>
            <span className='span-data'>13/07/2025</span>
            <div className='container-saibamais'>
            <Link to="/Sobre#sobre-trekking" className="link-event">Saiba mais</Link>

            </div>
            
          </div>
          <div className="col-6  d-flex align-items-end justify-content-end">
            <span><i className="bi bi-geo-alt-fill"></i> Santo Hilário-MG</span>
          </div>
        </div>
      </div>

    </div>
  );
}


export default EventImage;