export class Title{
    private _title : HTMLParagraphElement
    constructor(private text : string){
        this._title = document.createElement('h2')
        this._title.textContent = this.text
        this._title.classList.add('form-title')
    }

    get title(){
        return this._title
    }
}
