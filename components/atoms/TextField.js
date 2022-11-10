export class TextField{
    #textField;
    constructor(type ='', placeHolder='', name=''){
        this.#textField = document.createElement('input');
        this.#textField.type = type;
        this.#textField.name = name;
        this.#textField.placeholder = placeHolder;

        this.#textField.classList.add('text-field');
    }

    get textField(){
        return this.#textField;
    }
}
