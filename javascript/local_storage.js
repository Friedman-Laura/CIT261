//==============================================================================
//Properties
//==============================================================================
var contacts = null;

//this is the variable that we will use to keep consistency for the naming of 
//our local storage identifier for the contacts JSON text
var sName = "contacts";
            

//==============================================================================
//  Description:
//      This function uses the XMLHttpRequest object to call my webserver and 
//      retrieve the contacts.html JSON file.
//  
//  Parameters:
//            
//  Example:
//      getJSON();
//      
//  Coder:
//      Donald Nelson
//============================================================================== 
function getJSON() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "/CIT261/json/contacts.html", true);
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            contacts = null;
            getContactsFromLocalStorage();
            if(contacts == null){
                //Convert the JSON text back to an object
                contacts = JSON.parse(this.responseText);
                saveContactsToLocalStorage();
                showContacts();
            }
            else
            {
                alert("You already have some contacts saved locally. We will not overwrite them. Instead we will just show you the contacts pulled from the server.");
                //Convert the JSON text back to an object
                contacts = JSON.parse(this.responseText);
                showContacts();
            }
        }
    }
    xhttp.send();   
}


//==============================================================================
//  Description:
//      This function saves my contacts object as JSON text to the local storage.
//  
//  Parameters:
//            
//  Example:
//      saveContactsToLocalStorage();
//      
//  Coder:
//      Donald Nelson
//============================================================================== 
function saveContactsToLocalStorage(){
    localStorage.setItem(sName, JSON.stringify(contacts));
}


//==============================================================================
//  Description:
//      This function retrieves my contacts object as JSON text to the 
//      local storage.
//  
//  Parameters:
//            
//  Example:
//      getContactsFromLocalStorage();
//      
//  Coder:
//      Donald Nelson
//============================================================================== 
function getContactsFromLocalStorage(){
    contacts = JSON.parse(localStorage.getItem(sName));
}


//==============================================================================
//  Description:
//      This function clears the local storage contacts item.
//  
//  Parameters:
//            
//  Example:
//      clearLocalContacts();
//      
//  Coder:
//      Donald Nelson
//============================================================================== 
function clearLocalContacts(){
    localStorage.removeItem(sName);
    contacts = null;
    showContacts();
}


//==============================================================================
//  Description:
//      This function handles the request from the user to get the contacts from
//      the local storage and show them to the user.
//  
//  Parameters:
//            
//  Example:
//      getLocalContacts();
//      
//  Coder:
//      Donald Nelson
//============================================================================== 
function getLocalContacts(){
    getContactsFromLocalStorage();
    if(contacts == null){
        alert("You do not have any contacts saved localy. Please pull contacts from the server.");
    }
    showContacts();
}

//==============================================================================
//  Description:
//      This function displays all the contacts in the JSON object array.
//  
//  Parameters:
//            
//  Example:
//      showContacts();
//      
//  Coder:
//      Donald Nelson
//============================================================================== 
function showContacts(){
    var result = ""; 
    try{
        for(var i = 0; i < contacts.items.length; i++){
          
            result += "<p>" + contacts.items[i].firstName + " " + contacts.items[i].lastName + " [Cell Phone] : " + contacts.items[i].cell + "</p>";
        }
    }catch(e){}
    finally{
        document.getElementById("div_contacts").innerHTML = result;
}}


//==============================================================================
//  Description:
//      This function adds a new contact to the JSON object array.
//  
//  Parameters:
//            
//  Example:
//      addToJSON();
//      
//  Coder:
//      Donald Nelson
//============================================================================== 
function addToJSON(){
    var l = new function(){
        this.firstName = document.getElementById('input_first_name').value;
        this.lastName = document.getElementById('input_last_name').value;
        this.cell = document.getElementById('input_cell').value;
    }
    
    contacts.items.push(l);
    saveContactsToLocalStorage();
    showContacts();
}