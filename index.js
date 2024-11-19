let btn = document.getElementById('btn-toggle');
let skillList = document.getElementById('skill-list');

btn.addEventListener('click', () =>{
    if (skillList.classList.contains('hide'))
        skillList.classList.remove('hide');
    else{
        skillList.classList.add('hide');
    }
});