import { Title } from '../atoms/Title.js'
import { Button } from '../atoms/Button.js';
import { TextInfo } from '../molecules/TextInfo.js';
import { RegisterIndicator } from '../molecules/RegisterIndicator.js';
import { userInputElements } from '../../constants/login-data.js'

export class LoginContainer{
    constructor(){
        this.loginContainer = document.createElement('div');
        this.loginContainer.classList.add('login-container');

        const title = new Title('Member Login').title;
        this.loginContainer.appendChild(title);

        const userInputContainer = document.createElement('div');
        userInputContainer.classList.add('user-input-container');

        userInputElements.forEach(input => {
            const textElement = new TextInfo(input.type, input.placeHolder, input.name, input.iconType).currTextInfo;
            userInputContainer.appendChild(textElement);
        });

        const loginButton = new Button('Sign in', 'submit', 'login').button;
        const registerText = new RegisterIndicator('Don\'t have account? ').registerIndicator;

        userInputContainer.appendChild(loginButton);
        userInputContainer.appendChild(registerText);

        this.loginContainer.appendChild(userInputContainer)
    }

    get login(){
        return this.loginContainer;
    }
}
