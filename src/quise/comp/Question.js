import React, { useState,useEffect,useRef } from 'react';



const Question = ({stages ,data ,qlenth,aquestion,upquestion,setanswer,answer}) => {

    const[ans,setans]=useState("");
    const [errors,seterrors] = useState("");
    const radiosWrapper = useRef();



    useEffect(() => {
        const findCheckedInput = radiosWrapper.current.querySelector('input:checked');
        if(findCheckedInput) {
          findCheckedInput.checked = false;
        }
      });


    const just = (e)=>{
        e.preventDefault()
        const ansr = e.target.value
        setans(ansr) 
        if(errors) {
          seterrors('');
        }


    }
    const jun = ()=>{

        if(ans === ""){
           return seterrors("Pleace select")
        }
        
            setanswer(prevState => [...prevState, { q: data.question, a: ans }])
            setans("")
        


        if(aquestion < qlenth - 1){
            upquestion(aquestion + 1)

        }
        else{
            console.log(answer)
            stages(2)
        }
    }


    return (
        
            <>
            <div className='q-full'>
              <div className='container'>
              <div className='card center-align  eit blue-grey darken-4'>
<h4 className='wh'>{data.question}</h4>
<div className='row align-content-center'>

  <div className='col s12 align-io'>
 <div  ref={radiosWrapper}>
            {data.choices.map((choice, i) => (
              <p> <label  key={i}>
                <input type="radio" name="group1" className='black-text bg-danger' value={choice} onChange={just} />
               <span>{choice}</span> 
              </label></p>
             
            ))}
          </div>
            


  </div>

</div>
{errors && <h5>{errors}</h5>}
<div className='row'>
  <div className='col s12'>
     <button className='btn' onClick={jun}>click</button>
  </div>
</div>



                </div>
            </div>

            
        
            

            
           


            
           

            

            
            </div>

            
            
            </>
            
        
    )
}

export default Question
