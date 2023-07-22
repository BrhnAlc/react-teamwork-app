import { useEffect } from "react";
import { useState } from "react";




const UseEffect = () => {

const [ number, setNumber] = useState(0);

useEffect(()=>{
    console.log(number);
},[number]);

  return (
    <div>
        {number}
      <div>
      <button onClick={()=>setNumber(Math.random())}>Değiştir</button>  
      </div>
</div>
  )
}

export default UseEffect;