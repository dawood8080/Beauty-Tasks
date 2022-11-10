export class PrevPageLink{
    #requiredPage;
    #backLink;
    constructor(type){
        this.#requiredPage = type;
        this.#backLink = document.createElement('a');
        this.#backLink.classList.add(`${this.#requiredPage}-link`);
        this.#backLink.textContent = type === 'login'? 'Register Here!':'Back to Log-in';
        setTimeout(this.#backLink.addEventListener('click',this.switchContent), 1000);
    }

    switchContent = (event) => {
        const currForm = this.#requiredPage === 'login';
        const currContent = event.target.closest(currForm ? '.login-container':'.register-container' );
        const nextContent = document.querySelector(currForm ? '.register-container' : '.login-container');
        nextContent.classList.remove('hide-container');
        currContent.classList.add('hide-container');
    }

    get loginText(){
        return this.#backLink;
    }
}
