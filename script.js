const btnShowLogin = 
document.querySelector("#show-login");
const btnHideLogin = 
document.querySelector("#close-btn");
const popup = 
document.querySelector("#popup");

btnShowLogin.addEventListener("click",()=>{
    popup.showModal();
})
btnHideLogin.addEventListener("click",()=>{
    popup.close();
})
/*document.querySelector("#show-login").addEventListener("click", function(){
    document.querySelector(".popup").classList.add("active");
});
document.querySelector(".popup .close-btn").addEventListener("click", function(){
    document.querySelector(".popup").classList.remove("active");
});*/

/*HEADER STICKY*/

/*window.addEventListener("scroll", function(){
    var header =this.document.querySelector ("header");
    header.classList.toggle("sticky", window.scrollY > 0)
})*/