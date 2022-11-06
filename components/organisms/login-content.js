import { formTitle } from '../atoms/form-title.js'
import { Button } from '../atoms/button.js';
import { TextInfo } from '../molecules/text-info.js';
import { RegisterIndicator } from '../molecules/register-indicator.js';

export class LoginContent{
    constructor(){
        this.loginContainer = document.createElement('div');
        this.loginContainer.classList.add('login-container');

        const title = new formTitle('Member Login').currTitle;
        this.loginContainer.appendChild(title);

        const userInputContainer = document.createElement('div');
        userInputContainer.classList.add('user-input-container');

        const userInputElements = [
            {iconType: 'fa-solid fa-user', type: 'email', placeHolder: 'Your email', name: 'email'},
            {iconType: 'fa-sharp fa-solid fa-key', type: 'password', placeHolder: 'Your password', name: 'password'},
        ];

        userInputElements.forEach(input => {
            const textElement = new TextInfo(input.type, input.placeHolder, input.name, input.iconType).currTextInfo;
            userInputContainer.appendChild(textElement);
        });

        const loginButton = new Button('Sign in', 'submit', 'login').currButton;
        const registerText = new RegisterIndicator('Don\'t have account? ').registerTextContainer;

        userInputContainer.appendChild(loginButton);
        userInputContainer.appendChild(registerText);

        this.loginContainer.appendChild(userInputContainer)
    }

    get login(){
        return this.loginContainer;
    }
}
