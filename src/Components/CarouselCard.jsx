import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CarouselCard = ({ cards }) => {
    const [randomVisibleCards, setRandomVisibleCards] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(1); // Índice de la carta en el medio por defecto
    const [isMouseDown, setIsMouseDown] = useState(false);

    useEffect(() => {
        // Seleccionar tres cartas aleatorias al principio
        const randomCards = [];
        for (let i = 0; i < 3; i++) {
            const randomIndex = Math.floor(Math.random() * cards.length);
            randomCards.push(cards[randomIndex]);
        }
        setRandomVisibleCards(randomCards);
    }, [cards]);

    const handleCardHover = (index) => {
        setCurrentIndex(index);
    };

    const handleMouseDown = () => {
        setIsMouseDown(true);
    };

    const handleMouseUp = () => {
        setIsMouseDown(false);
    };

    return (
        <div className="d-flex align-items-center" style={{ gap: 30 }}>
            {randomVisibleCards.map((card, index) => (
                <motion.div
                    key={index}
                    className="d-flex align-items-center"
                    style={{
                        margin: '0 auto',
                        width: index === currentIndex ? 350 : 300,
                        transition: 'width 0.3s ease',
                        cursor: isMouseDown ? 'grabbing' : 'pointer'
                    }}
                    whileHover={{ rotate: 5 }} // Rotación al pasar el mouse sobre la carta
                    whileTap={{ rotate: 5 }} // Rotación al mantener presionada la carta
                    onMouseEnter={() => handleCardHover(index)}
                    onMouseLeave={() => handleCardHover(1)}
                    onMouseDown={handleMouseDown}
                    onMouseUp={handleMouseUp}
                    animate={{
                        scale: [1, 2, 2, 1, 1],
                        rotate: [5, 0, 5, 5, 0],
                    }}
                >
                    <motion.img
                        src={card?.images?.large}
                        alt={`Imagem da carta ${card.name}`}
                        style={{ width: '100%' }}
                    />
                </motion.div>
            ))}
        </div>
    );
};

export default CarouselCard;
