import PokemonCard from "./PokemonCard"
import { useNavigate, useParams } from "react-router-dom"
import Loading from "./Loading";
import PropTypes from 'prop-types'
import CarouselCard from "./CarouselCard";
const PokemonCardList = ({ cards }) => {

    const navigate = useNavigate();
    const {type} = useParams();

    const filteredCards = type ? cards.filter((card) => card.types.includes(type)) : cards;

    const handleCardClick = (card) => {
        navigate(`/card/${card.id}`)
    }
    if (!cards.length || !filteredCards.length) {
        return <Loading />;
    }
    return (
        <>
        <div className="d-flex flex-column justify-content-center text-center aling-items-center mb-5">
            <h1>
            Pokémon Card Explorer
            </h1>
            <span>"¡Catch 'Em All Cards!"</span>
        </div>
        <div className="d-flex justify-content-center aling-items-center" style={{gap: 30}}>

        <CarouselCard cards={cards} />
        </div>
        <div className="m-5" id="galery">
        <h2>PokéDeck Gallery</h2>
        </div>
        <div className="container pokemon_list">
            {
                filteredCards.map((card) => (
                    <PokemonCard key={card.id} card={card} onCardClick={handleCardClick} />
                ))
            }
            <div className="container_button">
                <button>
                <a href="#top">Subir</a>
                </button>
            </div>
        </div>
        </>
    )
}

PokemonCardList.propTypes = {
    cards: PropTypes.arrayOf(PropTypes.shape({
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
    })).isRequired,
};

export default PokemonCardList