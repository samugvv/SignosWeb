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

const expressionPopup = document.getElementById("expressionPopup");
    expressionPopup.style.display = "block";

    // Añadir un evento de clic al documento para cerrar el popup al hacer clic fuera
    document.addEventListener('click', closeExpPopupIfOutsideExp, true);



}

function closeExpPopupIfOutsideExp(event) {
    const popup = document.getElementById('expressionPopup');
    if (!popup.contains(event.target)) {
        closeExpPopup();
    }
}

// Función para actualizar el cuadrado con las imágenes de la fila seleccionada
function updateSquareWithImages(images) {
    const squareContainerExp = document.querySelector(".square-containerExp");
    squareContainerExp.innerHTML = ""; // Limpia el contenido actual

    // Contenedor principal para las imágenes y el botón de borrar
    const imagesWrapper = document.createElement("div");
    imagesWrapper.classList.add("images-wrapper");

    images.forEach(imgSrc => {
        const itemContainer = document.createElement("div");
        itemContainer.classList.add("image-item");

        if (imgSrc === "--") {
            itemContainer.classList.add("empty-square");
        } else {
            const imgElement = document.createElement("img");
            imgElement.src = imgSrc;
            imgElement.classList.add("image-item-img");
            itemContainer.appendChild(imgElement);
        }

        imagesWrapper.appendChild(itemContainer);
    });

    // Botón de eliminación en grupo
    const deleteButton = document.createElement("button");
    deleteButton.classList.add("delete-button");
    deleteButton.innerText = "X";

    // Detener propagación y resetear
    deleteButton.addEventListener("click", (event) => {
        event.stopPropagation();
        resetExpressionSelector();
    });

    imagesWrapper.appendChild(deleteButton);
    squareContainerExp.appendChild(imagesWrapper);
}




function resetExpressionSelector() {
    const squareContainerExp = document.querySelector(".square-containerExp");
    squareContainerExp.innerHTML = ""; // Limpiamos el contenido

    const defaultDiv = document.createElement("div");
    defaultDiv.classList.add("squareExpresiones");
    defaultDiv.innerText = "Haz clic para seleccionar una Expresión Idiomática";

    // Permitir que se pueda volver a abrir el popup al hacer clic
    defaultDiv.addEventListener("click", openExpPopup);

    squareContainerExp.appendChild(defaultDiv);

    const videoContainer = document.querySelector(".videoContainerExp");
    if (videoContainer) {
        videoContainer.innerHTML = "";
    }

}


function closeExpPopup(key) {
    document.getElementById("expressionPopup").style.display = "none";
    showVideos(".videoContainerExp", key);
}