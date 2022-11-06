export class RegisterLink{
    constructor(){
        this.registerLink = document.createElement('a');
        this.registerLink.textContent = 'Register Here!';
        this.registerLink.classList.add('register-link');
        setTimeout(this.registerLink.addEventListener('click',this.switchContent), 1000);
    }

    switchContent = (event) => {
        const currText = event.target.closest('.login-container');
        const nextContent = document.querySelector('.register-container');
        nextContent.classList.remove('hide-container')
        currText.classList.add('hide-container')
    }

    get currRegisterLink(){
        return this.registerLink;
    }
}
