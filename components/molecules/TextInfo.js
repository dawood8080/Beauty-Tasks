import { TextField } from "../atoms/TextField.js";
import { Label } from "../atoms/Label.js";

export class TextInfo {
    constructor(type ='', placeHolder='', name='', labelName=''){
        this.textInfo = document.createElement('div');
        const textField = new TextField(type, placeHolder, name).textField;
        const label = new Label(labelName).label;
        const labelWrapper = document.createElement('span');
        labelWrapper.classList.add('label-wrapper');
        labelWrapper.appendChild(label);

        this.textInfo.classList.add('text-info');
        this.textInfo.appendChild(labelWrapper);
        this.textInfo.appendChild(textField);
    }

    get currTextInfo(){
        return this.textInfo;
    }
}
