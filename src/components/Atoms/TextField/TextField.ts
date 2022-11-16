export class TextField{
    private _textField: HTMLInputElement
    constructor(private type : string ='', private placeHolder : string='',
     private name : string='', public actionFunction : any){
        this._textField = document.createElement('input')
        this._textField.type = this.type
        this._textField.name = this.name
        this._textField.placeholder = this.placeHolder
        if(this._textField.name !== 'password' && this._textField.name !== 'email2'){
        ['click','input','change'].forEach((currEvent) => {
            this._textField.addEventListener(
                currEvent,
                () => {
                    actionFunction(this._textField,
                    this.name === 'password2' ?
                    document.querySelectorAll('input[name=password]')[1] : null)
                }
            )
        })}

        this._textField.classList.add('text-field')
    }

    get textField(){
        return this._textField
    }
}
