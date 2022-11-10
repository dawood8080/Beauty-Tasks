export class Label{
    #label;
    constructor(labelClass){
        this.#label = document.createElement('i');
        const classes = labelClass.split(' ');
        classes.forEach(currClass => {this.#label.classList.add(currClass)})
    }

    get label(){
        return this.#label;
    }
}
