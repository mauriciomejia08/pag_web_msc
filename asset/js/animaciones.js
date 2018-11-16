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
function desplegarMenu(){}
/*for(i=0; i < enlace.length; i++ ){
	if(document.getElementById(r1).style.display == 'block'){
		document.getElementById(r1).style.display = 'none';
	} else {
		document.getElementById(r1).style.display = 'block';
	}
};*/
//eventos

//}());