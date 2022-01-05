import React from 'react'

export const Admin = () => {

    window.addEventListener('load', function() {
        var elems = document.querySelectorAll('.modal');
         window.M.Modal.init(elems, {});
      });
    return (
        <div>
            <h1>its admin</h1>

            
  

  
  <div class="modal">
    <div class="modal-content">
      <h4>Modal Header</h4>
      <p>A bunch of text</p>
    </div>
    <div class="modal-footer">
      <a href="#!" class="modal-close waves-effect waves-green btn-flat">Agree</a>
    </div>
  </div>
            
        </div>
    )
}
