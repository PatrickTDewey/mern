// import React from 'react';
// import StyledBox from './components/StyledBox';


// function App() {
//   return (
//     <div className="App">
      
//         <StyledBox bgColor="red" />
//         <StyledBox bgColor="blue" height="200px" />

//     </div>
//   );
// }

// export default App;
import React from 'react';
 
import { Provider } from 'styletron-react';
import StyledBox from './components/StyledBox';
import StyleTronBox from './components/StyleTron';
import { Client as Styletron } from 'styletron-engine-atomic';
 
const engine = new Styletron();
 
function App() {
    return (
        <Provider value={engine}>
            <StyledBox bgColor="red" />
            <StyledBox bgColor="blue" height="200px" />
            <StyleTronBox bgColor='black' minWidth='800px'/>
        </Provider>
    )
}
 
export default App;
