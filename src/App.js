
import './App.css';

import {useSelector} from "react-redux";
import {BrowserRouter,Route,Routes} from "react-router-dom";

import Register from "./login/register";
import {Admin}  from './Admin/admin';
import Login from "./login/login";
import Question from './quise/question';


function App() {

  
let hu;
  const swe = useSelector((state)=>state.data);
  if(swe == null){
    console.log(swe)
  }else{
    swe.map((datas)=> (hu=datas.admin));
    console.log(hu) 
    
  }
  
  return (
    <>

    {
     swe != null && hu === true ? (<Admin/>) : swe != null ?( <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Question/>}/>
    </Routes>
    </BrowserRouter>):(<BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Login/>}/>
      <Route path="register" element={<Register/>}/>
    </Routes>
    </BrowserRouter>
   )
    }

   

    
    </>
    
  );
}

export default App;
