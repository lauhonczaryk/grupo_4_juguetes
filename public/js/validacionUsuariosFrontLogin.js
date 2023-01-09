window.addEventListener("load", function () {
  let formulario = document.querySelector("form.register");

  formulario.addEventListener("submit", function (e) {
   
    let campoEmail = document.querySelector("#email");
    let campoPassword = document.querySelector("#password");
    let erroresFront  = document.querySelector("div.erroresFront ul")
    let errores = [];
    erroresFront.innerHTML = "";

    if (campoEmail.value == "") {
      errores.push("Ingresá tu email");
    }
      if (campoPassword.value == "") {
      errores.push("Ingresá tu contraseña");
    } /*else if (campoPassword.value.length < 8) {
      errores.push("Campo Contraseña debe tener minimo 8 caracteres");
    }
*/
    
    if (errores.length > 0) {

      e.preventDefault();

      let erroresFront  = document.querySelector("div.erroresFront ul");
      for (let i = 0; i < errores.length ; i++) {
        erroresFront.innerHTML += "<li>" + errores[i] + "</li>"
      }
    }

    
  });
});
