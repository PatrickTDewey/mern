import { Typography, Container, Link } from "@material-ui/core";
import Main from "./views/Main";
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import AddAuthor from './views/AddAuthor'
import EditAuthor from "./views/EditAuthor";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © Patrick Kinda, Check out these docs: '}
      <Link color="primary" href="https://material-ui.com">
        Material-UI Docs
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}
function App() {
  return (
    <BrowserRouter>
      <Container>
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route path='/authors/new'>
            <AddAuthor />
          </Route>
          <Route path='/authors/edit/:id'>
            <EditAuthor/>
          </Route>
        </Switch>
        <Copyright />
      </Container>
    </BrowserRouter>
  );
}

export default App;
