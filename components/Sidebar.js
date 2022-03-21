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
            Índice
            </a>
        </Link>
      </li>
      <li className="list-tab">
       <Link  href="/basic"> 
        <a className="p-link" >
        Consulta por Palabras Claves
        </a>    
       </Link>
        </li>
      <li className="list-tab">
       <Link  href="/User"> 
        <a className="p-link" >
        Consulta por Usuario
        </a>            
       </Link>
        </li>
        <li className="list-tab">
       <Link  href="/Time"> 
        <a className="p-link" >
        Consulta por Ventana de Tiempo
        </a>            
       </Link>
        </li>
        <li className="list-tab">
       <Link  href="/Trends"> 
        <a className="p-link" >
          Consulta de Tendencias por País
        </a>            
       </Link>
        </li>
      </ul>
       
      </div>
    </>
   )
};