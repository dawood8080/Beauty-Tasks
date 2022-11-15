import { formTitle } from '../../constants/enums'
import { userInputElements } from '../../constants/login-data'
import { Button } from '../atoms/Button'
import { Title } from '../atoms/Title'
import { RegisterIndicator } from '../molecules/RegisterIndicator'
import { MainUserInputContainer } from '../molecules/MainUserInputContainer'

export class LoginContainer{
    private _loginContainer : HTMLDivElement
    constructor(){
        this._loginContainer = document.createElement('div')
        this._loginContainer.classList.add('login-container')

        const {title} = new Title(formTitle.login)
        this._loginContainer.appendChild(title)

        const userInputContainer = document.createElement('div')
        userInputContainer.classList.add('user-input-container')

        userInputElements.forEach(input => {
            const textElement = new MainUserInputContainer(input.type, input.placeHolder, input.name, input.iconType).mainInputContainer
            userInputContainer.appendChild(textElement)
        })

        const loginButton = new Button('Sign in', 'login').button
        const registerText = new RegisterIndicator('Don\'t have account? ').registerIndicator

        userInputContainer.appendChild(loginButton)
        userInputContainer.appendChild(registerText)

        this._loginContainer.appendChild(userInputContainer)
    }

    get login(){
        return this._loginContainer
    }
}
