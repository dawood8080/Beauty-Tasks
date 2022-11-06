import { Label } from "./label.js";

export class Select{
    constructor(options){
        this.selectContainer = document.createElement('div');
        this.select = document.createElement('select');
        const iconContainer = document.createElement('span');
        iconContainer.classList.add('label-wrapper');
        this.selectContainer.classList.add('select-container');
        this.select.classList.add('select');
        this.select.name = 'countries';
        const selectLabel = new Label('fa-solid fa-globe').currLabel;
        iconContainer.appendChild(selectLabel);
        options.forEach(country => {
            const temp = document.createElement('option');
            temp.textContent = country;
            temp.value = country;
            this.select.appendChild(temp);
        });

        this.selectContainer.appendChild(iconContainer  );
        this.selectContainer.appendChild(this.select);
    }

    get currSelect(){
        return this.selectContainer;
    }
}
