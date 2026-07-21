const lightbox = document.getElementById("lightbox");
const image = document.getElementById("lightbox-img");

function openImage(src){

    image.src = src;

    lightbox.style.display = "flex";

}

function closeImage(){

    lightbox.style.display = "none";

}

lightbox.addEventListener("click",(e)=>{

    if(e.target===lightbox){

        closeImage();

    }

});