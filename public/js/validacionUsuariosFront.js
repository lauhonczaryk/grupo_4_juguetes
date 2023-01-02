window.addEventListener("load", function () {
  let formulario = document.querySelector("form.register");

  formulario.addEventListener("submit", function (e) {
    let campoNombre = document.querySelector("#fullName");
    let campoAvatar = document.querySelector("#avatar");
    let campoEmail = document.querySelector("#email");
    let campoPassword = document.querySelector("#password");
    let errores = [];

    console.log(campoAvatar.value);

    if (campoNombre.value == "") {
      errores.push("Ingresá tu nombre");
      alert('Ingresá tu nombre');
    } else if (campoNombre.value.length < 3) {
      errores.push("Tu nombre debe tener un mínimo de 2 caracteres");
     alert("Tu nombre debe tener un mínimo de 2 caracteres");
    }

    if (campoEmail.value == "") {
      errores.push("Campo Email no puede estar vacio");
      alert("Campo Email no puede estar vacio");
    }
    //Como validar un mail con Frontend que sea mail??
    // else if (campoEmail.value.length < 3) {
    //     alert("Campo Nombre debe tener un minimo de 3 caracteres")
    // }

    if (campoPassword.value == "") {
      errores.push("Ingresá una contranseña'");
      alert("Ingresá una contranseña'");
    } else if (campoPassword.value.length < 9) {
      errores.push("Tu contraseña debe contener un mínimo de 8 caracteres");
      alert("Tu contraseña debe contener un mínimo de 8 caracteres");
    }

    if (campoAvatar.value == "") {
      errores.push("Ingresá una imágen de perfil");
      alert("Ingresá una imágen de perfil");
    } 
    

    if (errores.length > 0) {
      e.preventDefault();
      console.log(errores);
    }

    
  });
});
