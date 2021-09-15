import Main from './views/Main'
import NavBar from './views/NavBar';
import { Container } from "@material-ui/core";

function App() {

  return (
    <Container>
      <NavBar />
      <Main />
    </Container>
  );
}

export default App;
