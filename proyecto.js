listaNombres = ['Luis', 'Rick', 'Daniel', 'Liz', 'Salvador', 'Carlos']
nombresAsignados = [];


//funcion para hacer click muestre un nombre
function showName1(){
    boton = document.getElementById('uno')
    nameSelect = listaNombres[Math.floor(Math.random() * listaNombres.length)]
    boton.textContent = nameSelect
     // Elimina el nombre seleccionado de la lista original
    listaNombres.splice(listaNombres.indexOf(nameSelect), 1);
     // Agrega el nombre seleccionado a la lista de nombres asignados
    nombresAsignados.push(nameSelect);
     // Muestra el nombre seleccionado en el botón
    boton.textContent = nameSelect;
}

function showName2(){
    boton = document.getElementById('dos')
    nameSelect = listaNombres[Math.floor(Math.random() * listaNombres.length)]
    boton.textContent = nameSelect
        // Elimina el nombre seleccionado de la lista original
    listaNombres.splice(listaNombres.indexOf(nameSelect), 1);
        // Agrega el nombre seleccionado a la lista de nombres asignados
    nombresAsignados.push(nameSelect);
    var xhr = new XMLHttpRequest()
    xhr.open('POST', 'api/guardar-nombres', true)
    xhr.send(JSON.stringify({
        nombres: nombresAsignados
    }))
        // Muestra el nombre seleccionado en el botón
    boton.textContent = nameSelect;

}

function showName3(){
    boton = document.getElementById('tres')
    nameSelect = listaNombres[Math.floor(Math.random() * listaNombres.length)]
    boton.textContent = nameSelect
        // Elimina el nombre seleccionado de la lista original
    listaNombres.splice(listaNombres.indexOf(nameSelect), 1);
        // Agrega el nombre seleccionado a la lista de nombres asignados
    nombresAsignados.push(nameSelect);
    var xhr = new XMLHttpRequest()
    xhr.open('POST', 'api/guardar-nombres', true)
    xhr.send(JSON.stringify({
        nombres: nombresAsignados
    }))
        // Muestra el nombre seleccionado en el botón
    boton.textContent = nameSelect;
}

function showName4(){
    boton = document.getElementById('cuatro')
    nameSelect = listaNombres[Math.floor(Math.random() * listaNombres.length)]
    boton.textContent = nameSelect
        // Elimina el nombre seleccionado de la lista original
    listaNombres.splice(listaNombres.indexOf(nameSelect), 1);
        // Agrega el nombre seleccionado a la lista de nombres asignados
    nombresAsignados.push(nameSelect);
    var xhr = new XMLHttpRequest()
    xhr.open('POST', 'api/guardar-nombres', true)
    xhr.send(JSON.stringify({
        nombres: nombresAsignados
    }))
        // Muestra el nombre seleccionado en el botón
    boton.textContent = nameSelect;
}

function showName5(){
    boton = document.getElementById('cinco')
    nameSelect = listaNombres[Math.floor(Math.random() * listaNombres.length)]
    boton.textContent = nameSelect
        // Elimina el nombre seleccionado de la lista original
    listaNombres.splice(listaNombres.indexOf(nameSelect), 1);
        // Agrega el nombre seleccionado a la lista de nombres asignados
    nombresAsignados.push(nameSelect);
    var xhr = new XMLHttpRequest()
    xhr.open('POST', 'api/guardar-nombres', true)
    xhr.send(JSON.stringify({
        nombres: nombresAsignados
    }))
        // Muestra el nombre seleccionado en el botón
    boton.textContent = nameSelect;
}

function showName6(){
    boton = document.getElementById('seis')
    nameSelect = listaNombres[Math.floor(Math.random() * listaNombres.length)]
    boton.textContent = nameSelect
        // Elimina el nombre seleccionado de la lista original
    listaNombres.splice(listaNombres.indexOf(nameSelect), 1);
        // Agrega el nombre seleccionado a la lista de nombres asignados
    nombresAsignados.push(nameSelect);
    var xhr = new XMLHttpRequest()
    xhr.open('POST', 'api/guardar-nombres', true)
    xhr.send(JSON.stringify({
        nombres: nombresAsignados
    }))
        // Muestra el nombre seleccionado en el botón
    boton.textContent = nameSelect;
}

