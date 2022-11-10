import { checkLoginInput } from '../../utilities/loginUtils.js'
import { checkRegistrationInput } from '../../utilities/signupUtils.js'

export class Button{
    #button;
    constructor(text = '', type ='', container){
        this.#button = document.createElement('button');
        this.#button.textContent = text;
        this.#button.type = type;
        this.#button.classList.add(`${container}-button`);
        setTimeout(() => {
            this.#button.addEventListener(
            'click',
            () => {
                container === 'login' ? checkLoginInput(): checkRegistrationInput()
            }
        );
        }, 1000);
    }

    get button(){
        return this.#button;
    }
}
