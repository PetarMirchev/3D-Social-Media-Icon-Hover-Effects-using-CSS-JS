

//vanilla tilt.js  --> https://micku7zu.github.io/vanilla-tilt.js/

let list = document.querySelectorAll('.sci li');
let bg = document.querySelector('.socialMedia');

list.forEach(elements => {
    elements.addEventListener('mouseenter', function (event){
        let color = event.target.getAttribute('data-color');
        bg.style.backgroundColor = color
    })
    elements.addEventListener('mouseleave', function (event){
        bg.style.backgroundColor = '#fff'  //white
    })
});
