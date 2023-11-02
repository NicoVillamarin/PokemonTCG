
import PokemonTCGApp from './Components/PokemonTCGApp'
import PokemonCardDetail from './Components/PokemonCardDetail'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="*" element={<PokemonTCGApp />} />
        <Route path="/card/:id" element={<PokemonCardDetail />} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
