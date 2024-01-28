const apiURL = 'https://localhost:7143/api/Local';
document.addEventListener('DOMContentLoaded', getLocalDetails);
var url = new URL(window.location.href);
var id = url.searchParams.get("id");
function getLocalDetails(){
    fetch(`${apiURL}/${id}`,{
        method:'GET',
    }).then(response => response.json()).then(data => {
        const resultadoDiv = document.getElementById('localInfo');
        if (data != null) {
            let htmlContent = "";
                htmlContent += `
                <p>Nombre: ${data.name}</p>
                <p>Piso: ${data.floor}</p>
                <p>Codigo: ${data.code}</p>`;
            resultadoDiv.innerHTML = htmlContent;
        } else {
            resultadoDiv.innerHTML = "No se encontraron datos.";
        }
    })
    .catch(error => {
        console.error('Error al consumir la API', error);
    });
}