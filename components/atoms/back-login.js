export class BackLogin{
    constructor(){
        this.backToLogin = document.createElement('a');
        this.backToLogin.classList.add('back-login');
        this.backToLogin.textContent = 'Back to Log-in';
        setTimeout(this.backToLogin.addEventListener('click',this.switchContent), 1000);
    }

    switchContent = (event) => {
        const currText = event.target.closest('.register-container');
        const nextContent = document.querySelector('.login-container');
        nextContent.classList.remove('hide-container');
        currText.classList.add('hide-container');
    }

    get loginText(){
        return this.backToLogin;
    }
}
