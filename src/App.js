import './App.css';
import Nav from './components/NavBar/Nav';
import Homepage from './components/StartPage/Homepage';
import Skills from './components/Content/Skills';
import ParticleBg from './components/Core/ParticleBg'
import Projects from './components/Content/Projects';
import AboutMePage from './components/AboutMe/AboutMePage';

import menuImg from './components/Images/RestaurantProject/RestaurantMenu.png'
import dashboardImg from './components/Images/RestaurantProject/DashboardM.png'
import waiterImg from './components/Images/RestaurantProject/WaiterApp.png'
import kitchenImg from './components/Images/RestaurantProject/KitchenM.png'

import gameOneImgOne from './components/Images/WebGames/KoloFM.png'
import memoryImg from './components/Images/WebGames/MemoryM.png'
import finddiffranceImg from './components/Images/WebGames/ZnajdzrozniceM.png'
import wowAhImg from './components/Images/WowAh/Wow1.png'
import wowAhTwoImg from './components/Images/WowAh/Wow2.png'

import discordPanelImg from './components/Images/DiscordBotSoundPanel/discordPanelM.png'
import panelImg from './components/Images/DiscordBotSoundPanel/panelM.png'

import djangoImg from './components/Images/DjangoShop/djangoShop.png'
import djangoCartImg from './components/Images/DjangoShop/djangoCart.png'

import gameRentalImg from './components/Images/GameRental/GamesLend1.png'
import gameRentalOneImg from './components/Images/GameRental/GamesLend2.png'
import gameRentalTwoImg from './components/Images/GameRental/GamesLend3.png'

const projectObjectRestaurant = {
  technologyUsed:['Django ', 'RestApi ', 'React '],
  name:"Restaurant App",
  imagesAndTextObjects:[
    {
      alt:"menu",
      textEng:"A restaurant application, possessing three modules: waiters, kitchen and managers.",
      textPl:"Aplikacja restauracyjna, posiądająca 3 moduły: kelnerski, kuchenny i menagerski.",
      image:menuImg
    },
    {
      alt:"dashboard",
      textEng:"Dashboard for viewing restaurant data, ability to create new dishes, add new products, waiters, edit dishes.",
      textPl:"Dashboard do przeglądania danych restauracji, możliwość tworzenia nowych potraw, dodawania nowych produktów, kelnerów, edytowania potraw. ",
      image:dashboardImg
    },
    {
      alt:"waiter",
      textEng:"Waiter application, ability to create a new order, view active and historical orders.",
      textPl:"Aplikacja kelnerska, możliwość stworzenia nowego zamówienia, przeglądania aktywnych i historycznych zamówień. ",
      image:waiterImg
    },
    {
      alt:"kitchen",
      textEng:"A kitchen app in which we have orders from waiters.",
      textPl:"Aplikacja kuchenna w której mamy zamówienia od kelnerów.",
      image:kitchenImg
    },
  ]
}

const comercialProjects = {
  technologyUsed:['Vanilla JS ', 'Commercial Project'],
  name:"WebGames",
  imagesAndTextObjects:[
    {
      alt:"wheel",
      textEng:"Wheel of Fortune browser game.",
      textPl:"Gra przeglądarkowa w stylu koła fortuny.",
      image:gameOneImgOne
    },
    {
      alt:"memory",
      textEng:"Browser memory game.",
      textPl:"Gra przeglądarkowa memory.",
      image:memoryImg
    },
    {
      alt:"diffrance",
      textEng:"Find a diffrance game.",
      textPl:"Gra znajdź różnice.",
      image:finddiffranceImg
    },
  ]
}

const wowAhProjects = {
  technologyUsed:['Python ', 'Api ', 'Tkinter ', 'Beautifulsoup ', 'SQL Postgres'],
  name:"Wow Auction",
  imagesAndTextObjects:[
    {
      alt:"WowAuction",
      textEng:"Terminal/Windows program in which you can download and plot on the prices of given items in the game World Of Warcraft (INACTIVE change of data formatting by api)",
      textPl:"Terminalowy/Okienkowy program w którym można pobrać i sporzjeć na ceny danych przedmiotów w grze World Of Warcraft (NIECZYNNY zmiana formatowania danych przez api)",
      image:wowAhImg
    },
    {
      alt:"WowAuction",
      textEng:"Application where we can find prices of items",
      textPl:"Aplikacja w której możemy znaleść ceny przedmiotów",
      image:wowAhTwoImg
    },

  ]
}

const discordSoundPanel = {
  technologyUsed:['Python ', 'Api ', 'Tkinter ', 'Beautifulsoup ', 'SQL Postgres'],
  name:"DiscordBot SoundPanel",

  imagesAndTextObjects:[
    {
      alt:"DiscordBot",
      textEng:"Window application, once connected to discord, you can play music through a connected bot to the channel.",
      textPl:"Aplikacja okienkowa, po połączeniu z discordem można odtworzyć muzykę poprzez podłączonego bota do kanału. ",
      image:discordPanelImg
    },
    {
      alt:"DiscordBot",
      textEng:"Channel with bot connected.",
      textPl:"Kanał z podłączonym botem",
      image:panelImg
    },

  ]
}

const djangoShop = {
  technologyUsed:['Python ', 'Django ', 'Celery'],
  name:"Django Shop",

  imagesAndTextObjects:[
    {
      alt:"DjangoShop",
      textEng:"A simple store set up on django using the template.",
      textPl:"Prosty sklep postawiony na django wykorzystując template.",
      image:djangoImg
    },
    {
      alt:"DjangoShop",
      textEng:"Cart Shop.",
      textPl:"Koszyk sklepu.",
      image:djangoCartImg
    },
  ]
}

const gameRental = {
  technologyUsed:['Django ', 'RestApi ', 'React '],
  name:"Game Rental",
  imagesAndTextObjects:[
    {
      alt:"GameRental",
      textEng:"The intuitive interface allows you to quickly browse the available games, Rent a game for a particular user.",
      textPl:"Intuicyjny interfejs pozwala szybko przeglądać dostępne gry, Wypożyczyć grę dla danego użytkownika.",
      image:gameRentalOneImg
    },
    {
      alt:"GameRental",
      textEng:"List of users, possibility to check their rented games.",
      textPl:"Lista Użytkowników, możliwość sprawdzenia ich wypożyczonych gier.",
      image:gameRentalImg
    },

    {
      alt:"GameRental",
      textEng:"Board game review.",
      textPl:"Przegląd gier planszowych.",
      image:gameRentalTwoImg
    },
  ]
}


function App() {
  const projectList = [
    projectObjectRestaurant,
    comercialProjects,
    gameRental,
    wowAhProjects,
    discordSoundPanel,
    djangoShop
  ]
  return (
    <div className='scroll-behavior: auto '>
      <ParticleBg/>
      <div className="relative z-10 min-h-screen ">
        <Nav />
        <Homepage id={'home'}/>
        <Skills skillsId={'skills'}/>
        <Projects projectId={'project'} projectList={projectList}/>
        <AboutMePage/>        

      </div>
    </div>
  );

}

export default App;
