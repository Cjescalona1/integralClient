import { useState } from "react";
import { Form, FormGroup, Label, Input, Title , FormText, Button } from "reactstrap";


export default function Basic(){
const [val, setval] = useState('');
const [data, setdata] = useState('');
const [bodyVal, setBodyVal] =useState({query:""})   
let  URL= " ";
function change(inp){  
  setdata(inp);
  let aux = {query:inp}
  setBodyVal(aux)
}
function setfetch(val){
  bodyVal.query=val
}

async function fetchCall( ){   
      URL = `http://localhost:9000/basicFetch?` 
      
      URL = URL+`query=${bodyVal.query}`;
     
  await fetch(URL, {
    method:'post' }  )
  .then(res => res.json())
  .then(res => setval(res))   

} 
  
    return(
        <>
        <div className="center ">
          <h1>
          Basic Fetch
          </h1>
            <p>
              Consulta basica asociada a la palabra o el conjunto de palabras sugerido en la busqueda. 
            </p>
        <form>
          <FormGroup >
            <Input type="text" value={data} onChange={(e)=>{change(e.target.value) }}> </Input>
          </FormGroup> 
        </form>
        <div className="App">
            <header className="App-header"> 
            <div>
            <Button  onClick={()=>{ fetchCall()}}>clean fetch</Button>  
        
     </div> 
            <ol className="ol-res">  
            {val.data?<>
                    {val.data.map((i)=>(
                    <li className="li" key={i.id} >
                        {i.text}
                    </li>
                    ))}
                    </> 
            :
            <> </> }
            </ol>
            </header>

        </div>
        </div> 
        </>
    )
};


