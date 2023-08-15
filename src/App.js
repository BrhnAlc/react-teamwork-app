

import { useState } from 'react';
import Click from './components/Click';
import First from './components/First'
import HighConponent from './components/HighConponent';
import NameGetter from './components/NameGetter';
import NumberShower from './components/NumberShower';
import Second from './components/Second';
import LoginForm from './components/LoginForm';
import UseEffect from './components/UseEffect';
import Users from './components/Users';
import HomePages from './components/PAGES/HomePages';
import Axios from './components/Axios';


const App = () => {

  

  return (
    <div className=' container text-center ' style={{marginTop:"10rem"}}>
  

      {/* <First name={name1} age={age1}/> */}
      {/* <First name={name2} age={age2}/> */}
      {/* <Second/> */}
      {/* <Click/> */}
      {/* <NameGetter/> */}
      {/* <HighConponent/> */}
      {/* <NumberShower name={"Burhan"}/> */}
      {/* <button onClick={handleEkle}>Ekle</button> */}
      {/* <LoginForm/> */}

      {/* <UseEffect/> */}
      {/* <Users/> */}
      {/* <HomePages/> */}
      <Axios/>
    </div>
  )
}

export default App;


