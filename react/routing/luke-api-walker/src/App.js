import { useState, useEffect } from 'react'
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom"
import axios from 'axios'
import People from './components/People'
import Planets from './components/Planets'
import Form from './components/Form'


function App() {
  const [query, setQuery] = useState([])
  const [result, setResult] = useState([])
  const queryInfo = (data) =>  setQuery(data)


  useEffect(() => {
    let check = {...query}
    if (check.search) {
      axios.get(`https://swapi.dev/api/${check.search}/${check.id}`)
        .then(res => setResult(res.data))
    } 
  }, [query])
  console.log(result);
  return (
    <div className="container">
      <BrowserRouter>
      <Form onSubmit={queryInfo}/>
        <Switch>
          <Route  path="/people/:id">
            <People person={result}/>
          </Route>
          <Route path="/planets/:id">
            <Planets planet={result}/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
