import { useContext, useEffect, useState } from "react";
 import { counterContext } from "./App";
import { Link } from "react-router-dom";
import axios from "axios";
// import { useRef } from "react";
function Form() {
const {setData,data,update,empty,setEmpty,put,setPut}=useContext(counterContext)
const [addnew,setaddnew] = useState({});//for take the value in input fields
const [click,setClick]=useState()
const[ref,setRef]=useState(false)
const { id, Title, Author, image, Type } = update.addnew || {}



const POST=()=>
{
 if(put){
  axios.put(`https://665898cc5c36170526492498.mockapi.io/bookapi/Books/${id}`,{addnew}).then(res=>{setData([...addnew,res.data.addnew])})
  setPut(false)
 }
 else{
  axios.post("https://665898cc5c36170526492498.mockapi.io/bookapi/Books",{addnew}).then(res=>{setData([...data,res.data.addnew]) ,setRef(true)}) 
  
 }
  
 
  
}
// const inputRef = useRef(null);

// const handleClear = () => {
//   inputRef.current.value = ''; // Clear the input value
// };

  return (
    <>
      <div className="card text-center">
        <div className="card-header">
        <div className="card-header-1">
          <h4>New Book</h4>
           <Link to="/book/libraries">

            <button className="button" style={{ borderRadius: "30px" }} onClick={()=>setEmpty(" ")}>
              Visit Library →
            </button>
          </Link> 
          </div>
        </div> 
        <div></div>
        <div className="card-body">
          <div className="input-group">
            <input
              required=""
              type="text"
              name="text"
              autoComplete="off"
              className="input"
              // ref={inputRef}
              value={empty==null?empty:Title}
              onChange={(e)=>{setaddnew({...addnew,Title:e.target.value})}}
            
              onLoad={setEmpty(null)}
            
            />
            <label className="user-label">Title</label>
          </div>
          <div className="input-group-1">
            <div className="input-group">
              <input
                required=""
                type="text"
                name="text"
                autoComplete="off"
                className="input"
                value={empty==null?empty:Author}
                onChange={(e)=>setaddnew({...addnew,Author:e.target.value})}
              />
              <label className="user-label">Author</label>
            </div>
          </div>
          <div className="input-group-2">
            <div className="input-group">
              <input
                required=""
                type="text"
                name="text"
                autoComplete="off"
                className="input"
                value={empty==null?empty:Type}
                onChange={(e)=>{setaddnew({...addnew,Type:e.target.value})}}
              />
              <label className="user-label">Type</label>
            </div>
          </div>
          <div className="input-group-3">
            <div className="input-group">
              <input
                required=""
                type="text"
                name="text"
                autoComplete="off"
                className="input"
                style ={{marginBottom:"49px"}}
                value={empty==null?empty:image}
                onChange={(e)=>setaddnew({...addnew,image:e.target.value})}
               
              />
              <label className="user-label">Image URL</label>
            </div>
          </div>
          
        </div>
        <div className="input-group-4">
            <div className="input-group">
              <input
                required=""
                type="text"
                name="text"
                autoComplete="off"
                className="input"
                value={empty==null?empty:id}
                onChange={(e)=>{setaddnew({...addnew,id:e.target.value}) }}
                style={{width:"49%", marginLeft: "10px"}}
              />
            
              <label className="user-label">Id</label>
            </div>
          </div>
        <div>
          <Link to="/book/libraries"><button className="btn" style ={{marginTop:"20px"}}onClick={POST} >Submit</button></Link>
          
        </div>
      </div>
    </>
  );
}
export default Form;
