
let list = document.querySelectorAll('.sci li');
let bg = document.querySelector('.socialMedia');

// on mark change color by set on list icon  --> <li data-text="Facebook" data-color="#1877f2">
list.forEach(elements => {
    elements.addEventListener('mouseenter', function (event){
        let color = event.target.getAttribute('data-color');
        bg.style.backgroundColor = color
    })
    elements.addEventListener('mouseleave', function (event){
        bg.style.backgroundColor = '#fff'  //white
    })
});
