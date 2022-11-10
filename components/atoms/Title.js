export class Title{
    #title;
    constructor(text){
        this.#title = document.createElement('h2');
        this.#title.textContent = text;
        this.#title.classList.add('form-title');
    }

    get title(){
        return this.#title;
    }
}
