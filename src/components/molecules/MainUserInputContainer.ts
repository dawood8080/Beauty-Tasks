import { ValidationText } from '../atoms/ValidationText'
import { TextInfo } from "./TextInfo";

type actionFunctionType = (a: HTMLInputElement, b?: HTMLInputElement) => boolean

export class MainUserInputContainer{
    private _mainInputContainer : HTMLDivElement;
    constructor(private type : string ='', private placeHolder : string = '', private name : string = '',
    private labelName : string ='', public actionFunction? : actionFunctionType){
        this._mainInputContainer = document.createElement('div')
        this._mainInputContainer.classList.add('user-input-error-container')
        const inputField = new TextInfo(this.type, this.placeHolder, this.name, this.labelName, this.actionFunction).currTextInfo
        const errorText = new ValidationText().text;

        this._mainInputContainer.appendChild(inputField);
        this._mainInputContainer.appendChild(errorText);
    }

    get mainInputContainer(){
        return this._mainInputContainer
    }
}
