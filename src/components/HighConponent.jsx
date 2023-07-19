import { useState } from "react"
import NamberChange from "./NamberChange"
import NumberShow from "./NumberShow"



const HighConponent = () => {

const [ number, setNumber] = useState("00000")

  return (
    <div className="text-center mt-5">
        

      {number}

         <NumberShow number={number}/>
        <NamberChange setNumber={setNumber}/>
        </div>
  )
}

export default HighConponent