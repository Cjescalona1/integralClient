/*Sidebar*/ 
import Link from "next/link"

 

export default function Sidebar(){
  return(
    <>  
      <div className="sidebar"> 
   
      <ul className="ul-z">
      <li className="list-tab">
        <Link href="/">
            <a className="p-link" >
            Indice
            </a>
        </Link>
      </li>
      <li className="list-tab">
       <Link  href="/basic"> 
        <a className="p-link" >
            Consulta Basica
        </a>    
       </Link>
        </li>
      <li className="list-tab">
       <Link  href="/User"> 
        <a className="p-link" >
            Consulta de Usuario
        </a>            
       </Link>
        </li>
        <li className="list-tab">
       <Link  href="/Time"> 
        <a className="p-link" >
            Consulta de Tiempo
        </a>            
       </Link>
        </li>
        <li className="list-tab">
       <Link  href="/Trends"> 
        <a className="p-link" >
            Tendencias por País

        </a>            
       </Link>
        </li>
      </ul>
       
      </div>
    </>
   )
};