import { Button } from "../../Atoms/Button/Button"
import { PrevPageLink } from "../../Atoms/PrevPageLink/PrevPageLink"
import { Title } from "../../Atoms/Title/Title"

import { MainUserInputContainer } from '../../Molecules/MainUserInputContainer/MainUserInputContainer'
import { Select } from "../../Molecules/Select/Select"

import { countries } from "../../../Constants/countries"
import { backLinkText, formTitle } from "../../../Constants/enums"
import { userInputElements } from "../../../Constants/registration-data"

import { mainInputProperties } from "../../../Interfaces/register-data-interface"

import { checkRegistrationInput } from '../../../Utilities/signupUtils'


export class RegisterContainer{
    private _registerContainer : HTMLDivElement
    constructor(){
        this._registerContainer = document.createElement('div')
        this._registerContainer.classList.add('register-container')
        this._registerContainer.classList.add('hide-container')

        const {title} = new Title(formTitle.signup)
        this._registerContainer.appendChild(title)

        userInputElements.forEach((input: mainInputProperties) => {
            let textElement
            if(input.validation){
                textElement = new MainUserInputContainer(input.type, input.placeHolder, input.name, input.label, input.validation).mainInputContainer
            } else {
                textElement = new MainUserInputContainer(input.type, input.placeHolder, input.name, input.label).mainInputContainer
            }
            this._registerContainer.appendChild(textElement)
        })

        const country = new Select(countries).select
        this._registerContainer.appendChild(country)

        const registerButton = new Button('Register', 'signup', checkRegistrationInput).button
        this._registerContainer.appendChild(registerButton)

        const backToLogin = new PrevPageLink('signup', backLinkText.login).loginText
        this._registerContainer.appendChild(backToLogin)
    }

    get register(){
        return this._registerContainer
    }
}
