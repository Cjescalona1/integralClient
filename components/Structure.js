import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";


 function Structure(props){
    console.log(props.comp);
    return(
        < >
        <Header/>
        <Sidebar/>
        <props.comp/>
        <div className="corner"></div>
        </>
    )
} 
export default Structure;