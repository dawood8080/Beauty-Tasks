import { countries } from "../../constants/countries"
import { formTitle } from "../../constants/enums"
import { userInputElements } from "../../constants/registration-data"
import { mainInputProperties } from "../../interfaces/register-data-interface"
import { Button } from "../atoms/Button"
import { PrevPageLink } from "../atoms/PrevPageLink"
import { Title } from "../atoms/Title"
import { Select } from "../molecules/Select"
import { MainUserInputContainer } from '../molecules/MainUserInputContainer'


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

        const registerButton = new Button('Register', 'signup').button
        this._registerContainer.appendChild(registerButton)

        const backToLogin = new PrevPageLink('signup').loginText
        this._registerContainer.appendChild(backToLogin)
    }

    get register(){
        return this._registerContainer
    }
}
