import NameList from './components/NameList'
import Button from './components/Button'
import  { useState } from 'react'

function App() {
  const [pokémon, setPokémon] = useState([])

  const fetchPokémon = (e) => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=898')
      .then(res => res.json())
      .then(res => setPokémon(res.results))
  }
  return (
    <div className="container">
      <Button onClick={fetchPokémon} />
      <NameList mons={pokémon}/>
    </div>
  );
}

export default App;
