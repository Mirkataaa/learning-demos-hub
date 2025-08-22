const signupModal = document.querySelector('.signup-form-wrapper');
const loginModal = document.querySelector('.login-form-wrapper');
const signUpBtn = document.querySelector('.signup');
const loginBtn = document.querySelector('.login');

const signUpX = document.querySelector('.signup-x');
const loginX = document.querySelector('.login-x');

signUpBtn.addEventListener('click' , () => {
    signupModal.classList.add('display');
});

loginBtn.addEventListener('click' , () => {
    loginModal.classList.add('display');
});

signUpX.addEventListener('click' , () => {
    signupModal.classList.remove('display')
});

loginX.addEventListener('click' , () => {
    loginModal.classList.remove('display')
});