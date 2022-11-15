export class ValidationText{
    private _text : HTMLSpanElement;
    constructor(){
        this._text = document.createElement('span')
        this._text.classList.add('validation-text')
    }

    get text(){
        return this._text;
    }
}
