





const NamberChange = (props) => {

const handleChange=()=>{

    props.setNumber("123456")
}
const handleClear=()=>{
    props.setNumber(0)
}

  return (
    <div className="mt-4">
        
        
        <button onClick={handleChange}>değiştir</button>
        <button onClick={handleClear}>temizle</button>
        
        </div>
  )
}

export default NamberChange

