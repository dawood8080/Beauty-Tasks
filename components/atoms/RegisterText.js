export class RegisterText{
    #registerText;
    constructor(text){
        this.#registerText = document.createElement('span');
        this.#registerText.textContent = text;
        this.#registerText.classList.add('register-text')
    }

    get registerText(){
        return this.#registerText;
    }
}
