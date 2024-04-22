import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/1200px-Pokémon_TCG_logo.png';

const Header = ({ onTypeChange, onSearch  }) => {

  const [searchTerm, setSearchTerm] = useState('');

  const handleTypeClick = (type) => {
    onTypeChange(type);
  }

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  }

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    onSearch(searchTerm);
  }

  return (
    <div id='top'>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            <img src={Logo} alt="Logo pokemon" className='logoPokemon' />
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto">
              <Link to="/" onClick={() => handleTypeClick()} className="nav-link">
                Todas las categorias
              </Link>
              <div className="dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                  Categorias por tipos
                </a>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                  <li><Link to="/tipo/Fire" onClick={() => handleTypeClick('Fire')} className="dropdown-item">Fuego</Link></li>
                  <li><Link to="/tipo/Water" onClick={() => handleTypeClick('Water')} className="dropdown-item">Agua</Link></li>
                  <li><Link to="/tipo/Lightning" onClick={() => handleTypeClick('Lightning')} className="dropdown-item">Electrico</Link></li>
                  <li><Link to="/tipo/Grass" onClick={() => handleTypeClick('Grass')} className="dropdown-item">Hoja/Bicho</Link></li>
                  <li><Link to="/tipo/Colorless" onClick={() => handleTypeClick('Colorless')} className="dropdown-item">Normal</Link></li>
                  <li><Link to="/tipo/Dragon" onClick={() => handleTypeClick('Dragon')} className="dropdown-item">Dragon</Link></li>
                  <li><Link to="/tipo/Metal" onClick={() => handleTypeClick('Metal')} className="dropdown-item">Metal</Link></li>
                  <li><Link to="/tipo/Darkness" onClick={() => handleTypeClick('Darkness')} className="dropdown-item">Darkness</Link></li>
                  <li><Link to="/tipo/Psychic" onClick={() => handleTypeClick('Psychic')} className="dropdown-item">Psiquico</Link></li>
                  <li><Link to="/tipo/Fighting" onClick={() => handleTypeClick('Fighting')} className="dropdown-item">Lucha</Link></li>
                </ul>
              </div>
            </div>
          </div>
          <div>
            <a href="#galery" className='nav-link text-decoration-none'>
              PokéDeck Gallery
            </a>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Header;
