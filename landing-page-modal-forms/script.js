const signupModal = document.querySelector('.signup-form-wrapper');
const loginModal = document.querySelector('.login-form-wrapper');
const signUpBtn = document.querySelector('.signup');
const loginBtn = document.querySelector('.login');

const signUpX = document.querySelector('.signup-x');
const loginX = document.querySelector('.login-x');

const formContainer = document.querySelector('.form-container');

signUpBtn.addEventListener('click' , () => {
    signupModal.classList.add('display');
    formContainer.classList.add('disable');
});

loginBtn.addEventListener('click' , () => {
    loginModal.classList.add('display');
    formContainer.classList.add('disable');
});

signUpX.addEventListener('click' , () => {
    signupModal.classList.remove('display');
    formContainer.classList.remove('disable');
});

loginX.addEventListener('click' , () => {
    loginModal.classList.remove('display');
    formContainer.classList.remove('disable')
});