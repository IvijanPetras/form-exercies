document.addEventListener('DOMContentLoaded', () => {

    const password = document.querySelector('.password');
    const confPass = document.querySelector('.conf-pass');
    const btn = document.querySelector('button');

    btn.addEventListener('click', (e) => {
        if(password.value !== confPass.value){
            alert('Password does not match! Try again.');
            e.preventDefault();
        }
    })

    console.log()

});