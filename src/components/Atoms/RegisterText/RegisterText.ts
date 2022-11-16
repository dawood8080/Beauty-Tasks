export class RegisterText{
    private _registerText: HTMLSpanElement
    constructor(text: string){
        this._registerText = document.createElement('span')
        this._registerText.textContent = text
        this._registerText.classList.add('register-text')
    }

    get registerText(){
        return this._registerText
    }
}
