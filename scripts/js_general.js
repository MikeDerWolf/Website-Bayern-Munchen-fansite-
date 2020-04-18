window.onload = function(){
	
	document.getElementById("menu_toggle").onclick = function(){
		var x = document.getElementById("main_menu");
		if (x.className === "menu") {
			x.className += " visible";
		} 
		 else {
			x.className = "menu";
		}
	}
	
	document.getElementById("submenu_toggle").onclick = function(){
		var x = document.getElementById("secondary_menu");
		if (x.className === "submenu") {
			x.className += " visible";
		} 
		 else {
			x.className = "submenu";
		}
	}
	
	document.getElementById("logout_btn").onclick = function(){
		location.href='/logout';
	}

}

window.onresize = function(){
	var x = document.getElementById("secondary_menu");
	x.className = "submenu";
	
	var y = document.getElementById("main_menu");
	y.className = "menu";
}
	