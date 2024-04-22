import { useEffect, useState } from 'react';
import PokemonCardDetail from './PokemonCardDetail';
import { Route, Routes } from 'react-router-dom';
import PokemonCardList from './PokemonCardList';
import Header from "./Header";

const PokemonTCGApp = () => {
    const [cards, setCards] = useState([]);
    const [selectedType, setSelectedType] = useState(null);

    useEffect(() => {
        const fetchPokemonCards = async () => {
            try {
                const response = await fetch("https://api.pokemontcg.io/v2/cards");
                const data = await response.json();
                // Ordenar las cartas por el número de Pokédex
                const sortedCards = data.data.sort((a, b) => {
                    // Si ambos tienen el número de Pokédex, compararlos
                    if (a.nationalPokedexNumbers && b.nationalPokedexNumbers) {
                        return a.nationalPokedexNumbers[0] - b.nationalPokedexNumbers[0];
                    }
                    // Si solo uno tiene número de Pokédex, colocarlo primero
                    if (a.nationalPokedexNumbers) return -1;
                    if (b.nationalPokedexNumbers) return 1;
                    // Si ninguno tiene número de Pokédex, mantener el orden original
                    return 0;
                });
                setCards(sortedCards);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchPokemonCards();
    }, []);

    const handleTypeChange = (type) => {
        setSelectedType(type);
    };

    const filteredCards = selectedType ? cards.filter((card) => card.types.includes(selectedType)) : cards;

    return (
        <div>
            <div>
                <Header onTypeChange={handleTypeChange} />
            </div>
            <Routes>
                <Route path="/" element={<PokemonCardList cards={cards} />} />
                <Route path="/card/:id" element={<PokemonCardDetail />} />
                <Route path='/tipo/:type' element={<PokemonCardList cards={filteredCards} />} />
            </Routes>
        </div>
    );
};

export default PokemonTCGApp;
