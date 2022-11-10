import { PrevPageLink } from "../atoms/PrevPageLink.js";
import { RegisterText } from "../atoms/RegisterText.js";

export class RegisterIndicator{
    #registerTextContainer;
    constructor(text){
        this.#registerTextContainer = document.createElement('div');
        const registerLink = new PrevPageLink('login').loginText;
        const registerText = new RegisterText(text).registerText;

        this.#registerTextContainer.classList.add('register-text-container');
        this.#registerTextContainer.appendChild(registerText);
        this.#registerTextContainer.appendChild(registerLink);
    }

    get registerIndicator(){
        return this.#registerTextContainer;
    }
}
