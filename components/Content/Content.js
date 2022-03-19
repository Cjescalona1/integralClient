import { useState, useEffect } from "react";
import {  FormGroup,  Input,  Button, Table , Spinner, Label,Modal,ModalHeader,ModalBody,ModalFooter } from "reactstrap";
import CsvDownload from 'react-json-to-csv';
import ReactPaginate from 'react-paginate';


export default function Content(){
const [list, setlist] = useState(''); 
const [data, setdata] = useState('');
const [bodyVal, setBodyVal] =useState({query:""})   
const [band, setBand] = useState(false)
let  URL= " ";


function Items({ currentItems }) { 
  return (
    <>
    { 
      currentItems &&
      <Table>
        <thead>
          <tr> <th>Usuario</th> <th>Tweet</th> </tr>
        </thead>
        <tbody>

          {currentItems.map((element,index)=>(<tr key={index} ><td>{element.user}</td><td>{element.tweet}</td></tr>))}
          
        </tbody>
      </Table>
      }
    </>
  );
}


function PaginatedItems({ itemsPerPage }) {
  // We start with an empty list of items.
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);
  useEffect(() => {
      // Fetch items from another resources.
      const endOffset = itemOffset + itemsPerPage;
      console.log(`Loading items from ${itemOffset} to ${endOffset}`);
      setCurrentItems(list.slice(itemOffset, endOffset));
      setPageCount(Math.ceil(list.length / itemsPerPage));
    }, [itemOffset, itemsPerPage]);
  
  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % list.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <>
      <Items currentItems={currentItems} />
      <ReactPaginate
      breakLabel="..."
      nextLabel="next >"
      onPageChange={handlePageClick}
      pageRangeDisplayed={5}
      pageCount={pageCount}
      previousLabel="< previous"
      renderOnZeroPageCount={null}
      breakClassName={'page-item'}
      breakLinkClassName={'page-link'}
      containerClassName={'pagination'}
      pageClassName={'page-item'}
      pageLinkClassName={'page-link'}
      previousClassName={'page-item'}
      previousLinkClassName={'page-link'}
      nextClassName={'page-item'}
      nextLinkClassName={'page-link'}
      activeClassName={'active'}
      />
    </>
  );
}


function change(inp){  
  setdata(inp);
  let aux = {query:inp}
  setBodyVal(aux)
} 
function buildList(val){ 
  let auxVal = val.data;
  let auxUser = val.includes.users ;
  let ret=[]; 
  if (auxVal!= undefined) {
  auxVal.map( (v, index)=>{
    let par={user:'' , tweet:''};
      par.tweet= v.text;
      auxUser.map(u=>{ 
        if(v.author_id == u.id ){
          par.user=u.name
        }
      }) 

      ret.push(par);
  })
  setlist(ret); 
  }
}

async function fetchCall( ){ 
      setBand(true);  
      //URL = `http://localhost:9000/basicFetch?`  
      URL = `https://protected-woodland-05334.herokuapp.com/basicFetch?`  
      
      URL = URL+`query=${bodyVal.query}`;
     
  await fetch(URL, { method:'post'})
        .then(res => res.json()) 
        .then(res => buildList(res)) 
        .catch(e=>(console.log(e)))
       setBand(false) 
} 
  
    return(
        <>
        <div className="center">
          <h1>
          Consulta Basica
          </h1>
            <p>
              Consulta basica asociada a la palabra o el conjunto de palabras sugerido en la busqueda. 
            </p>
        <form>
          <FormGroup >
          <Label className="mt-2"> <h5> Valores de Consuta </h5> </Label> 
          <Input   value={data} onChange={(e)=>{change(e.target.value) }}> </Input>
          </FormGroup> 
        </form>
        <div className="App">
            <header className="App-header"> 
            <div>
             <div className="buttons">
            <Button disabled={band} onClick={()=>{fetchCall()}}>Buscar</Button>  
            
            { list &&
             <CsvDownload  data={list} className="migButton" > Migrar</CsvDownload> 
            }         
            </div>
        
         </div> 

        {list?<> 
         {/* <Table>
            <thead>
              <tr> <th>Usuario</th> <th>Tweet</th> </tr>
            </thead>
            <tbody>

              {list.map((element,index)=>(<tr key={index} ><td>{element.user}</td><td>{element.tweet}</td></tr>))}
              
            </tbody>
         </Table>*/}

          < PaginatedItems itemsPerPage={10} className="center"/>
          </>:
        <> 
          {band?
            <Spinner>
            Loading...
            </Spinner>:<></>
          }
        </>}
      </header>
        </div>
        </div> 
        </>
    )
};


