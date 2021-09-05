import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
import FormWrapper from "./components/FormWrapper";
function App() {
  

  return (
    <div className="container">
        <Wrapper>
          <Navbar />
          <FormWrapper />
        </Wrapper>
    </div>
  );
}

export default App;
