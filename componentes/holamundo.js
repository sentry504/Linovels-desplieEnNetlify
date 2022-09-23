const app = document.body; // <div id="app">App</div>
app.insertAdjacentHTML("afterbegin", '<p class="insertado"></p>');
const app2 = document.querySelector(".insertado"); // <div id="app">App</div>
app2.insertAdjacentHTML("afterbegin", '<p class="insertado2">hola como</p>');