//function(){
//variables
var menu = document.getElementById("menuDesp");
//funciones
function desplegarBarra(){
		var cont = 1;
		var tit = document.getElementById("var_nav_fija");
	
		function Desplegar_navbar() {
			tit.style.width = cont+"%";
			cont++;
			if(cont>100){
			clearInterval(despnav);
			}
		}
		var despnav = setInterval(Desplegar_navbar ,9);
}
/*function MostrarOcultarBarNav {
	var cont = 1;
	var tit = document.getElementById("var_nav_fija");

	function Desplegar_navbar() {
		tit.style.width = cont+"%";
		cont++;
		if(cont>100){
		clearInterval(despnav);
		}
	}
	var despnav = setInterval(Desplegar_navbar ,9)
}*/
/*function MostrarOcultar(r1){
	if(document.getElementById(r1).style.display == 'none'){
		document.getElementById(r1).style.position = 'absolute';
		document.getElementById(r1).style.display = 'block';
	} else {
		document.getElementById(r1).style.display = 'none';
	}
}*/
function MostrarOcultar(r1){
	if(document.getElementById(r1).style.display == 'none'){
		document.getElementById(r1).style.position = 'absolute';
		document.getElementById(r1).style.display = 'block';
		aumenta(r1,1);
		debugger;
	} else {
		disminuye(r1,90);
		document.getElementById(r1).style.display = 'none';
	}
}
function aumenta(r1,cont){
	//var cont = 1;
		alert("aumenta");
		function aum() {
		r1.style.width = cont+"%";
		cont++;
		console.log(cont);
		if(cont>90){
		clearInterval(despnav);
		}
		}
		var despnav = setInterval(aum ,9);
		
	}
function disminuye(r1,cont2){
//		var cont2 = 90;
	
			function dism() {
			r1.style.width = cont2+"%";
			cont2=cont2-1;
			if(cont<10){
			clearInterval(despnav);
			}
			}
			var despnav = setInterval(dism ,9);
}
//eventos

//}());