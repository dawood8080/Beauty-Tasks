import { SignInUpTemplate } from '../../Templates/SigninUpTemplate/SigninUpTemplate'

window.addEventListener('DOMContentLoaded', (_event: Event) => {
    const {mainContainer} = new SignInUpTemplate()
    document.body.appendChild(mainContainer)
})
