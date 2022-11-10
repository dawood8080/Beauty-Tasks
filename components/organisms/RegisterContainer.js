import { Title } from "../atoms/Title.js";
import { Select } from "../molecules/Select.js";
import { TextInfo } from "../molecules/TextInfo.js";
import { Button } from "../atoms/Button.js";
import { PrevPageLink } from "../atoms/PrevPageLink.js";
import { countries } from "../../constants/countries.js";
import { userInputElements } from "../../constants/registration-data.js";

export class RegisterContainer{
    #registerContainer;
    constructor(){
        this.#registerContainer = document.createElement('div');
        this.#registerContainer.classList.add('register-container');
        this.#registerContainer.classList.add('hide-container');

        const title = new Title('Registration').title;
        this.#registerContainer.appendChild(title);

        userInputElements.forEach(input => {
            const textElement = new TextInfo(input.type, input.placeHolder, input.name, input.label).currTextInfo;
            this.#registerContainer.appendChild(textElement);
        });

        const country = new Select(countries).select;
        this.#registerContainer.appendChild(country);

        const registerButton = new Button('Register', 'submit', 'signup').button;
        this.#registerContainer.appendChild(registerButton);

        const backToLogin = new PrevPageLink('signup').loginText;
        this.#registerContainer.appendChild(backToLogin);
    }

    get register(){
        return this.#registerContainer;
    }
}
