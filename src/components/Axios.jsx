import axios from "axios"
import {useEffect, useState } from "react"





const Axios = () => {

  const [ veri,setVeri]=useState("");
  const [id,setId] =useState(1)

  useEffect(() => {
  
    
     axios.get("https://jsonplaceholder.typicode.com/posts")
    .then(res=>setVeri(res.data[id].title))
    .catch(err=>console.log(err))
  }, [veri,id])
  
  return (
    <div>
      
      <h1>{veri}</h1>
  
  
  <p>

    <input type="text" value={id} onChange={(e)=>setId(e.target.value)}/>
  </p>
    
      </div>
  )
}

export default Axios