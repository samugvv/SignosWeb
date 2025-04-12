function openExpPopup() {
    const expressionOptions = document.getElementById("expressionOptions");
    expressionOptions.innerHTML = "";

    const totalVideos = 238;

    // Creamos un contenedor tipo grid
    const gridContainer = document.createElement("div");
    gridContainer.classList.add("video-grid");

    for (let i = 1; i <= totalVideos; i++) {
        const number = String(i).padStart(3, "0"); // "001", "002", ..., "238"
        const fileName = `EI${number}.mp4`;

        const videoWrapper = document.createElement("div");
        videoWrapper.classList.add("video-wrapper");

        const videoElement = document.createElement("video");
        videoElement.src = `./vid/${fileName}`;
        videoElement.muted = true;
        videoElement.loop = true;
        videoElement.classList.add("video-thumb");

        videoElement.addEventListener("mouseenter", () => videoElement.play());
        videoElement.addEventListener("mouseleave", () => {
            videoElement.pause();
            videoElement.currentTime = 0;
        });

        videoWrapper.addEventListener("click", () => {
            updateSquareWithVideo(fileName);
            closeExpPopup(fileName);
        });

        videoWrapper.appendChild(videoElement);
        gridContainer.appendChild(videoWrapper);
    }

    expressionOptions.appendChild(gridContainer);
    document.getElementById("expressionPopup").style.display = "block";
    document.addEventListener("click", closeExpPopupIfOutside, true);
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