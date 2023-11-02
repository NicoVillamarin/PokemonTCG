import { Link } from 'react-router-dom';
import Logo from '../assets/1200px-Pokémon_TCG_logo.png'

const Header = ({ onTypeChange }) => {

  const handleTypeClick = (type) => {
    onTypeChange(type);
  }
  return (
    <div id='top'>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid contenedorHeader">
          <img src={Logo} alt="Logo pokemon" className='logoPokemon' />
          <button className="navbar-toggler bg-secondary" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon bg-secondary"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Categorias por tipos
            </a>
            <div className="navbar-nav">
              <ul className="dropdown-menu ">
                <li>
                  <Link to={`/`} onClick={() => { handleTypeClick() }}>
                    Todas las categorias
                  </Link>
                </li>
                <li>
                  <Link to={`/tipo/Fire`} onClick={() => { handleTypeClick('Fire') }}>
                    Fuego
                  </Link>
                </li>
                <li>
                  <Link to={`/tipo/Water`} onClick={() => { handleTypeClick('Water') }}>
                    Agua
                  </Link>
                </li>
                <li>
                  <Link to={`/tipo/Lightning`} onClick={() => { handleTypeClick('Lightning') }}>
                    Electrico
                  </Link>
                </li>
                <li>
                  <Link to={`/tipo/Grass`} onClick={() => { handleTypeClick('Grass') }}>
                    Hoja/Bicho
                  </Link>
                </li>
                <li>
                  <Link to={`/tipo/Colorless`} onClick={() => { handleTypeClick('Colorless') }}>
                    Normal
                  </Link>
                </li>
                <li>
                  <Link to={`/tipo/Dragon`} onClick={() => { handleTypeClick('Dragon') }}>
                    Dragon
                  </Link>
                </li>
                <li>
                  <Link to={`/tipo/Metal`} onClick={() => { handleTypeClick('Metal') }}>
                    Metal
                  </Link>
                </li>
                <li>
                  <Link to={`/tipo/Darkness`} onClick={() => { handleTypeClick('Darkness') }}>
                    Darkness
                  </Link>
                </li>
                <li>
                  <Link to={`/tipo/Psychic`} onClick={() => { handleTypeClick('Psychic') }}>
                    Psiquico
                  </Link>

                </li>
                <li>
                  <Link to={`/tipo/Fighting`} onClick={() => { handleTypeClick('Fighting') }}>
                    Lucha
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Header