import {
  BrowserRouter,
  Link,
  Switch,
  Route,
  useParams
} from "react-router-dom"

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <h1>Routing Example</h1>
        <p>
          <Link to="/">Home</Link>
          &nbsp;|&nbsp;
          <Link to="/about">About</Link>
        </p>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route exact path="/:number" component={Num} />
          <Route path="/:word/:color/:bg" component={Word} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
const Home = () => <h1>Home Route</h1>
const About = () => <h1>About Route</h1>
const Num = () => {
  const { number } = useParams()
  return (
    isNaN(number) ? <h1>The word is {number}</h1> : <h1>The number is {number}</h1>
  )
}
const Word = () => {
  const {word, color, bg} = useParams()
  
  return(
    isNaN(word)?<h1 style={{color: color, backgroundColor: bg, padding: '10px' }}>The Word is {word}</h1>:<h1>The number is {word}</h1>
  )
}

export default App;
