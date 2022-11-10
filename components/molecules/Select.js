import { Label } from '../atoms/Label.js';
import { Option } from '../atoms/Option.js';

export class Select{
    #select;
    #selectContainer;
    constructor(options){
        this.#selectContainer = document.createElement('div');
        this.#select = document.createElement('select');
        const iconContainer = document.createElement('span');
        iconContainer.classList.add('label-wrapper');
        this.#selectContainer.classList.add('select-container');
        this.#select.classList.add('select');
        this.#select.name = 'countries';
        const selectLabel = new Label('fa-solid fa-globe').label;
        iconContainer.appendChild(selectLabel);
        options.forEach(country => {
            const countryOption = new Option(country).option;
            this.#select.appendChild(countryOption);
        });

        this.#selectContainer.appendChild(iconContainer);
        this.#selectContainer.appendChild(this.#select);
    }

    get select(){
        return this.#selectContainer;
    }
}
