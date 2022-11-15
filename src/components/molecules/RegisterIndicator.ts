import { PrevPageLink } from "../atoms/PrevPageLink"
import { RegisterText } from "../atoms/RegisterText"

export class RegisterIndicator{
    private _registerTextContainer : HTMLDivElement
    constructor(private text: string){
        this._registerTextContainer = document.createElement('div')
        const registerLink = new PrevPageLink('login').loginText
        const {registerText} = new RegisterText(this.text)

        this._registerTextContainer.classList.add('register-text-container')
        this._registerTextContainer.appendChild(registerText)
        this._registerTextContainer.appendChild(registerLink)
    }

    get registerIndicator(){
        return this._registerTextContainer
    }
}
