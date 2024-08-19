import logo from './logo.svg';
import './App.css';
import Nav from './components/NavBar/Nav';
import Homepage from './components/StartPage/Homepage';
import Skills from './components/Content/Skills';

function App() {
  return (
    <div className=''>
      <Nav />
      <Homepage />
      <Skills/>
      
    </div>
  );
}

export default App;
