function openExpPopup() {
    const expressionOptions = document.getElementById("expressionOptions");
    expressionOptions.innerHTML = "";

    Object.keys(videoMapping).forEach(key => {
        const rowDiv = document.createElement("div");
        rowDiv.classList.add("row");

        const images = key.split(",").map(imgName => imgName !== "--" ? `img/${imgName}.webp` : null);

        images.forEach(imgSrc => {
            if (imgSrc) {
                const imgElement = document.createElement("img");
                imgElement.src = imgSrc;
                rowDiv.appendChild(imgElement);
            }
        });

        rowDiv.addEventListener("click", function() {
            updateSquareWithImages(images); // Reemplaza el cuadrado con las imágenes seleccionadas
            closeExpPopup(); // Cierra el popup después de seleccionar una fila
        });

        expressionOptions.appendChild(rowDiv);
    });

    document.getElementById("expressionPopup").style.display = "block";
}

// Función para actualizar el cuadrado con las imágenes de la fila seleccionada
function updateSquareWithImages(images) {
    const squareContainerExp = document.querySelector(".square-containerExp"); // Usamos class selector
    squareContainerExp.innerHTML = ""; // Elimina el contenido actual del cuadrado

    images.forEach(imgSrc => {
        if (imgSrc) {
            const imgElement = document.createElement("img");
            imgElement.src = imgSrc;
            
            // Aseguramos que las imágenes tengan un tamaño fijo
            imgElement.style.width = "150px";  // Tamaño ajustado
            imgElement.style.height = "150px"; // Tamaño ajustado
            imgElement.style.borderRadius = "8px";
            imgElement.style.objectFit = "cover"; // Asegura que la imagen no se distorsione
            imgElement.style.margin = "5px"; // Añadir margen para espaciado

            squareContainerExp.appendChild(imgElement);
        }
    });
}
function closeExpPopup() {
    document.getElementById("expressionPopup").style.display = "none";
}