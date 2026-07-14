/* =====================================
   Rubik Solver Pro
   cube.js
===================================== */

const faces = [
  { id: "face-U", name: "U", color: "white" },
  { id: "face-R", name: "R", color: "red" },
  { id: "face-F", name: "F", color: "green" },
  { id: "face-D", name: "D", color: "yellow" },
  { id: "face-L", name: "L", color: "orange" },
  { id: "face-B", name: "B", color: "blue" }
];

let selectedColor = "white";

document.querySelectorAll(".color").forEach(btn => {
    btn.addEventListener("click", () => {
        selectedColor = btn.dataset.color;
    });
});

window.addEventListener("DOMContentLoaded", () => {

    faces.forEach(face => {

        const container = document.getElementById(face.id);

        if (!container) return;

        container.innerHTML = `
            <h3>${face.name}</h3>
            <div class="face-grid"></div>
        `;

        const grid = container.querySelector(".face-grid");

        for (let i = 0; i < 9; i++) {

            const sticker = document.createElement("div");

            sticker.className = "sticker";
            sticker.style.background = face.color;

            sticker.addEventListener("click", () => {
                sticker.style.background = selectedColor;
            });

            grid.appendChild(sticker);
        }

    });

});
