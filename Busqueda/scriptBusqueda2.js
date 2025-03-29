function openExpPopup() {
    const expressionOptions = document.getElementById("expressionOptions");
    expressionOptions.innerHTML = "";

    Object.keys(videoMapping).forEach(key => {
    const rowDiv = document.createElement("div");
    rowDiv.classList.add("row");

    const images = key.split(",").map(imgName => imgName !== "--" ? `img/${imgName}.webp` : "--");

    images.forEach(imgSrc => {
        if (imgSrc === "--") {
            // Cuadrado en blanco
            const emptyDiv = document.createElement("div");
            emptyDiv.classList.add("empty-square");
            emptyDiv.classList.add("empty-square");
            emptyDiv.style.width = "100px";  // Ajusta el tamaño según tus necesidades
            emptyDiv.style.height = "100px";
            emptyDiv.style.backgroundColor = "#f0f0f0"; // Color para distinguirlo (puedes cambiarlo)
            emptyDiv.style.border = "1px solid #ccc";
            rowDiv.appendChild(emptyDiv);
        } else {
            // Imagen normal
            const imgElement = document.createElement("img");
            imgElement.src = imgSrc;
            imgElement.style.width = "100px"; // Asegura que coincida con el tamaño del cuadro en blanco
            imgElement.style.height = "100px";
            rowDiv.appendChild(imgElement);
        }
    });

    rowDiv.addEventListener("click", function() {
        updateSquareWithImages(images);
        closeExpPopup(key);
    });

    expressionOptions.appendChild(rowDiv);
});

document.getElementById("expressionPopup").style.display = "block";

}

// Función para actualizar el cuadrado con las imágenes de la fila seleccionada
function updateSquareWithImages(images) {
    const squareContainerExp = document.querySelector(".square-containerExp");
    squareContainerExp.innerHTML = ""; // Limpia el contenido actual del contenedor

    images.forEach(imgSrc => {
        if (imgSrc === "--") {
            // Cuadrado vacío cuando no hay imagen
            const emptyDiv = document.createElement("div");
            emptyDiv.classList.add("empty-square");
            emptyDiv.style.width = "150px";
            emptyDiv.style.height = "150px";
            emptyDiv.style.backgroundColor = "#f0f0f0";
            emptyDiv.style.border = "2px solid #ccc";
            emptyDiv.style.borderRadius = "8px";
            emptyDiv.style.margin = "5px";

            squareContainerExp.appendChild(emptyDiv);
        } else {
            // Imagen normal
            const imgElement = document.createElement("img");
            imgElement.src = imgSrc;
            imgElement.style.width = "150px";
            imgElement.style.height = "150px";
            imgElement.style.borderRadius = "8px";
            imgElement.style.objectFit = "cover";
            imgElement.style.margin = "5px";

            squareContainerExp.appendChild(imgElement);
        }
    });
}

function closeExpPopup(key) {
    document.getElementById("expressionPopup").style.display = "none";
    showVideos(".videoContainerExp", key);
}