import { Paper } from '@material-ui/core'
import { Card, CardContent, CssBaseline } from '@material-ui/core'
import { Button } from '@material-ui/core'
import './App.css'
import Form from './views/Form'
function App() {
  return (
    <CssBaseline>
      <div className="App">
        <Paper elevation={3}>
          <h1>H1 tag inside Paper component.</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid sint a ut numquam distinctio dicta doloremque error expedita? Sapiente, in exercitationem voluptates nostrum voluptate explicabo tenetur repellendus iusto unde, ipsum iure tempore hic, impedit cumque quam magnam ut itaque et dolore expedita porro nulla? Pariatur enim iste totam dolorum iure?</p>
        </Paper>
        <Card>
          <CardContent>
            <h1>This is content within my card</h1>
            <Button>This is a button in a card</Button>
          </CardContent>
        </Card>
        <Form />
      </div>
    </CssBaseline>
  );
}

export default App;
