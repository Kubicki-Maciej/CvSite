
import './App.css';
import Nav from './components/NavBar/Nav';
import Homepage from './components/StartPage/Homepage';
import Skills from './components/Content/Skills';
import ParticleBg from './components/Core/ParticleBg'



function App() {

  return (
    <div className='scroll-behavior: auto'>
      <ParticleBg/>
      <div className="relative z-10 min-h-screen ">
        <Nav />
        <Homepage id={'home'}/>
        <Skills skillsId={'skills'}/>
      </div>
    </div>
  );
}

export default App;
