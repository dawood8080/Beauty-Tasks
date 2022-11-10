import { Image } from "../atoms/Image.js";
import { Background } from "../atoms/Background.js";
import { RegisterContainer } from "../organisms/RegisterContainer.js";
import { LoginContainer } from "../organisms/LoginContainer.js";

export class SignInUpTemplate{
    #container;
    constructor(){
        this.#container = document.createElement('div');
        this.#container.classList.add('main-container');

        const displayedContainer = document.createElement('div');
        displayedContainer.classList.add('displayed-container');

        const mainImage = new Image().image;

        const registration = new RegisterContainer().register;
        const userLogin = new LoginContainer().login;
        const background = new Background().background;

        displayedContainer.appendChild(mainImage);
        displayedContainer.appendChild(userLogin);
        displayedContainer.appendChild(registration);
        this.#container.appendChild(background);
        this.#container.appendChild(displayedContainer)
    }

    get mainContainer(){
        return this.#container;
    }
}
