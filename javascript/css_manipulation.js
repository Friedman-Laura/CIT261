function doubleHeight()
{
	document.getElementById('soccer_in_provo').style.width = "75%";
}

function returnToNormal()
{
	document.getElementById('soccer_in_provo').style.width = "50%";
	document.getElementById('soccer_in_provo').style.borderRadius = "20px";
}

function changeRadius()
{
	document.getElementById('soccer_in_provo').style.borderRadius = "100px";
}

function changeColor()
{
	var color = prompt("What color? (can be name, hex, or rgb)");
	var buttons = document.getElementsByClassName('myButtons');
	
	for(var i=0; i < buttons.length; i++)
    {
        buttons[i].style.color = color;
    }
}

function changeBorder()
{
	document.getElementById('soccer_in_provo').style.border = "10px solid black";
	
}

function changeBorderBack()
{
	document.getElementById('soccer_in_provo').style.border = "none";
	document.getElementById('soccer_in_provo').style.borderRadius = "20px";

}