function mostrarModal(){
	var anuncio = document.getElementById("anuncio");

	anuncio.show();
	
	var iconocerrar = document.getElementById("iconocerrar");
	iconocerrar.addEventListener('click',cerrarModal);

}

function cerrarModal(){
  	var anuncio = document.getElementById("anuncio");
	anuncio.hide();	
}


function cambioSwitch(){
	var mirange = document.getElementById("mi-range");
	mirange.disabled=!this.checked;	
	showPopup();
}

function actualizarValorRange(){
	var mirange = document.getElementById("mi-range");
	valor = mirange.value;
	var htmlvalor = document.getElementById("valor");
	htmlvalor.innerHTML = valor;	
}

function showPopup(){
	var mirange = document.getElementById("mi-range");
	var popup = document.getElementById("popup");	
	popup.show(mirange);
	setTimeout(function() {
	  	var popup = document.getElementById("popup");

		popup.hide();
	}, 2000);
}


ons.ready(function() {

	var miswitch = document.getElementById("mi-switch");
	miswitch.addEventListener('change',cambioSwitch);
	
	var popup = document.getElementById("popup");
	popup.addEventListener('preshow',actualizarValorRange); 
  	mostrarModal()
  
})
