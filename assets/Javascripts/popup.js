function generatePopup(id,info){
    let {text,title,color} = info
    var popup = document.createElement('div');
    popup.id = id;
    popup.className = 'popup';
    popup.innerHTML = `
    <div class="show-popup">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header"style="background-color: ${color};color: black;">
          <h5 class="modal-title" id="exampleModalLabel">${title}</h5>
          <button type="button" class="close" onclick="removePopUp()" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          ${text}
        </div>
        <div class="modal-footer"style="background-color: ${color};color: black;">
          <button type="button" class="btn btn-secondary" onclick="removePopUp()">Close</button>
        </div>
      </div>
    </div>
    </div>`;
    document.getElementById(id).appendChild(popup)
}

function removePopUp(){
    let popup = document.getElementsByClassName('popup')
    for(let i = 0; i < popup.length; i++){
        popup[i].remove()
    }
}