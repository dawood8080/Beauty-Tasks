export class Option{
    private _option: HTMLOptionElement
    constructor(private value: string = ''){
        this._option = document.createElement('option')
        this._option.classList.add('country-option')
        this._option.textContent = this.value
        this._option.value = this.value
    }

    get option(){
        return this._option
    }
}