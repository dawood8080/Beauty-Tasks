export class RegisterText{
    constructor(text){
        this.registerText = document.createElement('span');
        this.registerText.textContent = text;
        this.registerText.classList.add('register-text')
    }

    get currRegisterText(){
        return this.registerText;
    }
}
