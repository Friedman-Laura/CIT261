var students = null;
            
// Create an AJAX object based on the various browser methods.
function createAJAXObj() {
    
    //create our variable to hold the ajax object within the function
    var xmlHttp;
    
    try {
        // Chrome, Edge, Firefox, Opera 8.0+, Safari
        xmlHttp = new XMLHttpRequest();
    }
    catch (e) {
        // Internet Explorer. this will cover all versions of Microsoft
        try {
            xmlHttp = new ActiveXObject("Msxml2.XMLHTTP");
        }
        catch (e) {
            try {
                xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
            }
            catch (e) {
                return false;
            }
        }
    }
    return xmlHttp;
}

// Issue the XMLHttpRequest object to call webserver and retrieve classlist.html JSON file
function getJSONFile() {
    var xhttp = createAJAXObj();
    xhttp.open("GET", "/CIT261/json/classlist.html", true);
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            //Convert the JSON text back to an object
            students = JSON.parse(this.responseText);
            buildStudents();
        }
    }
    xhttp.send();   
}

//  Display all the student records in the JSON object array.
function showStudent(i){
    var result = "<h4>You Selected Student #" + i + "</h4><p><b>Name: </b>" + students.records[i-1].firstName + " " + students.records[i-1].lastName + "</p><p><b>Phone: </b>" + students.records[i-1].cell + "</p>";
    document.getElementById("div_student_details").innerHTML = result;
}

// Generate the select student drop down element with all the data
// from the students object
function buildStudents(){
    var result = "<br><select id=\"select_student\" onchange=\"showStudent(this.selectedIndex)\"><option value=\"-1\">Please Select a Student Name...</option>"; 
    for(var i = 0; i < students.records.length; i++){
        result += "<option value=\"0\">" + students.records[i].firstName + " " + students.records[i].lastName + "</option>";
    }
    document.getElementById("div_students").innerHTML = result + "</select>";
}