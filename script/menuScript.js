document.addEventListener("DOMContentLoaded", function() {

    const menuSidebar = document.createElement("div");
    menuSidebar.id = "menu-sidebar";
    menuSidebar.innerHTML = `
        <a href="login.html"> <i class="fa fa-home"> </i> <span>Home</span> </a>
        <a href="profile.html"> <i class="fa fa-user"> </i> <span>Profile</span> </a>
        <a href="upload.html"> <i class="fa fa-camera"> </i> <span>upload</span> </a>
        <a href="Yours.html"> <i class="fa fa-archive"> </i> <span>Your Landscape</span> </a>
        <a href="Setting.html"> <i class="fa fa-gear"> </i> <span>Setting</span> </a>
        <a href="splash.html"> <i class="fa fa-paint-brush"> </i> <span>Splash</span> </a>
    `;

    document.body.appendChild(menuSidebar);


    const menuButton = document.getElementById("menu-button");


    menuButton.addEventListener("click", function() {
        menuSidebar.classList.toggle("active");


        if (menuSidebar.classList.contains("active")) {
            menuButton.style.display = "none";
        }
    });


    document.addEventListener("click", function(event) {
        if (!menuButton.contains(event.target) && !menuSidebar.contains(event.target)) {
            menuSidebar.classList.remove("active");
            menuButton.style.display = "block";
        }
    });
});
