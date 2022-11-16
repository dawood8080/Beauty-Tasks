export class Button{
    private _button: HTMLButtonElement
    constructor(private text: string = '', private container: string = '', public factionName: () => void){
        this._button = document.createElement('button')
        this._button.textContent = this.text
        this._button.classList.add(`${this.container}-button`)
        this._button.addEventListener('click', factionName)
    }

    get button(){
        return this._button
    }
}
