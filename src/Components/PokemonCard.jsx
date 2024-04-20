import { Link } from "react-router-dom"
import Loading from "./Loading.jsx"
import PropTypes from 'prop-types'
import { motion } from 'framer-motion';

const PokemonCard = ({ card, onCardClick }) => {

    if (!card) {
        return <Loading />
    }

    return (
        <div>
            <div className="pokemon-card" onClick={() => onCardClick(card)}>
                <Link to={`/card/${card.id}`}>
                    <motion.img
                        src={card.images?.small}
                        alt={card.name} className="img_card"
                        style={{ width: 250, borderRadius: "15px" }}
                        whileHover={{ scale: 1.1 }} // Rotación al pasar el mouse sobre la carta
                        whileTap={{ rotate: 8 }} // Rotación al mantener presionada la carta
                        animate={{
                            scale: [1, 1.2, 1.3, 1.2, 1],
                            rotate: [0, 0, 5, 5, 0],
                        }}
                    />
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