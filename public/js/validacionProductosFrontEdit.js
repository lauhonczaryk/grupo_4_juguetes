window.addEventListener("load", function(event){
    let formulario = document.querySelector("form.register");

  formulario.addEventListener("submit", function (e) {
    let campoNombre = document.querySelector("#name");
    let campoAvatar = document.querySelector("#avatar");
    let campoDescripción = document.querySelector("#description");
    let campoPrecio = document.querySelector("#price");
    let erroresFront  = document.querySelector("div.erroresFront ul")
    let errores = [];
    erroresFront.innerHTML = "";


    console.log(campoAvatar.value);

    if (campoNombre.value == "") {
      errores.push("Campo Nombre no puede estar vacio");
      //alert("Campo Nombre no puede estar vacio");
    } else if (campoNombre.value.length < 3) {
      errores.push("Campo Nombre debe tener un minimo de 3 caracteres");
      //alert("Campo Nombre debe tener un minimo de 3 caracteres");
    }

    if (campoDescripción.value == "") {
      errores.push("Campo Email no puede estar vacio");
      //alert("Campo Email no puede estar vacio");
    }

    if (campoPrecio.value == "") {
        errores.push("Campo Email no puede estar vacio");
        //alert("Campo Email no puede estar vacio");
      }
   

    if (campoPassword.value == "") {
      errores.push("Campo Password no puede estar vacio");
      //alert("Campo Contraseña no puede estar vacia");
    } else if (campoPassword.value.length < 8) {
      errores.push("Campo Contraseña debe tener minimo 8 caracteres");
      //alert("Campo Contraseña debe tener minimo 8 caracteres");
    }

    if (campoAvatar.value == "") {
      errores.push("Debe incluir una imagen");
      //alert("Debe incluir una imagen");
    } 
    

    if (errores.length > 0) {

      e.preventDefault();

      let erroresFront  = document.querySelector("div.erroresFront ul");
      for (let i = 0; i < errores.length ; i++) {
        erroresFront.innerHTML += "<li>" + errores[i] + "</li>"
      }
    }

    
  });
});
