import React from 'react'

const Answer = ({answer,data,stages,setanswer,setqno}) => {

    const iol = ()=>{
        setanswer([])
        setqno(0)
        stages(0)
      }
    return (
        <div>
            <h1>its answer</h1>
            {
              answer.map((dt,i)=> <div key={i}>

                  <h1>{data[i].question}</h1>
                  <p> your answer : {dt.a}</p>
                  {dt.a !== data[i].answer && <p>correct answer{data[i].answer}</p>}
                  <button onClick={iol}>Home</button>


              </div>)
            }
            
        </div>
    )
}

export default Answer

