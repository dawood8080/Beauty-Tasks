import { Background } from "../atoms/Background"
import { Image } from "../atoms/Image"
import { LoginContainer } from "../organisms/LoginContainer"
import { RegisterContainer } from "../organisms/RegisterContainer"

export class SignInUpTemplate{
    private _container : HTMLDivElement
    constructor(){
        this._container = document.createElement('div')
        this._container.classList.add('main-container')

        const displayedContainer = document.createElement('div')
        displayedContainer.classList.add('displayed-container')

        const mainImage = new Image().image

        const registration = new RegisterContainer().register
        const userLogin = new LoginContainer().login
        const {background} = new Background()

        displayedContainer.appendChild(mainImage)
        displayedContainer.appendChild(userLogin)
        displayedContainer.appendChild(registration)
        this._container.appendChild(background)
        this._container.appendChild(displayedContainer)
    }

    get mainContainer(){
        return this._container
    }
}
