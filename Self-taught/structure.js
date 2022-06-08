const template = document.getElementById("navbar");

var navcode = [
    "<div id='navtemplate'>",
    "<a href='home.html'>Home</a>",
    "<a href='madison.html' class='active'>Madison</a>",
    "<a href='epic.html'>Epic</a>",
    "<a href='javascript:void(0);' class='icon' onclick='myFunction()'>",
    "    <i class='fa fa-bars'></i>",
    "</a>",
    "</div>"
]

for(i = 0; i < navcode.length; i++)
{
    template.innerHTML += navcode[i];
}

/* Toggle between adding and removing the "responsive" class to navbar when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("navbar");
    if (x.className === "navbar") {
      x.className += " responsive";
    } else {
      x.className = "navbar";
    }
} 