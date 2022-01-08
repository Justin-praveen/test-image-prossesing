import React, { useState } from 'react';
import {Modal} from "react-responsive-modal";
import 'react-responsive-modal/styles.css';

const Adminpanel = () => {


    const [open, setOpen] = useState(true);

    const hu = () => setOpen(false);

    return (
        <div>
<div>
     
     <Modal open={open} onClose={hu} center>
       <h2>Sucessfully loged!</h2>
       
     </Modal>
   </div>
      

            
        </div>
    )
}

export default Adminpanel
