
'use strict';

document.addEventListener('DOMContentLoaded', function() {
    const switcher = document.querySelector('.btn');
    const body = document.body;

    switcher.addEventListener('click', function() {
        body.classList.toggle('dark-theme');

        const isDarkMode = body.classList.contains('dark-theme');

        if (isDarkMode) {
            switcher.textContent = 'Light';
        } else {
            switcher.textContent = 'Dark';
        }

        console.log('Nome atual da classe: ' + body.className);
    });
}); 

/*
'use strict'
const switcher = document.querySelector('.btn');
switcher.addEventListener('click', function() {
    document.body.classList.toggle('dark-theme')

    var className = document.body.className;
if(className == "light-theme"){
    this.textContent = "Dark";
}
else{
    this.textContent = "Light";
} 

console.log('Nome atual da classe: ' + className);


});
*/
