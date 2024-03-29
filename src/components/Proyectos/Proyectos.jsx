import './proyectos.scss';
import { Container, Row, Col } from 'react-bootstrap';
import egnd from '../../image/egnd.png';
import riding from '../../image/riding-school.png';
import ecommerce from '../../image/alerta-bihotza.png';
import patito from '../../image/yellowpatito.png';
import { Link } from 'react-scroll';

function Proyectos() {
  return (
    <Container className='container-proyectos' id='portfolio'>
      <Row id='row-proyectos-title'>
        <h2>Mis mejores trabajos</h2>
        <h3>Aquí hay una selección de mis mejores proyectos.</h3>
      </Row>

      <Row id='row-proyectos'>
        <Col xs={12} md={6} lg={4}>
          <a
            href='https://www.egndfinance.com/'
            rel='noopener noreferrer'
            target='_blank'
            style={{ textDecoration: 'none', color: 'black' }}
          >
            <div className='box-img'>
              <img src={egnd} />
            </div>
            <p className='name-proyectos'>EGND</p>
          </a>
        </Col>

        <Col xs={12} md={6} lg={4}>
          <a
            href='https://riding-school.netlify.app/'
            rel='noopener noreferrer'
            target='_blank'
            style={{ textDecoration: 'none', color: 'black' }}
          >
            <div className='box-img'>
              <img src={riding} />
            </div>
            <p className='name-proyectos'>Riding School</p>
          </a>
        </Col>

        <Col xs={12} md={6} lg={4}>
          <a
            href='https://ignaciovivas.github.io/Alerta-Bihotza/'
            rel='noopener noreferrer'
            target='_blank'
            style={{ textDecoration: 'none', color: 'black' }}
          >
            <div className='box-img'>
              <img src={ecommerce} />
            </div>
            <p className='name-proyectos'>Alerta Bihotza</p>
          </a>
        </Col>

        <Col xs={12} md={6} lg={4}>
          <a
            href='https://yellowpatito.com/store'
            rel='noopener noreferrer'
            target='_blank'
            style={{ textDecoration: 'none', color: 'black' }}
          >
            <div className='box-img'>
              <img src={patito} />
            </div>
            <p className='name-proyectos'>Patito Store</p>
          </a>
        </Col>
      </Row>
    </Container>
  );
}

export default Proyectos;
