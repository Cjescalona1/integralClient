import { useState } from "react";
import { Spinner, FormGroup, Label, Input,   Button,Table  } from "reactstrap";
import ReactDatePicker  from "react-datepicker";
import CsvDownload from 'react-json-to-csv';
 
 


export default function TimeFetch(){
const [val, setval] = useState('');
const [data, setdata] = useState('');
const [user, setuser] = useState('');
const [band,setBand] =useState(false);
let  URL= " "; 
var d = new Date(); 
var ed = new Date(); 
d.setDate(d.getDate()-6); 
ed.setDate(ed.getMinutes()-1); 
const [startDate, setStartDate] = useState(new Date());
const [endDate, setEndDate] = useState(new Date());
function changeInput(inp){  
  setdata(inp);  
}
function changeUser(inp){  
  setuser(inp); 
  setuser(inp)
} 

async function fetchCall( ){  
  setBand(true) 
    if (user !== undefined){
      URL = `http://localhost:9000/timeFetch?` 
      URL = URL+`query=${data}`;
      URL = URL+`&from=${user}`;
      URL = URL+`&date1=${startDate.toISOString()}`;
      URL = URL+`&date2=${endDate.toISOString()}`;
    }  

  await fetch(URL, {
    method:'get' }  )
  .then(res => res.json())
  .then(res => setval(res))  
  .catch(e=>{console.log(e)})  
 setBand(false);
} 



const [startDate2, setStartDate2] = useState(new Date());
const [endDate2, setEndDate2] = useState(null);
const onChange = (dates) => {
  const [start, end] = dates;
  setStartDate(start);
  setEndDate(end); 
};

  
    return(
        <>


        <div className="center"> 
          <h1>
        
          Consulta de Tiempo
          </h1>
            <p>
              Consulta asociada a un cojunto de palabras 
              incluyendo el lapso a consultar limitando fecha de inicio y final en la misma.<br/>
              Esta debe estar dentro de la ultima semana a la fecha de consulta.  
            </p>
   
        <form>
          <FormGroup >
            <Label className="mt-2"> <h5> Valores de Consuta </h5> </Label> 
            <Input type="text" name="inp" value={data} onChange={(e)=>{changeInput(e.target.value) }}> </Input>
            <Label className="mt-3" > <h5> Usuario </h5> </Label> 
            <Input type="text" name="name" value={user} onChange={(e)=>{changeUser(e.target.value) }}> </Input>
          
            <div className="row mt-4 " >
            
            <ReactDatePicker
              selected={startDate}
              onChange={onChange}
              startDate={startDate}
              endDate={endDate}
              selectsRange
              inline
              minDate={d}  maxDate={new Date()}  
              
            />

            </div>
          </FormGroup> 
        </form>
        <div className="App">
            <header className="App-header"> 
            <div className="buttons">
            <Button disabled={band} onClick={()=>{fetchCall()}}>Buscar</Button>  
            
            { val.data &&
             <CsvDownload  data={val.data} className="migButton" > Migrar</CsvDownload> 
            }         
            </div>
            <ol className="ol-res">  
           
            {val?<> 
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
            Loading...
            </Spinner>:<></>
          }
         
         </>} 


            </ol>
            </header>

        </div>
        </div> 
       
        </>
    )
};


