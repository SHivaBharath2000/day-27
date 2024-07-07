import axios from "axios";
import { counterContext } from "./App";
import { useContext, useEffect } from "react";
import { Link,useNavigate } from "react-router-dom";
import { useState } from "react";
function Data({dat}) {
  let navigate=useNavigate()
const[refresh,setRefresh]=useState(false)

  //https://665898cc5c36170526492498.mockapi.io/bookapi/Books -->use this api
const {setUpdate,setData,setPut,update}=useContext(counterContext)
const{addnew:{id,image,Title,Author,Type}}=dat
useEffect(()=>{
  if(refresh){
    Del()
  }
},[refresh])
const Take=()=>{
    // setEmpty()

     axios.get(`https://665898cc5c36170526492498.mockapi.io/bookapi/Books/${id}`).then(res=>{setUpdate(res.data) })
      navigate("/")
      setPut(true)
      
     
}
const Del=()=>{
 
      axios.delete(`https://665898cc5c36170526492498.mockapi.io/bookapi/Books/${id}`).then(res=> setData(res.data))
   
  }
 

  return (
    <>
      <div className="card-body">
        <div className="card w-100">
          <div className="card-body-1">
            <div className="row align-items-start">
              <div className="col">
                <h5 style={{ color: "#FFA500" }}><h3>{id}</h3></h5>
              </div>
              <div className="col">
                <h5 style={{ color: "#FFA500" }}><h3>Title</h3></h5>
              </div>
              <div className="col">
                <h5 style={{ color: "#FFA500" }}><h3>Author</h3></h5>
              </div>
              <div className="col">
                <h5 style={{ color: "#FFA500" }}><h3>Type</h3></h5>
              </div>
              <div className="col">
                <button className="button-1" onClick={()=>{setRefresh(true)}}>
                  <i className="fa-solid fa-xmark"></i>
                </button>   
              </div>
            </div>
            <div className="row align-items-center" style={{marginTop:"33px"}}>
              <div className="col"><img src={image} className="rounded mx-auto d-block" alt="..."></img></div>
              <div className="col"><h4>{Title}</h4></div>
              <div className="col"><h4>{Author}</h4></div>
              <div className="col"><h4>{Type}</h4></div>
              <div className="col">
              
                <button className="button-2" onClick={Take}>
                <i className="fa-solid fa-pen"></i>
                </button>
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Data;
