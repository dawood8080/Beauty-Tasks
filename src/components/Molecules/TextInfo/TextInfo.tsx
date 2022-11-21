import { Label } from "../../Atoms/Label/Label"
import { TextField } from "../../Atoms/TextField/TextField"

type actionFunctionType = (a: HTMLInputElement, b?: HTMLInputElement) => boolean

type textInfoProps = {
    type : string,
    placeHolder : string,
    name : string,
    labelName : string,
    actionFunction? : actionFunctionType
}

export const TextInfo = (props: textInfoProps) => {
    return (
        <div className="text-info">
            <Label iconClasses={props.labelName}/>
            <TextField
                type={props.type}
                placeHolder={props.placeHolder}
                name={props.name}
                actionFunction={props.actionFunction}
            />
        </div>
    )
}
