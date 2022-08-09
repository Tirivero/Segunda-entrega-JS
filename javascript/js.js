mostrarCategorias();


function mostrarCategorias() {

    categorias.forEach((categoria) => {
        mostrarCategoria(categoria);
    })

}

function mostrarCategoria(categoria) {
    document.getElementById("nodoClientes").style.display = "none"
    const nodoCategoria = document.getElementById("nodoCategorias");
    const btn = document.createElement("button");
    btn.innerText = categoria;
    btn.classList.add("boton");

    btn.addEventListener("click", () => {
        mostrarProductos(categoria)
    })

    nodoCategoria.appendChild(btn);
}

function mostrarProductos(categoria) {
    switch (categoria) {
        case "Guitarras":
            mostrarGuitarras();
            break;
        case "Bajos":
            mostrarBajos();
            break;
        case "Baterias":
            mostrarBaterias();
            break;
        case "Costo envio":
            valoresZona();
            break;
        case "Registrarse":
            registroCliente();
            break;
        case "Modo Dark":
            programarModoDarkYLight();
            break;
        default:
            alert("Categoria Inválida")
            break;
    }
}


function programarModoDarkYLight() {
    const boton = document.getElementById("nodoProductos");
    const btnLight = document.createElement("button")
    btnLight.innerText = "Modo light"
    btnLight.classList.add("boton");
    boton.appendChild(btnLight)
    document.body.setAttribute("style", "background-color:black;color:white")

    btnLight.addEventListener("click", () => {
        document.body.setAttribute("style", "background-color:white;color:black");

    })
}

////////FUNCIONES PARA MOSTRAR PRODUCTOS //////

function mostrarGuitarras() {
    const noditoProductos = document.getElementById("nodoProductos");
    document.getElementById("nodoClientes").style.display = "none"
    noditoProductos.innerHTML = "";
    noditoProductos.setAttribute("style", "display:flex")

    let arrayGuitarras = arrayProductos.filter(arrayProductos => arrayProductos.id === 1)
    arrayGuitarras.forEach((producto) => {

        const nodoDiv = document.createElement("div");
        nodoDiv.innerHTML = `<h4>${producto.name}</h4>
                                <div>${producto.precio}</div>
                                <div><img src=${producto.img} width="200px"></div>`;

        noditoProductos.appendChild(nodoDiv);

        localStorage.setItem(`guitarra`, JSON.stringify(arrayGuitarras));

    })
}


function mostrarBajos() {
    const noditoProductos = document.getElementById("nodoProductos");
    document.getElementById("nodoClientes").style.display = "none"
    noditoProductos.innerHTML = "";
    noditoProductos.setAttribute("style", "display:flex")

    let arrayBajos = arrayProductos.filter(arrayProductos => arrayProductos.id === 2)
    arrayBajos.forEach((producto) => {

        const nodoDiv = document.createElement("div");
        nodoDiv.innerHTML = `<h4>${producto.name}</h4>
                                <div>${producto.precio}</div>
                                <div><img src=${producto.img} width="200px"></div>`;

        noditoProductos.appendChild(nodoDiv);
        localStorage.setItem(`guitarra`, JSON.stringify(arrayBajos));
    })
};

function mostrarBaterias() {
    const noditoProductos = document.getElementById("nodoProductos");
    document.getElementById("nodoClientes").style.display = "none"
    noditoProductos.innerHTML = "";
    noditoProductos.setAttribute("style", "display:flex")

    let arrayBaterias = arrayProductos.filter(arrayProductos => arrayProductos.id === 3)
    arrayBaterias.forEach((producto) => {

        const nodoDiv = document.createElement("div");
        nodoDiv.innerHTML = `<h4>${producto.name}</h4>
                                <div>${producto.precio}</div>
                                <div><img src=${producto.img} width="200px"></div>`;

        noditoProductos.appendChild(nodoDiv);
        localStorage.setItem(`guitarra`, JSON.stringify(arrayBaterias));
    })
};


////FUNCION MOSTRAR VALORES ZONA/////
function valoresZona() {

    const botonEnvios = document.getElementById("nodoProductos");
    document.getElementById("nodoClientes").style.display = "none"
    botonEnvios.innerText = "";
    arrayZonas.forEach((zona) => {
        const nodoDiv = document.createElement("div");
        nodoDiv.classList.add("mapitas");
        nodoDiv.innerHTML = `<h4>${zona.zona}</h4>
                                <div>${zona.valor}</div>
                                <div><img src=${zona.img} ></div>`;

        botonEnvios.appendChild(nodoDiv);
        localStorage.setItem(`guitarra`, JSON.stringify(arrayZonas));
    })
}


///////REGISTRAR CLIENTES////////


function registroCliente() {

    document.getElementById("nodoProductos").style.display = "none"
    document.getElementById("nodoClientes").style.display = "block"
    const formularioCliente = document.getElementById("formId");
    formularioCliente.addEventListener(`submit`, function (ev) {
        ev.preventDefault();
        let nombre = document.getElementById("inputNombre").value;
        let apellido = document.getElementById("inputApellido").value;
        let email = document.getElementById("inputEmail").value;

        class Cliente {
            constructor(nombre, apellido, email) {
                this.nombre = nombre;
                this.apellido = apellido;
                this.email = email;
            }

        }

        let clienteNuevo = new Cliente(nombre, apellido, email);

        console.log(clienteNuevo);
        localStorage.setItem(`Cliente Nuevo`, JSON.stringify(clienteNuevo))
    });

}