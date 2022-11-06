import { formTitle } from "../atoms/form-title.js";
import { Select } from "../atoms/select.js";
import { TextInfo } from "../molecules/text-info.js";
import { Button } from "../atoms/button.js";
import { BackLogin } from "../atoms/back-login.js";

export class RegisterContainer{
    constructor(){
        this.registerContainer = document.createElement('div');
        this.registerContainer.classList.add('register-container');
        this.registerContainer.classList.add('hide-container');

        const title = new formTitle('Registration').currTitle;
        this.registerContainer.appendChild(title);

        const userInputElements = [
            {label: 'fa-solid fa-user', type: 'text', placeHolder: 'Your first name', name: 'firstName'},
            {label: 'fa-solid fa-user', type: 'text', placeHolder: 'Your last name', name: 'lastName'},
            {label: 'fa-solid fa-envelope', type: 'email', placeHolder: 'Your email', name: 'email'},
            {label: 'fa-solid fa-lock', type: 'password', placeHolder: 'Your password', name: 'password'},
            {label: 'fa-solid fa-lock', type: 'password', placeHolder: 'Your password again', name: 'password2'},
        ];
        const countries = [
            'Country', 'Algeria', 'Bahrain', 'Comoros', 'Djibouti', 'Egypt', 'Iraq',
            'Jordan', 'Kuwait', 'Lebanon', 'Libya', 'Mauritania', 'Morocco',
            'Oman', 'Qatar', 'Saudi Arabia', 'Somalia', 'Sudan', 'Syria',
            'Tunisia', 'United Arab Emirates', 'Yemen'
        ];

        userInputElements.forEach(input => {
            const textElement = new TextInfo(input.type, input.placeHolder, input.name, input.label).currTextInfo;
            this.registerContainer.appendChild(textElement);
        });

        const country = new Select(countries).currSelect;
        this.registerContainer.appendChild(country);

        const registerButton = new Button('Register', 'submit', 'signup').currButton;
        this.registerContainer.appendChild(registerButton);

        const backToLogin = new BackLogin().loginText;
        this.registerContainer.appendChild(backToLogin);
    }

    get register(){
        return this.RegisterContainer;
    }
}
