function get(element) {
    return document.getElementById(element);
}

function openModal() {
    var modal = get('modal-dialog');
    var backdrop = get('modal-backdrop');
    modal.classList.add('visible');
    backdrop.classList.add('visible');
}

function closeModal() {
    var title = get('edit-title-text');
    var text = get('edit-content-text');
    var modal = get('modal-dialog');
    var backdrop = get('modal-backdrop');
    
    title.value = '';
    text.value = "";
    
    modal.classList.remove('visible');
    backdrop.classList.remove('visible');
}

function getPublicationDateTime(){
    var currentdate = new Date(); 
    var datetime = currentdate.getDate() + "/"
                    + (currentdate.getMonth()+1)  + "/" 
                    + currentdate.getFullYear() + " @ "  
                    + currentdate.getHours() + ":"  
                    + currentdate.getMinutes() + ":" 
                    + currentdate.getSeconds();
    return datetime;
}

function saveContent() {
    var title = get('edit-title-text');
    var text = get('edit-content-text');
    var content = get('display-content');
    
    var newTitle = document.createElement('h2');
    var newTitleText = document.createTextNode("Title : " + title.value);
    var newPublicationDate = document.createElement('h3');
    var newPublicationDateText = document.createTextNode("Publication Date : " + getPublicationDateTime());
    var newContent = document.createElement('p');
    var newContentText = document.createTextNode(text.value);
   
    newTitle.appendChild(newTitleText);
    newContent.appendChild(newContentText);
    newPublicationDate.appendChild(newPublicationDateText);
    content.appendChild(newTitle);
    content.appendChild(newPublicationDate);
    content.appendChild(newContent);
    closeModal();
}

function setupEventHandlers() {
    var newButton = get('new-button');
    var cancelButton = get('cancel-button');
    var saveButton = get('save-button');

    newButton.addEventListener('click', openModal);
    cancelButton.addEventListener('click', closeModal);
    saveButton.addEventListener('click', saveContent);
}

window.addEventListener('load', setupEventHandlers);
