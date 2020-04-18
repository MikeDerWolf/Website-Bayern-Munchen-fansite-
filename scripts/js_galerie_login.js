window.addEventListener ("load", function() {
	
	var v_img = document.querySelectorAll("div.imagini div.container div.tablou");
	
	for(let i=0; i<v_img.length; i++){
		let j=i;
		var d1 = document.createElement("div");
		d1.setAttribute("class", "rate");
		v_img[j].appendChild(d1);
		var in_r  = document.createElement("INPUT");
		in_r.setAttribute("type", "range");
		in_r.setAttribute("min", "1");
		in_r.setAttribute("max", "5");
		in_r.setAttribute("value", "3");
		d1.appendChild(in_r);
		
		
		var btn = document.createElement("button");
		btn.setAttribute("class", "btn_rate");
		btn.innerHTML = "Send";
		d1.appendChild(btn);
		var dv = document.createElement("div");
		dv.setAttribute("class", "afis_rate");
		d1.appendChild(dv);
		
		
		var d2 = document.createElement("div");
		d2.setAttribute("class", "fav");
		v_img[i].appendChild(d2);
		
		var par = document.createTextNode("Favorit: ");
		d2.appendChild(par);
		var in_c = document.createElement("input");
		in_c.setAttribute("type", "checkbox");
		d2.appendChild(in_c);
	}
	
	var v_vid = document.querySelectorAll("div.videoclipuri div.container div.tablou");
	
	for(let i=0; i<v_vid.length; i++){
		let j=i;
		var d1 = document.createElement("div");
		d1.setAttribute("class", "rate");
		v_vid[j].appendChild(d1);
		var in_r  = document.createElement("INPUT");
		in_r.setAttribute("type", "range");
		in_r.setAttribute("min", "1");
		in_r.setAttribute("max", "5");
		in_r.setAttribute("value", "3");
		d1.appendChild(in_r);
		
		var btn = document.createElement("button");
		btn.setAttribute("class", "btn_rate");
		btn.innerHTML = "Send";
		d1.appendChild(btn);
		var dv = document.createElement("div");
		dv.setAttribute("class", "afis_rate");
		d1.appendChild(dv);
		
		
		var d2 = document.createElement("div");
		d2.setAttribute("class", "fav");
		v_vid[i].appendChild(d2);
		
		var par = document.createTextNode("Favorit: ");
		d2.appendChild(par);
		var in_c = document.createElement("input");
		in_c.setAttribute("type", "checkbox");
		d2.appendChild(in_c);
	}
	
	
	var v = document.querySelectorAll("div.container div.fav input");
	for(let i=0; i<v.length; i++){
		v[i].onchange = function(){
			var prt = document.getElementsByClassName("favorite")[0];
			if(this.checked){
				var x = this.parentElement.parentElement.parentElement;
				var cl = x.cloneNode(true);
				var y = cl.firstElementChild;
				y.removeChild(y.lastElementChild);
				y.removeChild(y.lastElementChild);
				prt.insertBefore(cl, prt.lastElementChild);
			} else {
				var txt = this.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.innerHTML;
				var des = this.parentElement.previousElementSibling.previousElementSibling.innerHTML;
				var t = document.querySelectorAll("div.favorite div.container");
				for(let j=0; j<t.length; j++){
					if(t[j].firstElementChild.firstElementChild.nextElementSibling.innerHTML == txt && t[j].firstElementChild.firstElementChild.nextElementSibling.nextElementSibling.innerHTML == des){
						t[j].remove();
					}
				}
			}
		}
		
	}
	
	var w = document.querySelectorAll("div.container div.rate button");
	for(let i=0; i<w.length; i++){
		w[i].onclick = function() {
			var r = document.querySelectorAll("div.container div.rate input");
			var val = r[i].value;
			
			r[i].nextElementSibling.nextElementSibling.innerHTML = val;
			alert("Ati oferit un rating de "+ val +" stele!");
		}
	}
	
	var sm = document.querySelectorAll("div.container");
	for(let i = 0; i<sm.length; i++){
		var x;
		var ok;
		sm[i].onmousedown = function(ev) {
			x = ev.clientX;
			ok=0
			
		}
		sm[i].onmousemove = function(ev){
			var m = ev.clientX;
			if(parseInt(m)-parseInt(x)>150&&ok==0){
				sm[i].remove();
				ok=1;
			}
		}
		sm[i].onmouseup = function(ev) {
			ok=1
			
		}
	}
});