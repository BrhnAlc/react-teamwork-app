import {useEffect, useState } from "react"



const Counterr = () => {

const [ data, setData] = useState()

useEffect(() => {
const fetchData =async()=>{
    
}

  return () => {
    ;
  }
}, [])



  return (
    <div>




        <h1>API çağrısı yapma</h1>

{
data ? (

<p>Data:{JSON.stringify(data)}</p>) :
(

<p>loading data ...</p>
)
}



    </div>
  )
}

export default Counterr