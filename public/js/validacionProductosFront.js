
    window.addEventListener("load", function () {
        let formulario = document.querySelector("form.register");
      //productossssssssssss
        formulario.addEventListener("submit", function (e) {
          let campoName = document.querySelector("#name");
          let campoDescription = document.querySelector("#description");
          let campoImagen = document.querySelector("#image");
          let campoCategory = document.querySelector("#category");
          let campoPrice = document.querySelector("#price");
          let errores = [];
      
          //console.log(campoAvatar.value);
      
          if (campoName.value == "") {
            errores.push("Ingresá el nombre del producto");
      
          } else if (campoName.value.length < 6) {
            errores.push("El nombre del producto debe tener mínimo 5 caractéres");
          }
          if (campoDescription.value == "") {
            errores.push("Ingresá una descrpción para este producto");
          }else if (campoDescription.value.length < 21) {
            errores.push("La descripción del producto debe tener mínimo 20 caractéres");
          }
      
          if (campoImagen.value == "") {
            errores.push("Ingresá la foto del producto");
          }
      
          if (campoCategory.value == "") {
            errores.push("Ingresá el ID de la categoría correspondiente: 1(Videojuegos) - 2(Aire libre) - 3(Juegos de mesa) - 4(Juguetes)'");
          }
          if (campoPrice.value == "") {
            errores.push("Ingresá un precio (sin comas, puntos ni símbolos)");
          }
      
          if (errores.length > 0) {
            e.preventDefault();
            let ulErrorProducts = document.querySelector('div.errorProducts ul');
                 for(let i = 0; i < errores.length; i++ ){
              ulErrorProducts.innerHTML += '<li>'+ errores[i] +'</li>'
            }
          }
      
      
        });
      });

    
