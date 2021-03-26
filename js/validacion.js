var vNombres = document.getElementById('nombres');
var vApellidos = document.getElementById('apellidos');


function validarCompletitud(){
    console.log("estos son los datos" + vNombres);

    if (vNombres.value.length <= 0  || vApellidos.value.length <= 0 ) {
        swal("Por favor verifica!", "Ns haz diligenciado toda la informacion", "error");
    } else {
        swal("Muchas Gracias !", "sus datos han sido correctamente registrados", "success", {
            button: "Finalizar",
          });
    }
}