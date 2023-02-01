// Listen for from submit

document.getElementById('contact-form').addEventListener('submit', submitForm);

// Submit form

function submitForm(e){
    e.preventDefault();

    // Get values
    var name = getInputVal('name');
    var email = getInputVal('email');
    var message = getInputVal('message');

    console.log(name, email, message);
    //save message
    //saveMessage(name, email, message, date_contact);

    
}
// function to get form values
function  getInputVal(id){
    return document.getElementById(id).value;
}

// save message to Fire
function saveMessage(name, email, message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: name,
        email: email,
        message: message,
        date_contact: (new Date()).toISOString()
    })
}