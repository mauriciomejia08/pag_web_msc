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
function MostrarOcultar(r1,aum1,dis1,limaum,limdis){
	var web1 = document.getElementById("web");
	var movil1 = document.getElementById("movil");
	var sol1 = document.getElementById("sol");
	if(document.getElementById(r1).style.display == 'none'){
		web1.style.display = 'none';
		movil1.style.display = 'none';
		sol1.style.display = 'none';
		document.getElementById(r1).style.position = 'absolute';
		document.getElementById(r1).style.display = 'block';
		aumenta(r1,aum1,limaum);
	} else {
		disminuye(r1,dis1,limdis);
	}
}
function aumenta(r1,cont,limaum){
	function aum() {
	document.getElementById(r1).style.width = cont+"%";
	cont++;
	console.log(cont);
		if(cont>limaum){
		clearInterval(stopaum);
		}
	}
	var stopaum = setInterval(aum ,5);
	}
function disminuye(r1,cont2,limdis){
	function dism() {
	document.getElementById(r1).style.width = cont2+"%";
	cont2=cont2-1;
	console.log(cont2);
		if(cont2<limdis){
			clearInterval(stopdism);
			document.getElementById(r1).style.display = 'none';
			}
	}
	var stopdism = setInterval(dism ,5);
}
function faq2vy(v){
	var vidy = document.getElementById("faq2v");
	switch (v){
		case 1:
		vidy.src = "https://www.youtube.com/embed/wBBuUJV7Cwc?start=248";
		break;
		case 2:
		vidy.src = "https://www.youtube.com/embed/OTjSj24sFPc?start=234";
		break;
		case 3:
		vidy.src = "https://www.youtube.com/embed/rg4FPB-i96I?start=433";
		break;
	}
}
/*function ocultar(){
	alert("ocultar");
	document.getElementById(dropbtn).style.display = 'none';
}*/
//eventos