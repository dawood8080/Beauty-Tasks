import { RegisterLink } from "../atoms/register-link.js";
import { RegisterText } from "../atoms/register-text.js";

export class RegisterIndicator{
    constructor(text){
        this.registerTextContainer = document.createElement('div');
        const registerLink = new RegisterLink().currRegisterLink;
        const registerText = new RegisterText(text).currRegisterText;

        this.registerTextContainer.classList.add('register-text-container');
        this.registerTextContainer.appendChild(registerText);
        this.registerTextContainer.appendChild(registerLink);
    }
}
