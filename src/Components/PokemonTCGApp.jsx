import { useEffect, useState } from 'react'
import PokemonCardDetail from './PokemonCardDetail';
import {  Route, Routes } from 'react-router-dom';
import PokemonCardList from './PokemonCardList';
import Header from "./Header"



const PokemonTCGApp = () => {
    const [cards, setCards] = useState([]);
    const [selectedType, setSelectedType] = useState(null)


    useEffect(() => {
        const fetchPokemonCards = async () => {
            try {
                const response = await fetch("https://api.pokemontcg.io/v2/cards");
                const data = await response.json();
                setCards(data.data)
            } catch (error) {
                console.error("Error fetching data:", error)
            }
        }
        fetchPokemonCards();
    }, [])

    const handleTypeChange = (type) =>{
        setSelectedType(type)
    }
    const filteredCards = selectedType ? cards.filter((card)=>card.types.includes(selectedType)) : cards;
    return (
        <div>
            <div>
                <Header onTypeChange={handleTypeChange}/>
            </div>
                <Routes>
                    <Route path="/" element={<PokemonCardList cards={cards} />} />
                    <Route path="/card/:id" element={<PokemonCardDetail />} />
                    <Route path='/tipo/:type' element={<PokemonCardList cards={filteredCards} />} />
                </Routes>
        </div>
    )
}

export default PokemonTCGApp