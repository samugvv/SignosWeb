const videoMapping = {
    "047,--,047,--": ["EI001.1.mp4", "EI001.2.mp4", "EI017.mp4", "EI031.mp4", "EI102.mp4", "EI128.mp4"],
    "048,026,057,026": ["EI002.mp4"],
    "048,051,048,051": ["EI003.mp4"],
    "065,011,054,--": ["EI004.mp4"],
    "027,--,--,--": ["EI005.mp4"],
    "059,--,059,--": ["EI006.mp4"],
    "054,--,--,--": ["EI008.mp4", "EI021.mp4", "EI109.mp4", "EI108.mp4", "EI126.mp4","EI132.mp4", "EI200.1.mp4", "EI200.2.mp4"],
    "048,056,056,--": ["EI010.mp4", "EI055.mp4"],
    "047,054,054,--": ["EI011.mp4"],
    "048,054,054,--": ["EI131.mp4", "EI011.mp4"],
    "056,--,056,--": ["EI012.mp4", "EI039.mp4", "EI043.mp4", "EI073.mp4", "EI129.mp4", "EI073.mp4", "EI107.mp4", "EI121.mp4", "EI129.mp4", "EI229.mp4"],
    "048,054,048,054": ["EI013.mp4"],
    "047,054,047,054": ["EI013.mp4"],
    "048,--,007,--": ["EI018.mp4"],
    "047,--,007,--": ["EI018.mp4"],
    "054,040,--,--": ["EI020.mp4"],
    "054,005,--,--": ["EI020.mp4", "EI135.mp4"],
    "052,--,--,--": ["EI021.mp4"],
    "047,017,017,--": ["EI022.mp4"],
    "048,017,017,--": ["EI022.mp4"],
    "062,--,--,--": ["EI024.mp4"],
    "026,056,026,056": ["EI025.mp4"],
    "057,026,--,--": ["EI026.mp4", "EI033.mp4"],
    "027,026,--,--": ["EI026.mp4"],
    "065,066,--,--": ["EI029.mp4"],
    "048,056,--,--": ["EI030.mp4","EI055.mp4", "EI114.mp4", "EI156.mp4"],
    "048,--,048,--": ["EI017.mp4", "EI031.mp4","EI058.mp4", "EI102.mp4", "EI128.mp4", "EI217.mp4"],
    "088,--,056,--": ["EI034.mp4"],
    "085,056,085,056": ["EI035.mp4", "EI086.mp4"],
    "044,033,--,--": ["EI038.mp4", "EI147.mp4", "EI198.mp4"],
    "046,056,--,--": ["EI040.mp4", "EI055.mp4"],
    "040,--,040,--": ["EI041.mp4"],
    "033,--,--,--": ["EI042.mp4", "EI084.mp4"],
    "022,--,022,--": ["EI044.mp4", "EI048.mp4", "EI206.mp4"],
    "023,056,023,056": ["EI046.mp4"],
    "025,056,025,056": ["EI046.mp4"],
    "023,--,023,--": ["EI049.mp4", "EI064.mp4"],
    "025,--,025,--": ["EI049.mp4", "EI064.mp4"],
    "052,--,052,--": ["EI050.mp4"],
    "046,056,056,--": ["EI052.mp4"],
    "062,079,062,079": ["EI059.mp4"],
    "056,--,--,--": ["EI067.mp4", "EI122.mp4", "EI151.mp4", "EI127.mp4"],
    "024,--,--,--": ["EI076.1.mp4", "EI076.2.mp4", "EI097.mp4"],
    "001,083,001,--": ["EI077.mp4"],
    "007,083,001,--": ["EI077.mp4"],
    "026,054,--,--": ["EI078.mp4"],
    "026,056,--,--": ["EI078.mp4", "EI193.mp4"],
    "081,056,--,--": ["EI079.mp4"],
    "072,--,--,--": ["EI082.mp4"],
    "048,037,--,--": ["EI085.mp4"],
    "018,046,--,--": ["EI087.mp4"],
    "018,045,--,--": ["EI087.mp4"],
    "088,--,--,--": ["EI090.mp4"],
    "001,--,047,--": ["EI091.mp4"],
    "001,--,052,--": ["EI091.mp4"],
    "047,056,047,056": ["EI092.mp4"],
    "048,056,048,056": ["EI092.mp4"],
    "026,--,026,--": ["EI093.mp4", "EI112.mp4"],
    "048,--,--,--": ["EI095.1.mp4", "EI095.2.mp4", "EI116.mp4"],
    "026,005,026,005": ["EI098.mp4"],
    "001,--,001,--": ["EI099.mp4", "EI205.mp4"],
    "058,--,058,--": ["EI009.mp4", "EI100.mp4"],
    "066,004,--,--": ["EI101.mp4"],
    "022,--,--,--": ["EI103.mp4", "EI152.mp4", "EI201.mp4"],
    "005,--,005,--": ["EI104.mp4"],
    "056,005,--,--": ["EI106.mp4"],
    "042,--,--,--": ["EI110.mp4"],
    "047,056,--,--": ["EI114.mp4"],
    "047,--,--,--": ["EI116.mp4"],
    "056,022,--,--": ["EI117.mp4"],
    "056,019,--,--": ["EI117.mp4"],
    "048,039,--,--": ["EI120.mp4", "EI235.mp4"],
    "056,081,--,--": ["EI125.mp4", "EI238.mp4"],
    "048,026,054,--": ["EI133.mp4"],
    "001,050,042,--": ["EI134.mp4"],
    "056,001,--,--": ["EI137.mp4"],
    "059,--,--,--": ["EI139.mp4", "EI190.mp4"],
    "081,--,--,--": ["EI140.mp4"],
    "054,001,054,--": ["EI146.mp4"],
    "007,056,007,056": ["EI148.mp4"],
    "039,--,--,--": ["EI149.mp4"],
    "052,--,--,--": ["EI021.mp4", "EI150.mp4"],
    "053,--,--,--": ["EI150.mp4", "EI155.1.mp4", "EI155.2.mp4", "EI163.mp4", "EI028.mp4"],
    "039,--,039,--": ["EI153.mp4"],
    "017,--,--,--": ["EI027.mp4", "EI159.mp4"],
    "093,--,--,--": ["EI164.mp4"],
    "054,--,054,--": ["EI165.mp4"],
    "066,--,066,--": ["EI166.mp4"],
    "046,058,058,--": ["EI169.mp4"],
    "056,001,056,001": ["EI173.mp4", "EI211.1.mp4", "EI211.2.mp4"],
    "097,--,--,--": ["EI076.1.mp4", "EI076.2.mp4", "EI174.mp4"],
    "034,033,034,033": ["EI177.mp4"],
    "001,--,--,--": ["EI179.mp4"],
    "079,--,--,--": ["EI182.mp4"],
    "080,--,--,--": ["EI182.mp4"],
    "056,048,056,048": ["EI184.mp4"],
    "048,053,--,--": ["EI186.mp4"],
    "033,--,033,--": ["EI199.mp4"],
    "019,--,--,--": ["EI201.mp4"],
    "019,--,019,--": ["EI206.mp4"],
    "040,--,--,--": ["EI203.mp4"],
    "054,001,--,--": ["EI211.1.mp4", "EI211.2.mp4"],
    "056,059,056,059": ["EI214.1.mp4", "EI214.2.mp4"],
    "048,054,--,--": ["EI215.mp4"],
    "046,054,--,--": ["EI215.mp4"],
    "061,--,061,--": ["EI218.mp4"],
    "047,001,056,--": ["EI219.mp4"],
    "047,001,054,--": ["EI219.mp4"],
    "046,001,056,--": ["EI219.mp4"],
    "046,001,054,--": ["EI219.mp4"],
    "048,001,056,--": ["EI219.mp4"],
    "048,001,054,--": ["EI219.mp4"],
    "016,--,--,--": ["EI220.mp4"],
    "065,009,--,--": ["EI222.mp4"],
    "048,017,017,--": ["EI022.mp4", "EI228.1.mp4", "EI228.2.mp4"],
    "048,017,001,--": ["EI228.1.mp4", "EI228.2.mp4"],
    "048,001,017,--": ["EI228.1.mp4", "EI228.2.mp4"],
    "048,001,001,--": ["EI228.1.mp4", "EI228.2.mp4"],
    "066,--,--,--": ["EI230.mp4"],
    "054,026,054,026": ["EI231.mp4"],
    "056,005,056,005": ["EI232.mp4"],
    "046,046,--,--": ["EI234.mp4"],
};



function showVideos(vidContainer, selectedKey) {
    if(selectedKey == ""){
        selectedKey = getSelectedImageNumbers();
    } 
    let videoContainer = document.querySelector(vidContainer);
    videoContainer.innerHTML = "";
    console.log("Selected Key: ", selectedKey); // Verifica la clave seleccionada
    console.log("pepe:", videoMapping[selectedKey]);
    if (videoMapping[selectedKey]) {
        videoMapping[selectedKey].forEach(video => {
            let videoElement = document.createElement("video");
            videoElement.src = `./vid/${video}`;
            videoElement.controls = true;
            videoContainer.appendChild(videoElement);
        });
    }
}


        const images = Array.from({length: 97}, (_, i) => `./img/${String(i+1).padStart(3, '0')}.webp`);
        let selectedSquare = null;


        document.querySelectorAll('.square').forEach(square => {
            square.addEventListener('click', function() {
                selectedSquare = this;
                openPopup();
            });
        });

        getSelectedImageNumbers();

        

        function openPopup() {
            const imageOptions = document.getElementById('imageOptions');
            imageOptions.innerHTML = '';
            images.forEach(img => {
                let imgElement = document.createElement('img');
                imgElement.src = img;
                imgElement.addEventListener('click', function() {
                    if (selectedSquare) {
                        selectedSquare.innerHTML="";
                        selectedSquare.style.backgroundImage = `url(${img})`;
                    }
                    closePopup();
                });
                imageOptions.appendChild(imgElement);
            });
            document.getElementById('imagePopup').style.display = 'block';

            document.addEventListener('click', closePopupIfOutside, true);
        }

        function closePopupIfOutside(event) {
            const popup = document.getElementById('imagePopup');
            if (!popup.contains(event.target)) {
                closePopup();
            }
        }




        

        function closePopup() {
        getSelectedImageNumbers();

            document.getElementById('imagePopup').style.display = 'none';
            showVideos(".videoContainer", "");
        }
        function deleteContent() {
            selectedSquare.style.backgroundImage = null;
            selectedSquare.innerHTML="Haz clic para seleccionar una imagen";
            closePopup();
        }

        function getSelectedImageNumbers() {
            let selectedNumbers = [];
            document.querySelectorAll('.square').forEach(square => {
                let backgroundImage = square.style.backgroundImage;
                let match = backgroundImage.match(/\/(\d{3})\.webp/);
                if (match) {
                    selectedNumbers.push(match[1]);
                }else{
                    selectedNumbers.push("--");
                }

            });

            console.log(selectedNumbers);
            return selectedNumbers;
        }