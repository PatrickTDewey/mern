import './App.css';

import PersonCard from './components/PersonCardComponent';

function App() {
  return (
    <div className="App">
      {/* <MyNewComponent someText={"Hello World"} anotherProp={54} />
      <HeaderComponent firstName={"Patrick"} lastName={"Dewey"} /> */}
      <PersonCard firstName={"Jane"} lastName={"Doe"} age={45} hairColor={"Black"}/>
      <PersonCard firstName={"John"} lastName={"Smith"} age={88} hairColor={"Brown"}/>
      <PersonCard firstName={"Millard"} lastName={"Fillmore"} age={50} hairColor={"Brown"}/>
      <PersonCard firstName={"Maria"} lastName={"Smith"} age={62} hairColor={"Brown"}/>
    </div>
  );
}

export default App;
