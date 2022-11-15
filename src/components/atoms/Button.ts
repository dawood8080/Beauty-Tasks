import { checkLoginInput } from '../../utilities/loginUtils'
import { checkRegistrationInput } from '../../utilities/signupUtils'

export class Button{
    private _button: HTMLButtonElement
    constructor(private text: string = '', private container: string = ''){
        this._button = document.createElement('button')
        this._button.textContent = this.text
        this._button.classList.add(`${this.container}-button`)
        this._button.addEventListener(
            'click',
            () => {
                return this.container === 'login' ? checkLoginInput(): checkRegistrationInput()
            }
        )
    }

    get button(){
        return this._button
    }
}
