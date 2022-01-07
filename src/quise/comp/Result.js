import React, { useState,useEffect } from 'react'

const Result = ({stages,answer,data,setanswer,setqno}) => {

    const [correctans,setcorrectans] = useState(0);

    const io = ()=>{
        setanswer([])
        setqno(0)
        stages(1)
      }
    

    useEffect(() => {
var correct = 0
       answer.map((datas,i)=>{
           if(datas.a === data[i].answer){
               correct++
           }
        })
        setcorrectans(correct)
    }, [])


    return (
        <div>
            <h1><center>RESULT</center></h1>
            <h1>{correctans} of {data.length}</h1>
            <p>{Math.floor((correctans / data.length) * 100)}%</p>
            <button onClick={io}>Try Again</button>


            <button onClick={()=>stages(3)}>Answer</button>
            
        </div>
    )
}

export default Result
