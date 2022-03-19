import countries from "../../assets/countries"  
import { useState, useEffect } from "react";
import {Label,Table, Spinner, Alert} from "reactstrap";
import ReactPaginate from 'react-paginate';
let countr = countries.countries;
let  URL= " "; 

export default function TrendFetch(){ 
    const [trendL, setTrendL] = useState();
    const [band,setBand] = useState(false); 

    function Items({ currentItems }) { 
        return (
          <>
          { 
            currentItems &&
                <Table>
                    <thead>
                    <tr> <th>Tendencia</th>  <th>Volumen de tendencia</th> </tr>
                    </thead>
                    <tbody>
                    {currentItems.map((element,index)=>( <tr key={index} > <td>{element.name}</td> <td>{element.tweet_volume}</td> </tr> ))}
                    </tbody>
                </Table>
            }
          </>
        );
      }

////
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
        setCurrentItems(trendL.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(trendL.length / itemsPerPage));
      }, [itemOffset, itemsPerPage]);
    
    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
      const newOffset = (event.selected * itemsPerPage) % trendL.length;
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
////
    function call(e){ 
        fetchCall(countr[e.target.value])
    }

    async function fetchCall(v) {
        if (v!=undefined) {
          
          //URL = `http://localhost:9000/countryFetch?` 
          URL = `https://protected-woodland-05334.herokuapp.com/countryFetch?` 
            URL = URL+`lat=${v.latlng[0]}`;
            URL = URL+`&long=${v.latlng[1]}`;   
            console.log(URL);
            await fetch(URL,{method:'get'})
                .then(res => res.json()) 
                .then(res => (getTrends(res[0])))
                
        }
    }

    async function getTrends(v2) {

        setBand(true);     
        //let url2= "http://localhost:9000/trendListFetch"
        let url2= "https://protected-woodland-05334.herokuapp.com/trendListFetch"
        url2= url2+`?id=${v2.woeid}` 

        await fetch(url2, { method:'get' }  )
        .then(res => res.json())
        .then(res =>setTrendL(res[0].trends))   
        setBand(false)
    }
    trendL?console.log(trendL):console.log("not yet");
    return(
        <>
        <div className="center">
            <h1>
            Consulta de tendencias
            </h1>
                <p>
                Consulta asociada referente a las tendencias disponibles para un pais en especifico<br/>
                se debera elegir el pais a consultar para el cual se mostraran los <b>TRENDING TOPICS</b> en el momento de la consulta <br/>
                estos podran ser consultados de manera individual para posteriormente ser migrados para su mejor manejo. 
                </p>
        <div className="mt-2">
            <Label> <h5>Pais</h5> </Label> <br/>
        </div>
            <select onChange={(e)=>{call(e)}} > 
            <option></option>
            {
                countr.map((a,index)=>(
                    <option value={index} key={index} >
                    {a.name}  
                </option>
                ))
            }
            </select>
            {trendL?
                <> 
 
                <PaginatedItems itemsPerPage={10}/>
                </> :
                <> 
                {band?
                <Spinner>
                Loading...
                </Spinner>:<></>
                }
                </>}

        </div>
        </>
    )
}
