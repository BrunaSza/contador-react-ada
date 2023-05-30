import { useState } from "react"
import './contador.css'



export default function Contador() {

  const [contador, setContador] = useState(0);
  
  function heartUp(){
    setContador(contador + 1)

  }
  return(
    <div className="container">

      <button className='buttonUp' onClick={heartUp}></button>
      <span>
        Você clicou {contador} hearts!
      </span>

    </div>
  )
  
}