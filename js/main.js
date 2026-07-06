document.addEventListener("DOMContentLoaded", () => {
    //Botón regresar universal
    const returnBtn = document.getElementById("return-button");

    if (returnBtn) {
        returnBtn.addEventListener("click", function (e) {
            e.preventDefault();
            if (window.history.length > 1) {
                window.history.back();
            } else {
                window.location.href = "index.html";
            }
        });
    }

    //Carrusel de imágenes de la página principal (index.html)

    const slides = document.querySelectorAll(".slide");
    const next = document.querySelector(".next");
    const prev = document.querySelector(".prev");

    if (slides.length && next && prev) {
        let index = 0;
        function showSlide(i){
            slides.forEach(slide => slide.classList.remove("active"));
            slides[i].classList.add("active");
        }
        next.addEventListener("click", () => {
            index = (index + 1) % slides.length;
            showSlide(index);
        });
        prev.addEventListener("click", () => {
            index = (index - 1 + slides.length) % slides.length;
            showSlide(index);
        });
        setInterval(() => {
            index = (index + 1) % slides.length;
            showSlide(index);
        }, 4000);
    }
});