import NameList from './components/NameList'
import Button from './components/Button'
import  { useState } from 'react'
import axios from 'axios'

function App() {
  const [pokémon, setPokémon] = useState([])

  const fetchPokémon = (e) => {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=898')
     .then(res => setPokémon(res.data.results))
    console.log(pokémon);
  }
  return (
    <div className="container">
      <Button onClick={fetchPokémon} />
      <NameList mons={pokémon}/>
    </div>
  );
}

export default App;
