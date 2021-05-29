import './App.css';
import About from './components/About';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
//scroll to top
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/projects" component={Projects}/>
          <Route exact path="/about" component={About}/>
          <Route exact path="/contact" component={Contact}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
