//DOM Elements
const loginPage = document.querySelector('.login-page');
const loginModal = document.querySelector('.login-modal');
const modalX = document.querySelector('.login-modal i');
const loginFormBtn = document.querySelector('.login-form-btn');
const modalWrapper = document.querySelector('.modal-wrapper');
const modal = document.querySelector('.modal');
const postModalX = document.querySelector('.modal-header i');
const modalPostBtn = document.querySelector('.modal-header button');
const modalFooterPlus = document.querySelector('.modal-footer span');
const modalInput = document.querySelector('.modal-input');
/********************/


//Login page
modalX.addEventListener('click', () => {
    loginModal.style.display = 'none'
});
loginFormBtn.addEventListener('click', () => {
    const loginUserInfo = document.querySelector('.login-user-info');
    const loginPassword = document.querySelector('.login-password');

    if(loginUserInfo.value !== "" &&
    loginPassword.value !== ""){
        loginPage.style.display = 'none';
        newsFeedPage.style.display = 'block'
    } else{
        loginModal.style.display = 'block';
    }
});

