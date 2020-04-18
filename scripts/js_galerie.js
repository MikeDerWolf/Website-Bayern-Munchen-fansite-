	var poze = [];
	
	function vect_poze(data){
		for(let i=0; i<data.length; i++){
			if(location.port=="5000"){
				poze.push("http://localhost:5000"+data[i].picture.source.slice(2,data[i].picture.source.length));
			}
			else{
				poze.push("https://hidden-atoll-14361.herokuapp.com"+data[i].picture.source.slice(2,data[i].picture.source.length));
			}
		}
	}
	
	function galerie(data){
		var imagini = document.getElementsByClassName("tablou");
		img_gal = document.getElementById("img_container");
		for(let i=0; i<imagini.length; i++){
			let j=i;
			imagini[j].onclick = function(){
				img_gal.src = data[j].picture.source;
			}
		}
	}
	
	var data ;
	var httpObj = new XMLHttpRequest();
	httpObj.onreadystatechange = function() {
		if (httpObj.readyState == 4) {
			if (httpObj.status == 200){
				data=JSON.parse(httpObj.responseText);
				galerie(data);
				vect_poze(data);
			}
			else {alert("eroare");}
		}
	};
	httpObj.open("GET", "imagini.json", true);
	httpObj.send(null);	
	
	function sch_img(d) {
        img_gal = document.getElementById("img_container");
		if(poze.indexOf(img_gal.src)==-1&&d==1){
			img_gal.src = poze[0];
		}else if(poze.indexOf(img_gal.src)==-1&&d==-1){
			img_gal.src = poze[poze.length-1];
		}else if(poze.indexOf(img_gal.src)==0&&d==-1){
			img_gal.src = poze[poze.length-1];
		}else if(poze.indexOf(img_gal.src)==poze.length-1&&d==1){
			img_gal.src = poze[0];
		}else{
			img_gal.src = poze[poze.indexOf(img_gal.src)+d];
		}
    }
	
	window.onkeydown = function(e){
		var cod = e.charCode ? e.charCode : e.keyCode;
		if (cod == "37") {
			sch_img(-1) ;
		} 
		else if (cod == "39") {
			sch_img(1);
		}
		else if (cod == "80") {
			if(idInterval != -1){
				clearInterval(idInterval);
				idInterval = -1;
				k = 0;
				document.getElementById("img_container").src="";
			}
		}
    }
	
	var idIntTime = -1;
	var idInterval = -1;
	var k = 0;
	
	
window.addEventListener("load", function() {
	
	
	
	
	function insertAfter(newNode, referenceNode) {
		referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
	}
	
	var lab = document.createElement("label");
	lab.setAttribute("id", "lab_caut_titlu");
	lab.innerHTML = "Cautare titlu  ";
	var txt_input = document.createElement("input");
	txt_input.setAttribute("type", "text");
	txt_input.setAttribute("id", "text_search");
	lab.appendChild(txt_input);
	insertAfter(lab, document.getElementsByTagName("h2")[0]);
	
	var lab = document.createElement("label");
	lab.setAttribute("id", "lab_caut_desc");
	lab.innerHTML = "Cautare descriere  ";
	var txtar_input = document.createElement("TEXTAREA");
	txtar_input.setAttribute("id", "desc_search");
	txtar_input.setAttribute("rows", "1");
	lab.appendChild(txtar_input);
	insertAfter(lab, document.getElementById("lab_caut_titlu"));
	
	v = ["Imagini","Videoclipuri","Favorite"];
	var lab = document.createElement("label");
	lab.setAttribute("id", "lab_select");
	lab.innerHTML = "Vizualizati categoria  ";
	var sel = document.createElement("select");
	sel.setAttribute("id", "select_categorie");
	sel.setAttribute("selected", "Imagini");
	for(el of v)
		sel.innerHTML += `<option value="${el}">${el}</option>`;
	lab.appendChild(sel);
	insertAfter(lab, document.getElementById("lab_caut_desc"));
	
	
	
	var imagini = document.getElementsByClassName("tablou");
	for(let i=0; i<imagini.length; i++){
		let j=i;
		imagini[j].onmouseover = function(){
			this.style.border = "2px solid red";
		}
		
		imagini[j].onmouseout = function(){
			this.style.border = "2px solid black";
		}
	}
	
	/*document.getElementById("logout_btn").onclick = function(){
		location.href='/logout';
	}*/
	
	document.getElementById("select_categorie").onchange = function(){
		if(this.value=="Imagini"){
			document.getElementsByClassName("imagini")[0].style.display = "block";
			document.getElementsByClassName("videoclipuri")[0].style.display = "none";
			document.getElementsByClassName("favorite")[0].style.display = "none";
		}
		if(this.value=="Videoclipuri"){
			document.getElementsByClassName("imagini")[0].style.display = "none";
			document.getElementsByClassName("videoclipuri")[0].style.display = "block";
			document.getElementsByClassName("favorite")[0].style.display = "none";
		}
		if(this.value=="Favorite"){
			document.getElementsByClassName("imagini")[0].style.display = "none";
			document.getElementsByClassName("videoclipuri")[0].style.display = "none";
			document.getElementsByClassName("favorite")[0].style.display = "block";
		}
	}
	
	var radios = document.getElementsByName("marime");
	for(let i=0; i<radios.length; i++){
		let j=i;
		radios[j].onclick = function(){
			if(this.id=="mic"){
				document.getElementById("container_principal").style.width = "30vw";
				document.getElementById("container_principal").style.height = "17vw";
			}
			if(this.id=="mediu"){
				document.getElementById("container_principal").style.width = "50vw";
				document.getElementById("container_principal").style.height = "27vw";
			}
			if(this.id=="mare"){
				document.getElementById("container_principal").style.width = "75vw";
				document.getElementById("container_principal").style.height = "35vw";
			}
		}
	}
	
	document.getElementById("text_search").onkeyup = function(){
		var input = this.value;
		input = input.toLowerCase();
		var x = document.querySelectorAll("div.container div.text");
		
		for (let i = 0; i < x.length; i++) {  
			if (!x[i].innerHTML.toLowerCase().includes(input)) { 
				x[i].parentNode.parentNode.style.display="none"; 
			} 
			else { 
				x[i].parentNode.parentNode.style.display="block";                  
			} 
		} 
	}
	
	document.getElementById("desc_search").onkeyup = function(){
		var input = this.value;
		input = input.toLowerCase();
		var x = document.querySelectorAll("div.container div.desc");
		
		for (let i = 0; i < x.length; i++) {  
			if (!x[i].innerHTML.toLowerCase().includes(input)) { 
				x[i].parentNode.parentNode.style.display="none"; 
			} 
			else { 
				x[i].parentNode.parentNode.style.display="block";                  
			} 
		} 
	}
	
	function auto_play(imagine){
		imagine.src = poze[k];
		k=k+1;
		if(k>poze.length-1)
			k=0;
	}
	
	document.getElementById("play_btn").onclick=function(){
		if(idInterval == -1)
			idInterval = setInterval(auto_play, 2500, this.nextElementSibling.firstElementChild);
	}
	
	
	var ob1 = document.getElementById("line");   
	var ob2 = document.getElementById("box");
	var pos = 20;
	function t_rec(){
		if (pos == 1430) {
			if(idIntTime != -1){
				clearTimeout(idIntTime);
				idIntTime = -1;
			}
		} 
		else {
			pos++;  
			ob1.style.left = pos + "px"; 
			ob2.style.left = pos + "px";
			idIntTime = setTimeout(t_rec, 10);
		}
	
	}
	t_rec();
});


	