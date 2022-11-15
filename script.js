let navbar = document.querySelector('.navbar');

document.querySelector('#menu').onclick = () =>{
    navbar.classList.add('active');
}
document.querySelector('#close').onclick = () =>{
    navbar.classList.remove('active');
}