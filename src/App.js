

import Click from './components/Click';
import First from './components/First'
import Second from './components/Second';


const App = () => {

const name1 = "Burhan";
const age1=34;

const name2="ayşe";
const age2=32;
  return (
    <div >


      {/* <First name={name1} age={age1}/> */}
      {/* <First name={name2} age={age2}/> */}
      {/* <Second/> */}
      <Click/>
    </div>
  )
}

export default App;


