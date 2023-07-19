import { useState } from "react"




const LoginForm = () => {

const [ userName, setUserName] = useState("0")
const [ password , setPassword ] = useState("0")



  return (
    <div className="mt-5">
        
        <div className="mb-4">KUllanıcı Adı : <input value={userName} type="text" onChange={(e)=>setUserName(e.target.value)} />  </div>
       <div className="mb-4"> Parola :  <input type="text" value={password} type={"password"} onChange={(e)=>setPassword(e.target.value)} />  </div>
        
     <div>   <button>Giriş Yap</button>  </div>
        
        
        </div>
  )
}

export default LoginForm