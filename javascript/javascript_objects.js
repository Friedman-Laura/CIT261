// Array to contain the teams
var teams = [];

// Create a new object called team.
function team() {
    this.city = document.getElementById('input_city').value;
    this.team = document.getElementById('input_team').value;
    this.league = document.getElementById('input_league').value;
    this.description = function() {
        return "City: " + this.city + "<br />" +
               "Team: " + this.team + "<br />" +
               "League: " + this.league + "<br />";
    };
}   
            
// Add a team to the array, then clear the input fields.
function addTeam () {
    //create the new team object
    teams.push(new team());
    
    //on the first team
    if (teams.length == 1) {
        //create the new button and the text
        var b = document.createElement("BUTTON");
        var c = document.createTextNode("Team 1");
                    
        //add the textnode to the button element
        b.appendChild(c);
                    
        //add a listener to the button to fire off when it is clicked
        b.addEventListener("click", function() { getTeams(1); });
                    
        //now add the button to the document to make it visible to
        //the end user
        document.getElementById('div_team').appendChild(b);
    }//on the second team
    else if (teams.length == 2) {
        //create the new button and the text
        var b = document.createElement("BUTTON");
        var c = document.createTextNode("Team 2");
                    
        //add the textnode to the button element
        b.appendChild(c);
                    
        //add a listener to the button to fire off when it is clicked
        b.addEventListener("click", function() { getTeams(2); });
                    
        //now add the button to the document to make it visible to
        //the end user
        document.getElementById('div_team').appendChild(b);
    } //on the third team
    else if (teams.length == 3) {
        var b = document.createElement("BUTTON");
        var c = document.createTextNode("Team 3");
        b.appendChild(c);
        b.addEventListener("click", function() { getTeams(3); });
        document.getElementById('div_team').appendChild(b);
        
        //clear out the elements that allow us to input new teams.
        //max out the teams at3
        document.getElementById('div_team_input').innerHTML = '';
        return;
    }
    //clear out the input elemnts so that the next team is ready
    document.getElementById('input_city').value='';
    document.getElementById('input_team').value='';
    document.getElementById('input_league').value='';
}
         
// Calls the createAJAX() function and then uses the ajax object to call
// the web server and pull the JSON file back, then parse it and act on it.
function getTeams(number) {
    document.getElementById('div_team_description').innerHTML = teams[number-1].description();
}