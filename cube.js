/* =====================================
   Rubik Solver Pro
   cube.js
===================================== */

const faces = [
  { id: "face-U", color: "white", name: "U" },
  { id: "face-R", color: "red", name: "R" },
  { id: "face-F", color: "green", name: "F" },
  { id: "face-D", color: "yellow", name: "D" },
  { id: "face-L", color: "orange", name: "L" },
  { id: "face-B", color: "blue", name: "B" }
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
