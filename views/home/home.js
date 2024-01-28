document.addEventListener('DOMContentLoaded', fetchData);

function fetchData() {
    const apiURL = 'https://localhost:7143/api/Local';

    fetch(apiURL)
        .then(response => response.json())
        .then(data => {
            const resultadoDiv = document.getElementById('resultado');
            // Verifica si hay datos antes de procesar
            if (data && data.length > 0) {
                // Inicializa el contenido HTML como una cadena vacía
                let htmlContent = "";

                // Itera sobre los elementos de la lista y acumula el contenido HTML
                data.forEach(element => {
                    htmlContent += `<tr>
                    <td>${element.id}</td>
                    <td>${element.name}</td>
                    <td>${element.floor}</td>
                    <td>${element.code}</td>
                    <td> 
                    <a class = "btn btn-success" href="../local/local_detail.html?id=${element.id}"> Detalle </a>
                    <a class = "btn btn-warning" href="../local/local_detail.html?id=${element.id}"> Editar </a>
                    <a class = "btn btn-danger" href="../local/local_detail.html?id=${element.id}"> Eliminar </a>
                    </td>
                                    </tr>`;
                });

                resultadoDiv.innerHTML = htmlContent;
            } else {
                resultadoDiv.innerHTML = "No se encontraron datos.";
            }
        })
        .catch(error => {
            console.error('Error al consumir la API', error);
        });
}
