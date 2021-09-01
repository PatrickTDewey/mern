import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component {
  render() {
    return (
      < >
        <h1 className='my-class'>Hello World</h1>
        <p>Hi oh</p>
        <div className="form-group">
        <form action='/process' method="post">
          <label htmlFor="email">Email:</label>
          <input type="text" id="email" name="username" class="form-control"/>
        </form>

        </div>
      </>
    );
  }
}

export default App;
