let scrollToTop = document.getElementById("scroll-to-top")
scrollToTop.onclick = ()=> {
  window.scroll({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
}

window.addEventListener("scroll", function () {
  let top = this.scrollY;
  console.log(top);
  if(top>715){
    scrollToTop.style.right = '0px'
  }
  else{
    scrollToTop.style.right = '-100px'
  }
});


let otherLinks = document.getElementById("other-links");
let megaMenu = document.querySelector(".mega-menu");
otherLinks.onclick = () => {
  megaMenu.classList.toggle("close")
}