
function scrollToEnroll(e) {

    e.preventDefault();
    const element = document.getElementById("register");
    if (element) {
        const offset = element.offsetTop  - 67; // Offset to account for the fixed navbar
        window.scrollTo({
            top: offset,
            behavior: "smooth"
        });
    }

}

document.addEventListener('DOMContentLoaded', function() {
  // Enable "other" input field when selected
  document.getElementById('education').addEventListener('change', function() {
    if (this.value === 'other') {
      document.getElementById('education_other').disabled = false;
    } else {
      document.getElementById('education_other').disabled = true;
    }
  });
  
  let pos = document.getElementsByClassName("hero");
  document.addEventListener("scroll",()=>{
    console.log("inside");
    let nav = document.getElementsByClassName("nav")[0];
    if(pos[0].getClientRects()[0].top < 67){
      console.log("add");
      nav.classList.add("nav-shadow");
    }else{
      console.log("remove");
      nav.classList.remove("nav-shadow");
    }
  })
});

