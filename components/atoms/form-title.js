export class formTitle{
    constructor(text){
        this.title = document.createElement('h2');
        this.title.textContent = text;
        this.title.classList.add('form-title');
    }

    get currTitle(){
        return this.title;
    }
}
