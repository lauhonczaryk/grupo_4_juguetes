function ocultarMenu() {
    let elementos = document.getElementsByClassName("ocultable");
    for (elemento of elementos) {
        elemento.classList.toggle("menu-oculto")
    }
    }