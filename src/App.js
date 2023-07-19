

import { useState } from 'react';
import Click from './components/Click';
import First from './components/First'
import HighConponent from './components/HighConponent';
import NameGetter from './components/NameGetter';
import NumberShower from './components/NumberShower';
import Second from './components/Second';


const App = () => {

  const [arr,setArr] =useState( ["burhan", "ayşe" ,"mehmet", "sıdıka"])

  const handleEkle=()=>{
    const tempArr=[...arr]
    tempArr.push("can")
    setArr(tempArr);
  }

  return (
    <div className='text-center mt-4'>
  {arr.map((name)=>{
    return <NumberShower key={name} name={name}  />;
  })}

      {/* <First name={name1} age={age1}/> */}
      {/* <First name={name2} age={age2}/> */}
      {/* <Second/> */}
      {/* <Click/> */}
      {/* <NameGetter/> */}
      {/* <HighConponent/> */}
      <NumberShower name={"Burhan"}/>
      <button onClick={handleEkle}>Ekle</button>
    </div>
  )
}

export default App;


