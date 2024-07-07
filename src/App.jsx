// import { createContext } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Form from "./form";
import "./App.css";
import Olddata from "./form-1";
import { createContext ,useState} from "react";

import { BrowserRouter,Route,Routes } from "react-router-dom";
export const counterContext=createContext(null)
function App() {
const [put, setPut] = useState(false);
const[load,reLoad]=useState(true)
const [data, setData] = useState([]);//take record in api
const[update,setUpdate]=useState({})
const[empty ,setEmpty]=useState('')
  return (
    <>
    <counterContext.Provider value={{setData,data,update,setUpdate,empty,setEmpty,put,setPut,load,reLoad}} >
     <BrowserRouter>
      <Routes>
       
        <Route path="/" element={<Form />} />
      
        <Route path="/book/libraries" element={<Olddata/>}/>
      </Routes>
     </BrowserRouter>
     </counterContext.Provider>
      
      
    </>
  );
}

export default App;
