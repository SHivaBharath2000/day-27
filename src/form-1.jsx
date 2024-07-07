import Data from "./data";
import axios from "axios";

import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./App.css";
import { useContext } from "react";
import { counterContext } from "./App";

function Olddata() {
  //update the record in api
  const {setData,data,update,setEmpty,load,reLoad}=useContext(counterContext)
 useEffect(()=>{
  if(load){}
    axios.get("https://665898cc5c36170526492498.mockapi.io/bookapi/Books").then(response=>{
     setData(response.data)
 }
    )
    .catch(error=>{
      console.log(error)
    })
    
 },[setData,data,update,setEmpty])

  return (
    <>
      <div className="card">
        <div className="card-header">
          <div>
            <div className="navbar">
              <a href="#" className="logo">
                Books Store
              </a>
              <ul className="nav-links">
              <Link to="/">
                <button type="button" className="btn btn-warning" onClick={()=>setEmpty(null)}>
                  <i
                    className="fa-solid fa-plus"
                    style={{ color: "white" }}
                  ></i>
                  Add Book
                </button>
                </Link>
              </ul>
            </div>
          </div>
        </div>
       
        
        {data.map((val,index)=>{
        return <Data dat={val} key={index}/>
        })} 
        
       
        
      </div>
      
    </>
  );
}

export default Olddata;
