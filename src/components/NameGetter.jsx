import { useState } from "react";




const NameGetter = () => {

    const [name,setName]=useState(0);
    const handleChange =(e)=>{
        setName(e.target.value)
    }
    
  return (
    <div className="text-center mt-4 ">

<div>isminizi giriniz: </div>
    <input type="text" value={name} onChange={handleChange} /> 
    <button onClick={()=>setName("")}>temizle</button>
    <div>isminiz:{name}</div>   
    </div>
  )
}

export default NameGetter;