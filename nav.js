new fullpage('#fullpage',{
    autoScrolling:true,
    navigation:true,
})
const toggleButton = document.getElementsByClassName("t_b")[0]
const navbarLink = document.getElementsByClassName("navbar-link")[0]

toggleButton.addEventListener('click',()=>{
    navbarLink.classList.toggle("active")


})