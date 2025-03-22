function openExpPopup() {
    const expressionOptions = document.getElementById("expressionOptions");
    expressionOptions.innerHTML = "";

    Object.keys(videoMapping).forEach(key => {
        const rowDiv = document.createElement("div");
        rowDiv.style.display = "flex";

        const images = key.split(",").map(imgName => imgName !== "--" ? `img/${imgName}.webp` : null);
        
        images.forEach(imgSrc => {
            if (imgSrc) {
                const imgElement = document.createElement("img");
                imgElement.src = imgSrc;
                rowDiv.appendChild(imgElement);
            }
        });
        expressionOptions.appendChild(rowDiv);
    });
    document.getElementById("expressionPopup").style.display = "block";
}

function closeExpPopup() {
    document.getElementById("expressionPopup").style.display = "none";
}