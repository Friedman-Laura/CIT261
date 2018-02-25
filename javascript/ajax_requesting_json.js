var students = null;
            
// Issue the XMLHttpRequest object to call webserver and retrieve classlist.html JSON file
function getJSONFile() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "/CIT261/json/classlist.html", true);
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            //Convert the JSON text back to an object
            students = JSON.parse(this.responseText);
            showStudents();
        }
    }
    xhttp.send();   
}

//  Display all the student records in the JSON object array.
function showStudents(){
    var result = ""; 
    
    for(var i = 0; i < students.records.length; i++){
          
        result += "<p><b>Name: </b>" + students.records[i].firstName + " " + students.records[i].lastName + ", <b>Phone: </b>" + students.records[i].cell + "</p>";
    }
    document.getElementById("div_students").innerHTML = result;
}

//  Add a new contact to the JSON object array.
function AddToJSONFile(){
    var l = new function(){
        this.firstName = document.getElementById('input_first_name').value;
        this.lastName = document.getElementById('input_last_name').value;
        this.cell = document.getElementById('input_cell').value;
    }
    
    students.records.push(l);
    showStudents();
}