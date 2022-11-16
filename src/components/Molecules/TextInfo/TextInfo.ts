import { Label } from "../../Atoms/Label/Label"
import { TextField } from "../../Atoms/TextField/TextField"

type actionFunctionType = (a: HTMLInputElement, b?: HTMLInputElement) => boolean

export class TextInfo {
    private _textInfo : HTMLDivElement
    constructor(private type : string ='', private placeHolder : string = '', private name : string = '',
     private labelName : string ='', public actionFunction? : actionFunctionType){
        this._textInfo = document.createElement('div')
        const {textField} = new TextField(this.type, this.placeHolder, this.name, this.actionFunction)
        const {label} = new Label(this.labelName)
        const labelWrapper = document.createElement('span')
        labelWrapper.classList.add('label-wrapper')
        labelWrapper.appendChild(label)

        this._textInfo.classList.add('text-info')
        this._textInfo.appendChild(labelWrapper)
        this._textInfo.appendChild(textField)
    }

    get currTextInfo(){
        return this._textInfo
    }
}
