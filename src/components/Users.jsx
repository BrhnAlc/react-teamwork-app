import { useState , useEffect } from "react";

const Users = () => {

    const [ users, setUsers] = useState(useState([]))

const getData = ()=>{
 
    const url ="https://jsonplaceholder.typicode.com/users"
    fetch(url)
    .then((res)=>res.json())
    .then((data)=>setUsers(data))
}
console.log(users);

  useEffect(()=>{

    getData();
  }, [])

  return (
    <div>Users</div>
  )
}

export default Users