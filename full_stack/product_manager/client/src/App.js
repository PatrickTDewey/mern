import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Main from './views/Main'
import Detail from './views/Detail'
import UpdateProduct from './views/UpdateProduct';
function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route path="/products/view/:id">
            <Detail />
          </Route>
          <Route path="/products/update/:id">
            <UpdateProduct />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
