import { Image } from "../atoms/image.js";
import { RegisterContainer } from "../organisms/register-container.js";
import { LoginContent } from "../organisms/login-content.js";
import { Background } from "../atoms/background.js";

export class SignInUpContainer{
    constructor(contentType){
        this.container = document.createElement('div');
        this.container.classList.add('main-container');

        const displayedContainer = document.createElement('div');
        displayedContainer.classList.add('displayed-container');

        const mainImage = new Image('./images/pageImage.jpg').givenImage;

        const registration = new RegisterContainer().registerContainer;
        const userLogin = new LoginContent().login;
        const background = new Background().background;

        displayedContainer.appendChild(mainImage);
        displayedContainer.appendChild(userLogin);
        displayedContainer.appendChild(registration);
        this.container.appendChild(background);
        this.container.appendChild(displayedContainer)
    }

    get mainContainer(){
        return this.container;
    }
}
