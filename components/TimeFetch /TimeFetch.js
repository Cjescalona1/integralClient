import { useState } from "react";
import { Spinner, FormGroup, Label, Input,   Button,Table  } from "reactstrap";
import ReactDatePicker,{registerLocale}  from "react-datepicker";
import CsvDownload from 'react-json-to-csv';
import es from 'date-fns/locale/es';
registerLocale("es", es);


export default function TimeFetch(){
const [val, setval] = useState('');
const [data, setdata] = useState('');
const [user, setuser] = useState('');
const [band,setBand] =useState(false);
const [dis, setDis] =useState(false);
var MS_PER_MINUTE = 60000;
var d = new Date(); 

var maxD = new Date(d - (10 * MS_PER_MINUTE));
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
  if (inp != ''){
    setDis(true)
  }else{
    setDis(false)
  }

} 

async function fetchCall( ){   
  let auxD = new Date(endDate - 5*60000) 
  setBand(true) 
    if (user !== undefined){
      //URL = `http://localhost:9000/timeFetch?` 
      URL = `https://protected-woodland-05334.herokuapp.com/timeFetch?` 
      URL = URL+`query=${data}`;
      URL = URL+`&from=${user}`;
      URL = URL+`&date1=${startDate.toISOString()}`;
      URL = URL+`&date2=${auxD.toISOString()}`;
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

      <div className="midSq"></div>

        <div className="center"> 
          <h1>
        
          Consulta por Ventana de Tiempo
          </h1><b>Descripción:</b> Consulta asociada a un conjunto de palabras claves para una ventana de tiempo y un usuario de Twitter específico.<br/>
           <b>Nota:</b> La ventana de tiempo será especificada mediante fecha de inicio y fecha de fin seleccionados del calendario mostrado y podrá descargarse en formato de archivo .csv.
            <br/>
            Es importante señalar que como máximo, el rango de tiempo abarca los siete (07) días previos a la fecha de la consulta. 
            En el campo Usuario de Twitter se debe introducir el nombre del usuario sin el símbolo <b>@</b>, para que se despliegue el conjunto de tweets resultantes. Por
            ejemplo: <b>UCarabobo</b>
        <form>
          <FormGroup >
            <Label className="mt-2"> <h5> Palabras Claves</h5> </Label> 
            <Input type="text" name="inp" value={data} onChange={(e)=>{changeInput(e.target.value) }}> </Input>
            <Label className="mt-3" > <h5> Usuario de Twitter </h5> </Label> 
            <Input type="text" name="name" value={user} onChange={(e)=>{changeUser(e.target.value) }}> </Input>
          
            <div className="row mt-4 " >
            
            <ReactDatePicker
              locale="es"
              selected={startDate}
              onChange={onChange}
              startDate={startDate}
              endDate={endDate}
              selectsRange
              inline
              minDate={d}  maxDate={maxD}  
              
            />

            </div>
          </FormGroup> 
        </form>
        <div className="App">
            <header className="App-header"> 
            <div className="buttons">
            <Button disabled={!dis} onClick={()=>{fetchCall()}}>Buscar</Button>  
            
            { val.data &&
             <CsvDownload  data={val.data} className="migButton" > Migrar</CsvDownload> 
            }         
            </div>
            <ol className="ol-res">  
           
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


            </ol>
            </header>

        </div>
        </div> 
       
        </>
    )
};


