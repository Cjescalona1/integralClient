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
                                        <h5 className="card-title">Consulta por Palabras Claves</h5>
                                        <p className="card-text">Consulta básica asociada a una palabra o conjunto de palabras</p>
                                        <br/> 
                                        <br/> 
                                        <br/> 
                                        <br/>
                                       <div className="containerB">
                                            <Link className="" href="/basic">
                                            <a  className="btn btn-primary">Ir a consulta</a>
                                            </Link>
                                        </div>

                                    </div>
                                </div>
                                 
                                <div className="card cardElement" >
                                    <div className="card-img-top ULogo imgT imgUser"> </div>
                                    <div className="card-body">
                                        <h5 className="card-title">Consulta por Usuario</h5>
                                        <p className="card-text">Consulta relacionada a un usuario en la red, además de incluir palabras clave en la búsqueda</p>
                                        <br/> 
                                        <br/> 
                                        <br/> 
                                        <div className="containerB">
                                        <Link className="centerB" href="/User">
                                         <a  className="btn btn-primary">Ir a consulta</a>
                                        </Link>
                                        </div>

                                    </div>
                                </div>
                                <div className="card cardElement" >
                                    <div className="card-img-top ULogo imgT imgCalendar"> </div>
                                    <div className="card-body">
                                        <h5 className="card-title">Consulta por Ventana de Tiempo</h5>
                                        <p className="card-text">Consulta asociada a un conjunto de palabras claves para una ventana de tiempo y a un usuario específico</p>
                                           <br/> 
                                           <br/> 
                                        <div className="containerB">
                                        <Link className="centerB" href="/Time">
                                             <a  className="btn btn-primary">Ir a consulta</a>
                                        </Link>    
                                        </div>
                                       
                                    </div>
                                </div>
                                <div className="card cardElement" >
                                    <div className="card-img-top ULogo imgT imgTrend "> </div>
                                    <div className="card-body">
                                        <h5 className="card-title">Consulta de Tendencias por País</h5>
                                        <p className="card-text">Consulta asociada a las tendencias disponibles para un país específico
                                        <br/>
                                        <br/>
                                        <br/>
                                        <br/>
                                        <br/>
                                        </p>
                                        <div className="containerB">
                                            <Link className="centerB" href="/Trends">
                                            <a  className="btn btn-primary">Ir a consulta</a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>


                                </div>
                           
                           </div>
                    </div>
                </div>
            </div>  
    )    
} 