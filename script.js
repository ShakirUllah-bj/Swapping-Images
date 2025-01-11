let selectedContainer = document.getElementById("selectedContainer");



function swapImage(clickedImage){

    let selectedImage = document.createElement("img");
    selectedImage.src = clickedImage;
    selectedImage.setAttribute("id", "selected")
    if(selectedContainer.firstElementChild){

        
        selectedContainer.replaceChild(selectedImage, selectedContainer.firstElementChild)
    }else{
        
        selectedContainer.appendChild(selectedImage);

    }

}



