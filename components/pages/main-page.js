import { SignInUpTemplate } from '../templates/SigninUpTemplate.js'

window.addEventListener('DOMContentLoaded', (_event) => {
    const mainContainer = new SignInUpTemplate().mainContainer;
    document.body.appendChild(mainContainer);
});
