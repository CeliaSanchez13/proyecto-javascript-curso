let erroresFormu = [];

function validar(formData){
    //Creanos un array para los errores encontrados
    arrErr = [];

    if ( formData.get("nombre").length == 0 || formData.get("apellido").length == 0 || formData.get("tlf").length == 0 || formData.get("email").length == 0){
        arrErr.push("Algún campo del formulario no ha sido introducido.");
    }

    if ( formData.get("dias") <= 0){
        arrErr.push("El valor introducido de dias es negativo o cero.");
    }

    console.log(arrErr);

    return arrErr;
}

function resultadoReserva(objContenido){
    const list = document.getElementById("info_huesped");
    if (!document.getElementById("tituloH")){
        list.innerHTML += `<h1 id="tituloH" >Húespedes</h1>`;
    }

    list.append()



    

    //container.appendChild(img);
}

function insertarErrores(erroresFormu){
    const list = document.getElementById("erroresList");
    if (!document.getElementById("tituloE")){
        list.innerHTML += `<h1 id="tituloE" >Errores validación</h1>`;
    }
    for (i=0;i<erroresFormu.length;i++){
        console.log(erroresFormu[i])
        const p = document.createElement("p");
        p.innerHTML += `${erroresFormu[i]}`;
        list.appendChild(p)
    }

}

document.getElementById("registrar").addEventListener("click", () => {
    //Capturamos los datos del formulario..
    const formData = new FormData(document.getElementById("registrarFormu"));
    let coste = 0;

    //VALIDAR
    erroresFormu = validar(formData);

    if( erroresFormu.length == 0 ){
        //Esta todo OK
        //Calculamos el total...
        let dias = formData.get("dias");

        if ( formData.get("hab") == 'Individual'){
            coste = 50 * dias;
        }else if( formData.get("hab") == 'Doble' ){
            coste = 90 * dias;
        }else{
            coste = 150 * dias
        }

    let contenido = {
        nombre: formData.get("nombre"),
        apellido: formData.get("apellido"),
        tlf: formData.get("tlf"),
        email: formData.get("email"),
        coste: coste
    }

    resultadoReserva(contenido);

    }else{
        //Hay errores en la validacion
        insertarErrores(erroresFormu);
    }
     
  });