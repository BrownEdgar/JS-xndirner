let menuItem = (prompt("enter menu element (pizza, wather, cofe)")); 
 let pizza = "22.5";
 let wather = "2.5";
 let cofe = "12.0";




/*if (menuItem != "pizza" && menuItem != "wather" && menuItem != "cofe" ) {
	alert("invalid Element");
}else if (menuItem == "pizza"){
	alert(menuItem + " value is: " + pizza + "$")
}else if (menuItem == "wather"){
	alert(menuItem + " value is: " + wather + "$")
}else if (menuItem == "cofe"){
	alert(menuItem + " value is: " + cofe + "$")
}*/
switch(menuItem){
	case 'pizza':
		alert(menuItem + " value is: " + pizza + "$");
		break;
	case 'wather':
		alert(menuItem + " value is: " + pizza + "$");
		break;
	case 'cofe':
		alert(menuItem + " value is: " + pizza + "$");
		break;
	default:
	alert("Այդպիսի ապրանք չունենք");
}