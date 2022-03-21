import { useState } from "react";
import { Spinner, FormGroup, Label, Input,   Button,Table } from "reactstrap";
import CsvDownload from 'react-json-to-csv';

export default function UserFetch(){
const [val, setval] = useState('');
const [data, setdata] = useState('');
const [user, setuser] = useState('');
const [band, setBand] = useState(false);
const [dis, setDis] =useState(false);
let  URL= " ";

function changeInput(inp){  
  setdata(inp);
  //let aux = {query:inp}
  setdata(inp)
}
function changeUser(inp){  
  setuser(inp);
  //let aux = {from:inp}
  setuser(inp)
  if (inp != ''){
    setDis(true)
  }else{
    setDis(false)
  }
}
 

async function fetchCall(type){ 
  setBand(true)
    if (user !== undefined){
//      URL = `http://localhost:9000/userFetch?` 
      URL = `https://protected-woodland-05334.herokuapp.com/userFetch?` 
      
      URL = URL+`query=${data}`;
      URL = URL+`&from=${user}`;
    }  
  await fetch(URL, {
    method:'get' }  )
  .then(res => res.json())
  .then(res => setval(res))   
  .catch(e=>(console.log(e)))
  setBand(false)  
} 
  
    return(
        <>
       <div className="midSq"></div>

        <div className="center">
          <h1>
          Consulta por Usuario
          </h1>
            <p>
             Descripción:Consulta asociada a un conjunto de palabras y un usuario especifico <br/>
             ejemplo : <b>UCarabobo</b><br/>
             se puede realizar consulta de los últimos tweets referentes a el usuario dejando en blanco el campo de Valores de Consulta <br/>
            </p>
        <form>
          <FormGroup >
            <Label className="mt-2"> <h5> Palabras Claves </h5> </Label> 
            <Input type="text" name="inp" value={data} onChange={(e)=>{changeInput(e.target.value) }}> </Input>
            <Label className="mt-3" > <h5> Usuario de Twitter a consultar</h5> </Label> 
            <Input type="text" name="name" value={user} onChange={(e)=>{changeUser(e.target.value) }}> </Input>
          </FormGroup> 
        </form>
        <div className="App">
            <header className="App-header"> 
            <div className="buttons">
            <Button disabled={!dis} onClick={()=>{fetchCall(2)}}>Buscar</Button>  
            
            { val.data &&
             <CsvDownload  data={val.data} className="migButton" > Migrar</CsvDownload> 
            }         
            </div>
     {val.data?<> 
          <Table>
            <thead>
              <tr> <th>Tweets</th> </tr>
            </thead>
            <tbody>

              {val.data.map((element,index)=>( <tr key={index} > <td>{element.text}</td></tr> ))}
              
            </tbody>
          </Table>
         </>:<> 
          {band?
            <Spinner>
            Cargando...
            </Spinner>:<></>
          }
         
         </>} 
         </header>

        </div>
        </div> 
        </>
    )
};


