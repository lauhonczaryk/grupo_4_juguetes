window.addEventListener("load", function () {
  let formulario = document.querySelector("form.register");

  formulario.addEventListener("submit", function (e) {
    let campoNombre = document.querySelector("#fullName");
    let campoAvatar = document.querySelector("#avatar");
    let campoEmail = document.querySelector("#email");
    let campoPassword = document.querySelector("#password");
    let erroresFront  = document.querySelector("div.erroresFront ul")
    let errores = [];
    erroresFront.innerHTML = "";


    console.log(campoAvatar.value);

    if (campoNombre.value == "") {
      errores.push("Ingresá un nombre");

    } else if (campoNombre.value.length < 3) {
      errores.push("El nombre debe tener mínimo 3 caracteres");
      //alert("Campo Nombre debe tener un minimo de 3 caracteres");
    }

    if (campoEmail.value == "") {
      errores.push("Ingresá un email");

    }


    if (campoPassword.value == "") {
      errores.push("Ingresá una contraseña");
    } else if (campoPassword.value.length < 8) {
      errores.push("La contraseña debe tener mínimo 8 caracteres");
    }

    if (campoAvatar.value == "") {
      errores.push("Agregá una imagen de perfil");
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