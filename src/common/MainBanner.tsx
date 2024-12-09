import banner1 from '../assets/images/banner1.jpg';
import banner2 from '../assets/images/banner2.jpg';
import banner3 from '../assets/images/banner3.jpg';
import banner4 from '../assets/images/banner4.jpg';
import banner5 from '../assets/images/banner5.jpg';

function MainBanner() {
    
    const captionStyle: React.CSSProperties = {
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fondo negro transparente
        padding: '10px 20px',                // Espaciado interno
        maxWidth: '70%',                     // Ancho máximo
        borderRadius: '10px',                // Bordes redondeados
        position: 'absolute',                // Posición absoluta para ajustar
        bottom: '60px',                      // Ajusta la distancia desde abajo
    };
    

    return (
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={banner1} className="d-block w-100" alt="Slide 1"/>
                    <div className="carousel-caption d-none d-md-block" style={captionStyle}>
                        <h5>GAME 1</h5>
                        <p>Cruza los obstáculos cambiando de color hasta llegar al final</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src={banner2} className="d-block w-100" alt="Slide 2"/>
                    <div className="carousel-caption d-none d-md-block" style={captionStyle}>
                        <h5>GAME 2</h5>
                        <p>Encuentra los pares de las cartas</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src={banner3} className="d-block w-100" alt="Slide 3"/>
                    <div className="carousel-caption d-none d-md-block" style={captionStyle}>
                        <h5>GAME 3</h5>
                        <p>Protege tu casa de los aliens</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src={banner4} className="d-block w-100" alt="Slide 4"/>
                    <div className="carousel-caption d-none d-md-block" style={captionStyle}>
                        <h5>GAME 4</h5>
                        <p>Recoge tantas monedas como puedas</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src={banner5} className="d-block w-100" alt="Slide 5"/>
                    <div className="carousel-caption d-none d-md-block" style={captionStyle}>
                        <h5>GAME 5</h5>
                        <p>Recoge las frutas que caen del cielo, cuidado con las bombas</p>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
}

export default MainBanner;
