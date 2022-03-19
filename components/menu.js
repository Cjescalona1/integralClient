import { Card, CardBody, Row,Col,Title } from "reactstrap"
import Link from "next/link"

export default function Menu(){
    return(
            <div className="menu-container">
                <div className="menu-grid">
                    <div className="menu-option">   
                           <div className="container">
                                <div className="cards">


                                <div className="card cardElement" >
                                    <div className="card-img-top ULogo imgT imgLupa"> </div>
                                    <div className="card-body">
                                        <h5 className="card-title">Consulta Basica</h5>
                                        <p className="card-text">Consulta basica asociada a una palabra o conjunto de palabras</p>
                                        <br/> 
                                        <br/> 
                                        <br/> 
                                        <br/>
                                        <Link href="/basic">
                                         <a  className="btn btn-primary">Ir a consulta</a>
                                        </Link>
                                    </div>
                                </div>
                                 
                                <div className="card cardElement" >
                                    <div className="card-img-top ULogo imgT imgUser"> </div>
                                    <div className="card-body">
                                        <h5 className="card-title">Consulta de Usuario</h5>
                                        <p className="card-text">Consulta relacionada a un usario en la red  , ademas de incluir palabras clave en la busqueda</p>
                                        <br/> 
                                        <br/> 
                                        <br/> 
                                        <Link href="/User">
                                         <a  className="btn btn-primary">Ir a consulta</a>
                                        </Link>

                                    </div>
                                </div>
                                <div className="card cardElement" >
                                    <div className="card-img-top ULogo imgT imgCalendar"> </div>
                                    <div className="card-body">
                                        <h5 className="card-title">Consulta por tiempo</h5>
                                        <p className="card-text">Consulta asociada a un lapso especifico , referente a un usuario , ademas de poder incluir palabras clave a la busqueda</p>
                                           <br/> 
                                        <Link href="/Time">
                                             <a  className="btn btn-primary">Ir a consulta</a>
                                        </Link>    
                                       
                                    </div>
                                </div>
                                <div className="card cardElement" >
                                    <div className="card-img-top ULogo imgT imgTrend "> </div>
                                    <div className="card-body">
                                        <h5 className="card-title">Consulta de Tendencias</h5>
                                        <p className="card-text">Consulta de tendencias y TT realcionados a un pais especifico , señalando ademas la cantidad de tweets referentes a la tendencia</p>
                                        <Link href="/Trends">
                                         <a  className="btn btn-primary">Ir a consulta</a>
                                        </Link>
                                    </div>
                                </div>


                                </div>
                           
                           </div>
                    </div>
                </div>
            </div>  
    )    
} 