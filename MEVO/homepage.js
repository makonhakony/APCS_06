a = true;
function myFunction(x) {
    x.classList.toggle("change");
    if (a) {
        /* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
        document.getElementById("mySidenav").style.width = "250px";
        document.getElementById("main").style.marginLeft = "250px";
        a = false;
    }
    else {
        /* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
        document.getElementById("mySidenav").style.width = "0";
        document.getElementById("main").style.marginLeft = "0";
        a = true;
    }
}