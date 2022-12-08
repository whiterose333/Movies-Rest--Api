import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './components/Home';
import Detail from './components/Detail';
import NavBar from './components/Navbar';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path='/home' component={Home} />
          <Route exact path='/movie/:id' component={Detail} />

        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
