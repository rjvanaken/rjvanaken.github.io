// Mobile Navigation JS

/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function toggleMenu() {
       var x = document.getElementById("mobileNav");
       var hamburger = document.getElementById("hamburgerMenu");
       var close = document.getElementById("closeMenu");

       if (x.style.display === "block") {
              x.style.display = "none";
              hamburger.style.display = "block";
              close.style.display = "none";


       } else {
              x.style.display = "block";
              hamburger.style.display = "none";
              close.style.display = "block";
       }
     }

// function changeIcon() {
//        var hamburger = document.getElementById("hamburgerMenu");
//        var close = document.getElementById("closeMenu");
//        if (close.style.display === "none") {
//               hamburger.style.display = "none"; close.style.display = "block";
//        } else {
//               hamburger.style.display = "block"; close.style.display = "none";
//        }
// }


function changeIcon() {
       
       if (document.getElementById("hamburgerMenu").style.display === "none") {
              document.getElementById("hamburgerMenu").style.display = "none";
              document.getElementById("closeMenu").style.display = "block";
       }
       else {
              document.getElementById("hamburgerMenu").style.display = "block";
              document.getElementById("closeMenu").style.display = "none";
       }
}


// Contact Form JS 

var frmvalidator = new Validator("emailForm");
frmvalidator.addValidation("nameInput","req","Please enter your Name");
frmvalidator.addValidation("nameInput","maxlen=40",
       "Max length for nameInput is 40");

frmvalidator.addValidation("emailInput","maxlen=50");
frmvalidator.addValidation("emailInput","req","Please enter your email address");
frmvalidator.addValidation("emailInput","email");


frmvalidator.addValidation("messageInput","req","You must enter a message");
frmvalidator.addValidation("messageInput","maxlen=500");


