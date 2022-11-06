import { SignInUpContainer } from './templates/signinup-container.js'

window.addEventListener('DOMContentLoaded', (event) => {
    const mainContainer = new SignInUpContainer('login').mainContainer;
    document.body.appendChild(mainContainer);
});
