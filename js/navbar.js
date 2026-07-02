// Menú desplegable de hamburguesa
function toggleMenu() {
    document.getElementById("menu").classList.toggle("show");
}

//Dropdown
function toggleDropdown(event) {
    event.preventDefault();
    event.stopPropagation();
    const dropdown = event.currentTarget.parentElement;
    // Cierra cualquier otro dropdown abierto
    document.querySelectorAll(".dropdown").forEach(item => {
        if (item !== dropdown) {
            item.classList.remove("active");
        }
    });
    dropdown.classList.toggle("active");
}

//Cerrar todo al hacer click afuera
document.addEventListener("click", function (event) {

    // Cerrar dropdowns
    if (!event.target.closest(".dropdown")) {
        document.querySelectorAll(".dropdown").forEach(item => {
            item.classList.remove("active");
        });

    }

    // Cerrar menú hamburguesa
    const menu = document.getElementById("menu");
    const toggle = document.querySelector(".toggle");
    if (
        menu.classList.contains("show") &&
        !menu.contains(event.target) &&
        !toggle.contains(event.target)
    ) {
        menu.classList.remove("show");
    }
});

//Cerrar menú al dar click en un link
document.querySelectorAll(".menu a").forEach(link => {
    link.addEventListener("click", () => {
        document.getElementById("menu").classList.remove("show");
    });
});