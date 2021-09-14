import {BrowserRouter, Route, Switch, } from 'react-router-dom'
import PlayerForm from './components/PlayerForm';
import Main from './views/Main';
import NavBar from './components/NavBar';
import PlayerStatus from './views/PlayerStatus'

//pair programmed by Patrick Dewey and Spencer Rauch

function App() {
  return (
    <div className="container">
      <BrowserRouter>
          <NavBar />
        <Switch>
          <Route exact path='/status/game/:game_id'> 
            <PlayerStatus />
          </Route>
          <Route exact path='/players/add'>
            <PlayerForm />
          </Route>
          <Route exact path='/'>
            <Main />
          </Route>

        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
