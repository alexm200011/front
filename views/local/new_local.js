const apiURL = 'https://localhost:7143/api/Local';

function saveLocal(){
    var local = {
        id:0,
        name:document.getElementById("name").value,
        floor:document.getElementById("floor").value,
        code:document.getElementById("code").value
    }

    fetch(`${apiURL}`,{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(local)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Respuesta de la API',data);
    })
    .catch(error => {
        console.error('Error al enviar la solicityd',error)
    });
}