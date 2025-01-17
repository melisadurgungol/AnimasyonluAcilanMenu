const open = document.getElementById('open');
const close = document.getElementById('close');
const container = document.querySelector('.container');
const panels = document.querySelectorAll(".panel");


open.addEventListener('click', () => {
    container.classList.add('show-nav');
});

close.addEventListener('click', () => {
    container.classList.remove('show-nav');
});


panels.forEach(panel => {
    panel.addEventListener("click", () => {
        removeActive();
        panel.classList.add("active");
    });
});

function removeActive(){
    panels.forEach(panel => {
        panel.classList.remove("active");
    });
}

