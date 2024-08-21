import './App.css';
import Nav from './components/NavBar/Nav';
import Homepage from './components/StartPage/Homepage';
import Skills from './components/Content/Skills';
import ParticleBg from './components/Core/ParticleBg'
import Projects from './components/Content/Projects';

import menuImg from './components/Images/RestaurantProject/Restaurant Menu.png'
import dashboardImg from './components/Images/RestaurantProject/Dashboard.png'
import dashboardTwoImg from './components/Images/RestaurantProject/DashboardTwo.png'
import waiterImg from './components/Images/RestaurantProject/WaiterApp.png'
import kitchenImg from './components/Images/RestaurantProject/Kitchen.png'


const projectObjectRestaurant = {
  technologyUsed:['Django ', 'RestApi ', 'React '],
  name:"Restaurant App",
  imagesAndTextObjects:[
    {
      alt:"menu",
      textEng:"menu",
      textPl:"menu ",
      image:menuImg
    },
    {
      alt:"dashboard",
      textEng:"dashboard",
      textPl:"dashboard",
      image:dashboardImg
    },
    {
      alt:"dashboard",
      textEng:"dashboard two",
      textPl:"dashboard dwa",
      image:dashboardTwoImg
    },
    {
      alt:"waiter",
      textEng:"waiter",
      textPl:"kelner",
      image:waiterImg
    },
    {
      alt:"kitchen",
      textEng:"kitchen",
      textPl:"kuchnia",
      image:kitchenImg
    },
  ]
}

const comercialProjects = {
  technologyUsed:['Vanilla JS'],
  name:"WebGames",
  imagesAndTextObjects:[
    {
      alt:"menu",
      textEng:"menu",
      textPl:"menu ",
      image:menuImg
    },
    {
      alt:"dashboard",
      textEng:"dashboard",
      textPl:"dashboard",
      image:dashboardImg
    },
    {
      alt:"dashboard",
      textEng:"dashboard two",
      textPl:"dashboard dwa",
      image:dashboardTwoImg
    },
    {
      alt:"waiter",
      textEng:"waiter",
      textPl:"kelner",
      image:waiterImg
    },
    {
      alt:"kitchen",
      textEng:"kitchen",
      textPl:"kuchnia",
      image:kitchenImg
    },
  ]

}




function App() {
  const projectList = [
    projectObjectRestaurant,
    comercialProjects
  ]
  return (
    <div className='scroll-behavior: auto '>
      <ParticleBg/>
      <div className="relative z-10 min-h-screen ">
        <Nav />
        <Homepage id={'home'}/>
        <Skills skillsId={'skills'}/>
        <Projects projectId={'project'} projectList={projectList}/>
      </div>
    </div>
  );

}

export default App;
