const accBtns = document.querySelectorAll("button");
accBtns.forEach(btn => {
    btn.addEventListener('click', function(){
        const desc = this.nextElementSibling;
        const plus = btn.querySelector('.plus-icon');
        const minus = btn.querySelector('.minus-icon')
        if(desc.classList.contains('active')) {
            desc.classList.remove('active');
            plus.classList.add('active');
            minus.classList.remove('active');
        } else {
            desc.classList.add('active');
            plus.classList.remove('active');
            minus.classList.add('active');
        }
    })
})