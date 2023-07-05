function guardar(){
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

    let url = 'http://127.0.0.1:5000/jugadores'
    let options = {
        body: JSON.stringify(jugador),
        method: 'POST',
        headers: {'Content-Type': 'application/json'}
    }

    fetch(url, options)
    .then(function(){
        alert("Jugador agregado exitosamente");
        window.location.href = './jugadores.html'
    })
    .catch(error => {
        alert('No pudo agregarse el jugador');
        console.error(error);
    })
}