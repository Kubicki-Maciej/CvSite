
import './App.css';
import Nav from './components/NavBar/Nav';
import Homepage from './components/StartPage/Homepage';
import Skills from './components/Content/Skills';

function App() {
  return (
    <div className='scroll-behavior: auto'>
      <Nav />
      <Homepage id={'home'}/>
      <Skills skillsId={'skills'}/>
      
      
    </div>
  );
}

export default App;
