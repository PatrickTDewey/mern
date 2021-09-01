import './App.css';
import MyNewComponent from './components/MyNewComponent'
import LightSwitch from './components/LightSwitchComponent';

function App() {
  return (
    <div className="App">
      <MyNewComponent header={"Header Prop"}>
        <p>This is a child</p>
        <p>This is another child</p>
        <p>This is the third child</p>
        {/* <button onClick={() => alert('This button has been clicked')}>Click Me!</button> */}
        
      </MyNewComponent>
      <LightSwitch/>
      {/* 
          onChange - an event that runs when a form input is changed
          onSubmit - an event that runs when a form is submitted
          onFocus - an event that is run when an element is given focus (clicked on or tabbed to)
          onBlur - - an event that is run when an loses element focus (the user clicked away)  
      */}
    </div>

  );
}

export default App;
