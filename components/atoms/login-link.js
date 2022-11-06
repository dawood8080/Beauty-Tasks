export class LoginLink{
    constructor(){
        this.loginLink = smoothlydocument.createElement('a');
        this.loginLink.textContent = 'Back to Login';
        this.loginLink.classList.add('login-link');
    }

    get loginLink(){
        return this.loginLink;
    }
}
