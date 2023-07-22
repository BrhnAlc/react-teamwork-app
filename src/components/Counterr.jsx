import { useEffect ,useState } from "react";



const Counterr = () => {

const [ count, setCount] = useState(0);

 useEffect=(()=>{
    document.title =`click ${count} times`
 }, [count])
console.log(count);
  return (
    <div>   
<h1>Page Title Change</h1>
<p>You clicked {count} times.</p>
<button onClick={()=>setCount(count + 1)}>Click me</button>
    </div>
  )
}

export default Counterr