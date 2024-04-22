import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import PokemonCard from './PokemonCard';
import Loading from './Loading';
import PropTypes from 'prop-types';
import CarouselCard from './CarouselCard';

const PokemonCardList = ({ cards }) => {
    const navigate = useNavigate();
    const { type } = useParams();
    const [searchTerm, setSearchTerm] = useState('');

    const handleCardClick = (card) => {
        navigate(`/card/${card.id}`);
    };

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredCards = type ? cards.filter((card) => card.types.includes(type)) : cards;

    const filteredCardsSearch = searchTerm
        ? cards.filter((card) => card.name.toLowerCase().includes(searchTerm.toLowerCase()))
        : cards;

    if (!cards.length || !filteredCards.length) {
        return <Loading />;
    }

    return (
        <div className="container">
            <h1>Pokémon Card Explorer</h1>
            <span>"¡Catch 'Em All Cards!"</span>

            <div className="row my-5">
                <div className="col">
                    <CarouselCard cards={cards} />
                </div>
            </div>
            <div>
                <h2 className='my-5'>Pokédex Search:</h2>
            <input
                type="text"
                placeholder="Search Pokémon..."
                value={searchTerm}
                onChange={handleSearchChange}
                className="form-control my-5 w-50"
            />
            <h2 className='my-5' id='galery'>PokéDex Galery</h2>
            </div>
            <div className="row">
                {filteredCardsSearch.map((card) => (
                    <div key={card.id} className="col-md-3 mb-4">
                        <PokemonCard card={card} onCardClick={handleCardClick} />
                    </div>
                ))}
            </div>

            <div className="container_button">
                <button>
                    <a href="#top">Subir</a>
                </button>
            </div>
        </div>
    );
};

PokemonCardList.propTypes = {
    cards: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            name: PropTypes.string,
            imageUrl: PropTypes.string,
            type1: PropTypes.string,
            type2: PropTypes.string,
            hp: PropTypes.number,
            attack: PropTypes.number,
            defense: PropTypes.number,
            spAttack: PropTypes.number,
            spDefense: PropTypes.number,
            speed: PropTypes.number,
            generation: PropTypes.number,
            legendary: PropTypes.bool,
            mythical: PropTypes.bool,
        })
    ).isRequired,
};

export default PokemonCardList;
