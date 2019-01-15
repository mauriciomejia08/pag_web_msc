//variables
var menu = document.getElementById("menuDesp");
//funciones
/*function desplegarBarra(){
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
}*/
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
	// Array con todas las imágenes que deseamos que se vayan cambiando a
	// cada clic
	var imagenes=Array("../asset/img/movil/faqm1/1.jpg","../asset/img/movil/faqm1/2.jpg","../asset/img/movil/faqm1/3.jpg","../asset/img/movil/faqm1/4.jpg","../asset/img/movil/faqm1/5.jpg",
	"../asset/img/movil/faqm1/6.jpg",
	"../asset/img/movil/faqm1/7.jpg",
	"../asset/img/movil/faqm1/8.jpg",
	"../asset/img/movil/faqm1/9.jpg",
	"../asset/img/movil/faqm1/10.jpg",
	"../asset/img/movil/faqm1/11.jpg",
	"../asset/img/movil/faqm1/12.jpg",
	"../asset/img/movil/faqm1/13.jpg",
	"../asset/img/movil/faqm1/14.jpg",
	"../asset/img/movil/faqm1/15.jpg",
	"../asset/img/movil/faqm1/16.jpg",
	"../asset/img/movil/faqm1/17.jpg",
	"../asset/img/movil/faqm1/18.jpg",
	"../asset/img/movil/faqm1/19.jpg",
	"../asset/img/movil/faqm1/20.jpg",
	"../asset/img/movil/faqm1/21.jpg",
	"../asset/img/movil/faqm1/22.jpg",
	"../asset/img/movil/faqm1/23.jpg",
	"../asset/img/movil/faqm1/24.jpg",
	"../asset/img/movil/faqm1/25.jpg");
	var imagenVisible=0;
 
	// Función que cambia la imagen actual por la siguiente
	function cambiaLeft(img)
	{
		imagenVisible--;
		if(imagenVisible<0)
		{
			imagenVisible=24;
		}
		document.getElementById("imgMockUp").src=imagenes[imagenVisible];
		cargarSiguienteImagen();
	}
	function cambiaRight(img)
	{
		imagenVisible++;
		if(imagenVisible>=imagenes.length)
		{
			imagenVisible=0;
		}
		document.getElementById("imgMockUp").src=imagenes[imagenVisible];
		cargarSiguienteImagen();
	}
 
	/**
	 * Esta función carga la siguiente imagen para no tener que esperar su carga
	 * en el momento de mostrarla.
	 */
	function cargarSiguienteImagen()
	{
		if((imagenVisible+1)<imagenes.length)
		{
			console.log(imagenVisible+1);
			var imgTmp=new Image();
			imgTmp.src=imagenes[imagenVisible+1];
		}
	}
 
	window.onload=function() {
		cargarSiguienteImagen();
	}