import { useState } from "react"




const Counterr = () => {

    const [ count, setCount] = useState(0)
    const handleClick=(e)=>{
        setCount(count + 1)
    }
  return (
    <div>
        
        
  <p>buttona tıklandı:{count}</p>  

  <button onClick={handleClick}>artır</button>

  <button onClick={()=>setCount(count - 2)}>azalt</button>
        
        
</div>
  )
}

export default Counterr