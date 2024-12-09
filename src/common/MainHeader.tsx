import banner1 from '../assets/images/palomazapatilla.png';
import './MainHeader.css';

function MainHeader() {
    return (
        <header id="main-header">
            <div className="container">
<img src={banner1} alt="palomazapatilla" style={{ float: 'left', marginRight: '10px', width: '100px', height: 'auto' }} />

                <h1>TIL INC</h1>
                <p>Desarrollo de Videojuegos en Soluciones Cloud. JomaDEV</p>
            </div>
        </header>
    );
}

export default MainHeader;