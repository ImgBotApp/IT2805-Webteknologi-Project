/*
FILE NAME: scripts/Navbar.html
WRITTEN BY: Kristoffer H�konsen
WHEN: October/November 2017
PURPOSE: This page contains the Javascript which makes the navbar expand on click.
*/

btns = ["", "aboutbtn", "mediabtn", "contactbtn"];

//Viser/viser ikke
function dropdownFunction(buttonclicked) {
	
	if(document.getElementById(btns[buttonclicked]).classList.contains("show")){
		removeDropdown();
		
	}
    else{
		//Fjerner alle dropdowns
		removeDropdown();

		//Viser den aktuelle dropdownen
		switch (buttonclicked) {
		
			case 1:
			  
				document.getElementById("aboutbtn").classList.toggle("show");

				break;
			case 2:
				document.getElementById("mediabtn").classList.toggle("show");
				break;
			case 3:
				document.getElementById("contactbtn").classList.toggle("show");
				break;
		}
	}
    
}


// Hvis vi klikker p� skjermen utenfor dropdown knappene fjernes dropdownen

window.onclick = function(event){
    if (!event.target.matches('.dropbtn')) {
        removeDropdown();
    }
   if  (!event.target.matches('.icon')){
       removeSmallDropdown();
    }
}

//Fjerner alle dropdowns
function removeDropdown() {
   
    /*Fjerner vanlig dropdown*/
    var dropdowns = document.getElementsByClassName("dropdown-content");
    
    for (var i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
        }
    }
}

/*Fjerner liten dropdown*/
function removeSmallDropdown() {
    var dropdowns = document.getElementsByClassName("smalldropdown");
    for (var i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
        }
    }
}




function smallDropDown() {
    document.getElementById("smalldropdownbtn").classList.toggle('show');
   
}

