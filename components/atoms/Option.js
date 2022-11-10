export class Option{
    #option;
    constructor(value){
        this.#option = document.createElement('option');
        this.#option.classList.add('country-option');
        this.#option.textContent = value;
        this.#option.value = value;
    }

    get option(){
        return this.#option;
    }
}