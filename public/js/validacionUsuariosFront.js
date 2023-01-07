window.addEventListener("load", function () {
  let formulario = document.querySelector("form.register");

  formulario.addEventListener("submit", function (e) {
    let campoNombre = document.querySelector("#fullName");
    let campoAvatar = document.querySelector("#avatar");
    let campoEmail = document.querySelector("#email");
    let campoPassword = document.querySelector("#password");
    let errores = [];

    if (campoNombre.value == "") {
      errores.push("Ingresá tu nombre");

    } else if (campoNombre.value.length < 3) {
      errores.push("Tu nombre debe tener un mínimo de 2 caracteres");
    }
    if (campoEmail.value == "") {
      errores.push("Ingresá un email");
    }

    if (campoPassword.value == "") {
      errores.push("Ingresá una contranseña");
    } else if (campoPassword.value.length < 9) {
      errores.push("Tu contraseña debe contener un mínimo de 8 caracteres");
    }

    if (campoAvatar.value == "") {
      errores.push("Ingresá una imágen de perfil");
    }

    if (errores.length > 0) {
      e.preventDefault();
      let ulErrores = document.querySelector('div.errores ul');
      for (let i = 0; i < errores.length; i++) {
        ulErrores.innerHTML += '<li>' + errores[i] + '</li>'
      }
    }


  });
});
