function menuNavegacion(url1){
    const navbar = document.body // <div id="app">App</div>
    navbar.insertAdjacentHTML("afterbegin", '<nav id="menu" class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark"></navbar>');
    const menu = document.querySelector("#menu"); // <div id="app">App</div>
    menu.insertAdjacentHTML("afterbegin", '<div class="container-fluid">${url1}</div>');
    console.log(url1);
}