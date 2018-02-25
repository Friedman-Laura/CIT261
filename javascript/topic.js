//==============================================================================
//Properties
//==============================================================================
var fileName = location.href.split("/").slice(-1); 
            
//==============================================================================
//  Description:
//      This function is used to generate the navigation element with all the 
//      topics. It also sets the correct menu item as active
//  
//  Parameters:
//      
//  Example:
//      getMenu();
//      
//  Coder:
//      Donald Nelson
//==============================================================================
function getMenu() {
 var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "json/menu.html", true);
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
          //Convert the JSON text back to an object
          
          var menu = JSON.parse(this.responseText);
        var result = "<ul>"; 
        for(var i = 0; i < menu.items.length; i++){
          
          if( fileName == menu.items[i].fileName){
              result += "<li class=\"active\"><a href=\""+menu.items[i].fileName+"\">"+menu.items[i].title+"</a></li>";
              
                    //update the Page Title
              document.title = menu.items[i].title;
          }
          else
          {
              result += "<li><a href=\""+menu.items[i].fileName+"\">"+menu.items[i].title+"</a></li>";
              
          }
        }
        
        document.getElementsByTagName("nav")[0].innerHTML = result + "</ul>";
      }
    }
    xhttp.send();   
}