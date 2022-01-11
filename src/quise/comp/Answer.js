import React from 'react'

const Answer = ({answer,data,stages,setanswer,setqno}) => {

    const iol = ()=>{
        setanswer([])
        setqno(0)
        stages(0)
      }
    return (
        <div>
            <div className='container'>

                <div className='row'>
                    <div className='col s4 offset-s5'>
                    <button className='btn' onClick={iol}>Home</button>
                    </div>
                </div>

                <div className='card center-align'>
 {
              answer.map((dt,i)=> <div key={i}>

                  <h1>{data[i].question}</h1>

                  <div className='row'>
                      <div className='col s12 bg-success'>
 {/* <p className='col bg-success'> your answer : {dt.a}</p> */}
 <h5 className={dt.a === data[i].answer ? 'green' : 'red'}>Your answer: {dt.a}</h5>
                  </div>
                      </div>

                      <div className='row'>
                      <div className='col s12 bg-danger'>
 {/* {dt.a !== data[i].answer && <p>correct answer{data[i].answer}</p>} */}
 {dt.a !== data[i].answer && <h5 className=" gray">Correct answer: {data[i].answer}</h5>}
                  </div>
                      </div>
                 
                 
              </div>)
            }

                    </div>

            </div>
            
           
            
        </div>
    )
}

export default Answer

