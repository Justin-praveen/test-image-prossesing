import React,{useEffect,useRef, useState} from 'react';
import * as faceapi from "face-api.js";
;





const Face = ({stages}) => {

   

    const [init,setinit]= useState(true);
    let[war,setwar] = useState(0)
    const videoref = useRef();
    const canvasref = useRef();

    // const [exp,setexp]=useState({
        
    // })

    let videowidh = 400
    let videoheight = 200

 

    useEffect(()=>{
        const load = async()=>{

            const MODEL_URL = process.env.PUBLIC_URL + '/models';
            

            setinit(true);
console.log(MODEL_URL)
            Promise.all([
                faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL),
                faceapi.nets.faceLandmark68Net.loadFromUri(MODEL_URL),
                faceapi.nets.faceRecognitionNet.loadFromUri(MODEL_URL),
                faceapi.nets.faceExpressionNet.loadFromUri(MODEL_URL)
              ]).then(startVideo)


        }
        load()
    },[stages])


    const startVideo = () =>{

        navigator.mediaDevices.getUserMedia({
            video:{
                facingMode : "user"
            }
        }).then((stream)=>{
            window.stream = stream;
            videoref.current.srcObject = stream;
            
        })
    }

      const handel = ()=>{
        
        
         
            setInterval(async () => {
                if(init){
                    setinit(false)
                }


                canvasref.current.innerHTML = faceapi.createCanvasFromMedia(videoref.current)
                const displaySize = {
                  width : videowidh,
                   height :videoheight
                }
                faceapi.matchDimensions(canvasref.current,displaySize)

              const detections = await faceapi.detectAllFaces(videoref.current, new faceapi.TinyFaceDetectorOptions()).withFaceLandmarks().withFaceExpressions()
              const resizedDetections = faceapi.resizeResults(detections, displaySize)
             detections.map((data)=>{
                 const f1 = Math.round(data.expressions.surprised)
                 const f2 = Math.round(data.expressions.happy)

                 
                 if(f1 === 1){
                     console.log("sleep detected");
                     setwar(war + 1)
                     var toastHTML = '<i class="tiny material-icons">error</i><span class="white-text text-darken-2">Warning</span><button class="btn-flat toast-action">Undo</button>';
                    window.M.toast({html: toastHTML,classes: 'rounded'});

                 }
                 if(f2 === 1){
                     console.log("speech detected")
                     setwar(war + 1)
                     
                     var toastHTML1 = '<i class="tiny material-icons">error</i><span class="white-text text-darken-2">Warning</span><button class="btn-flat toast-action">Undo</button>';
                     window.M.toast({html: toastHTML1});
                 }
             })
              

              
              canvasref.current.getContext('2d').clearRect(0, 0, videowidh,videoheight)
              faceapi.draw.drawDetections(canvasref.current, resizedDetections)
              faceapi.draw.drawFaceLandmarks(canvasref.current, resizedDetections)
              faceapi.draw.drawFaceExpressions(canvasref.current, resizedDetections)
        }, 1000)
      }
      




    return (
        <div className='f-full'>
            <div className='container face-full blue-grey center-align'>

                <div className='card black'>

                
<div className='row'>

<div className='col s12 '>
      <div className="vid-face">
                <video  ref={videoref} width={videowidh} height={videoheight} autoPlay muted onPlay={handel}/>
            <canvas ref={canvasref} className='can-face'/>
            </div> 
</div>


                </div>
                <div className='row btn-light red'>

<div className='col s12'>
   <p> WARNING : {war}</p>
</div> 

</div>
               
</div>
 
               
           

          
            </div>
            
            
            
        </div>
    )
}

export default Face
