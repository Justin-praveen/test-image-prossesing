
import './App.css';

import {useSelector} from "react-redux";
import {BrowserRouter,Route,Routes} from "react-router-dom";

import Register from "./login/register";

import Login from "./login/login";


import Start1 from './quise/Start1'
import Auth from './Admin/Auth';
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
     swe != null && hu === true ? (<Auth/>) : swe != null ?(
//           <BrowserRouter>
//     <Routes>
//       <Route path="/" element={<Start1/>}/>
      
//     </Routes>
// </BrowserRouter>
<Start1/>
    ):(<BrowserRouter>
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
