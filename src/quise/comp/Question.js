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
      }, [data]);


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
           return seterrors("nothing will selected")
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
        
            <h1><center>QUISE</center></h1>

            <h1>{data.question}</h1>
            <div  ref={radiosWrapper}>
            {data.choices.map((choice, i) => (
              <p> <label  key={i}>
                <input type="radio" name="group1"  value={choice} onChange={just} />
               <span>{choice}</span> 
              </label></p>
             
            ))}
          </div>
            {errors && <h1>{errors}</h1>}


            
           

            <button className='btn' onClick={jun}>click</button>

            
            
            </>
            
        
    )
}

export default Question
