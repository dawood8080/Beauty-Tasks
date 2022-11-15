import { backLinkText } from "../../constants/enums"

export class PrevPageLink{
    private _requiredPage : string
    private _backLink : HTMLAnchorElement
    constructor(private type: string){
        this._requiredPage = this.type
        this._backLink = document.createElement('a')
        this._backLink.classList.add(`${this._requiredPage}-link`)
        this._backLink.textContent = this.type === 'login'? backLinkText.login:backLinkText.signup
        setTimeout( () => this._backLink.addEventListener('click',this.switchContent), 1000)
    }

    switchContent = (event: MouseEvent): void => {
        const currForm = this._requiredPage === 'login'
        const currContent = ((event.target) as Element).closest(currForm ? '.login-container':'.register-container' )
        const nextContent = document.querySelector(currForm ? '.register-container' : '.login-container')
        nextContent?.classList.remove('hide-container')
        currContent?.classList.add('hide-container')
    }

    get loginText(){
        return this._backLink
    }
}
