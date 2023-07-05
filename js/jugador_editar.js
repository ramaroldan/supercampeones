// 1: Recuperamos los datos URL y los mostramos en los input
//console.log(location.search);

let argsUrl = location.search.substring(1).split('&');
console.log(argsUrl);

let data = [];
for(let i = 0; i < argsUrl.length; i++){
    data[i] = argsUrl[i].split('=');
}
console.log(data);

document.getElementById('id').value = decodeURIComponent(data[0][1]);
document.getElementById('nombre').value = decodeURIComponent(data[1][1]);
document.getElementById('edad').value = decodeURIComponent(data[2][1]);
document.getElementById('altura').value = decodeURIComponent(data[3][1]);
document.getElementById('posicion').value = decodeURIComponent(data[4][1]);
document.getElementById('imagen').value = decodeURIComponent(data[5][1]);

// 2: Actualizar los datos
function modificar(){
    let id = document.getElementById('id').value;
    let n = document.getElementById('nombre').value;
    let e = document.getElementById('edad').value;
    let a = document.getElementById('altura').value;
    let p = document.getElementById('posicion').value;
    let i = document.getElementById('imagen').value;

    let jugador = {
        nombre: n,
        edad: e,
        altura: a,
        posicion: p,
        imagen: i
    };

    let url = 'https://rominabenito.pythonanywhere.com/jugadores/'+id;
    let options = {
        body: JSON.stringify(jugador),
        method: 'PUT',
        headers: {'Content-Type': 'application/json'}
    };

    fetch(url, options)
    .then(function(){
        alert('El jugador fue editado exitosamente');
        window.location.href = './jugadores.html';
    })
    .catch(err=> {
        alert('No pudo modificarse el jugador');
        console.error(err);
    })
}
