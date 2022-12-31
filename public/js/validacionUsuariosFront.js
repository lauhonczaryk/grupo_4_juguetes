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
      errores.push("Campo Nombre no puede estar vacio");
      alert("Campo Nombre no puede estar vacio");
    } else if (campoNombre.value.length < 3) {
      errores.push("Campo Nombre debe tener un minimo de 3 caracteres");
      alert("Campo Nombre debe tener un minimo de 3 caracteres");
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
      errores.push("Campo Password no puede estar vacio");
      alert("Campo Contraseña no puede estar vacia");
    } else if (campoPassword.value.length < 8) {
      errores.push("Campo Contraseña debe tener minimo 8 caracteres");
      alert("Campo Contraseña debe tener minimo 8 caracteres");
    }

    if (campoAvatar.value == "") {
      errores.push("Debe incluir una imagen");
      alert("Debe incluir una imagen");
    } 
    

    if (errores.length > 0) {
      e.preventDefault();
      console.log(errores);
    }

    
  });
});
