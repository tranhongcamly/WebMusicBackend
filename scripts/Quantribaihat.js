function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.nameadmin')) {
    var dropdowns = document.getElementsByClassName("dropdown");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
// const dropdown = document.querySelector(".dropdown");
// const nameadmin = document.querySelector(".nameadmin");

// nameadmin.forEach((btn, index) =>{
//     btn.addEventListener("click", function(){
//       dropdown[index].classList.toggle("d-none");
            
//     });
// });