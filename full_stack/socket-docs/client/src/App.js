import Main from './views/Main'
import NavBar from './views/NavBar';
import { Container } from "@material-ui/core";
import { Route, Switch, BrowserRouter, Link } from 'react-router-dom'
import Chat from './components/Chat';

function App() {

  return (
    <BrowserRouter>
    <NavBar />
    <Switch>
    <Container>
      <Route path='/'>
        <Main />
      </Route>
      <Route path='/:room1'>
        <Chat />
      </Route>
      <Route path='/room2'>
        <Main />
      </Route>
      <Route path='/room3'>
        <Main />
      </Route>
    </Container>
    </Switch>
    </BrowserRouter>
  );
}

export default App;
