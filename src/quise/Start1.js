
import { useState } from 'react';
import Answer from './comp/Answer';
import Question from './comp/Question';
import Result from './comp/Result';
import Start from './comp/Start';
import axios from "axios";
import Face from '../face/Face';



function Start1() {  

  const [stage,setstage] = useState(0);
  const [qno,setqno] = useState(0);
  const [answer,setanswer] = useState([]);
  const [data,setdata] = useState(null);


// useEffect(() => {

//        axios.get("http://localhost:7070/data").then((data)=>{
          
//           setdata(data.data.data)

//       console.log(data.data.data)
// })
 
// }, [stage])
  

  if(data == null){
      axios.get("http://localhost:7070/data").then((data)=>{
          
          setdata(data.data.data)

      console.log(data.data.data)
      
  })


  }
  else{
      console.log("notyet data")
  }

  console.log(data)

  return (
    <>
    {stage ===0  && <Start stages={setstage}/>}
    {stage ===1 &&<div> <Face stages={setstage} /><Question stages={setstage} data={data[qno]}
     qlenth={data.length} upquestion={setqno} 
     aquestion={qno} setanswer={setanswer} answer={answer}/></div>}
    {stage ===2 && <Result stages={setstage} 
      answer={answer} setanswer={setanswer} setqno={setqno} data={data}/>}
   
    {stage ===3 && <Answer stages={setstage}
     setanswer={setanswer} setqno={setqno}
     answer={answer} data={data} />}
    
    </>
  );
}

export default Start1;


