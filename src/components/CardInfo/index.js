import { useEffect } from "react";
import './CardInfo.css'
import Button from "../Button";

function CardInfo({ title, description, images, order, id, icons, textIcons }) {
  useEffect(() => {
    const carousel = document.querySelector(`#${id}`);
    if (carousel && window.bootstrap) {
      new window.bootstrap.Carousel(carousel, {
        interval: 3000,
        ride: 'carousel',
      });
    }
  }, [id]);

  return (
    <div className="container my-4 p-2 p-lg-4">
      <div className="row">
        <div className={`col-12 col-lg-4 p-4 p-lg-2 p-xl-4 order-1 order-lg-${order.carousel} d-flex justify-content-center align-items-center`}>
          <div
            id={id}
            className="carousel slide"
            data-bs-ride="carousel"
            data-bs-interval="3000"
          >
            <div className="carousel-indicators">
              {images.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  data-bs-target={`#${id}`}
                  data-bs-slide-to={index}
                  className={index === 0 ? "active" : ""}
                  aria-label={`Slide ${index + 1}`}
                />
              ))}
            </div>
            <div className="carousel-inner">
              {images.map((img, index) => (
                <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                  <img src={img} className="d-block w-100" alt={`Slide ${index + 1}`} />
                </div>
              ))}
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target={`#${id}`} data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Anterior</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target={`#${id}`} data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Próximo</span>
            </button>
          </div>
        </div>
        <div className={`col-12 col-lg-8 order-2 order-lg-${order.text}`}>
          <div className="container testando">
            <h1>{title}</h1>
            <p className="mt-3 scrollable-text">{description}</p>
            <div className="row mt-lg-3">
              {icons.map((ico, index) => (
                <div key={index} className="col-4 d-flex flex-column justify-content-center align-items-center">
                  <i className={`${ico} icon-medium`}></i>
                  <span className="text-center">{textIcons[index]}</span>
                </div>
              ))}
            </div>
            <div className="row mt-2 mt-lg-auto">
              <div className="col-12 d-flex justify-content-center align-items-center justify-content-lg-start">
                <Button name="saiba mais" rota="Contatos"/>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}


export default CardInfo;