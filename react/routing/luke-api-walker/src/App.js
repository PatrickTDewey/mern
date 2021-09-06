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
  return (
    <div className="container">
      <BrowserRouter>
      <Form />
        <Switch>
          <Route  path="/people/:id">
            <People />
          </Route>
          <Route path="/planets/:id">
            <Planets />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
