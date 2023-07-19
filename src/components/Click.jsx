import { useState } from "react";





const Click = () => {
    
  const [count,setCount]=useState(0);

   const handleClick=(e)=>{
    // console.log(e);
    setCount(count + 1)

   }
   const handleKat=(e)=>{
    console.log(e);
    setCount(count * 10)
   }
  return (
    <div className="text-center mt-4 mb-4">
   <div className="mb-5">Sayaç:{count}</div> 


<button className="bg-danger m-2" onClick={()=>setCount(0)}>Sıfırla</button>
<button className="" onClick={()=>setCount(count - 1)}>Azalt</button>
<button className="text-bg-danger m-2" onClick={handleClick}>Artır</button>
<button className="text-bg-danger m-2" onClick={handleKat}>on kat artır</button>
       
</div>
  )
}

export default Click