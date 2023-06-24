var form;
var main;
var success;

// check form validity for email and apply custom error message
function check_email() {
    // assign user input from from to variable
    form = document.forms["email-form"]["email"].value;
    // get reference to input box for email
    var inputbox = document.getElementById("email");
    
    // if the forms input box does not include an @ or is empty, return false and display error
    if(!inputbox.checkValidity()) {
        // assign form to variable
        // change entry box's color if invalid
        // remove default validity error message
        inputbox.setCustomValidity("");
        var entrybox = document.getElementById("email");
        entrybox.style.backgroundColor = "hsl(4, 100%, 88%)";
        entrybox.style.color = "hsl(4, 100%, 67%)";
        entrybox.style.border = "1px solid hsl(4, 100%, 67%)";
        var errormsg = document.getElementById("error-msg");
        errormsg.style.display = "block";

        return false;
    }
    else {
        // if form entry is valid
        sessionStorage.setItem("email", form);
        //document.getElementById("placeholder-email").innerHTML = "<b>" + form + "</b>";
            
        return true;
    }
}

// set email from session storage in success.html page
function set_email(){
    document.getElementById("placeholder-email").innerHTML = "<b>" + sessionStorage.getItem("email") + "</b>";
}

// remove session storage email item onclick of dismiss message button in success.html
function remove_email(){
    sessionStorage.removeItem("email");
}
