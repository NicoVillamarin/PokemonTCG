import { Link } from "react-router-dom"
import Loading from "./Loading.jsx"
import PropTypes from 'prop-types'

const PokemonCard = ({ card, onCardClick }) => {
    
    if(!card){
        return <Loading />
    }

    return (
        <div>
            <div className="pokemon-card" onClick={()=> onCardClick(card)}>
                <Link to={`/card/${card.id}`}>
                <img src={card.images?.small} alt={card.name} className="img_card"/>
                </Link>
            </div>
        </div>
    )
}

PokemonCard.propTypes = {
    card: PropTypes.object.isRequired,
    onCardClick: PropTypes.func.isRequired
}
export default PokemonCard