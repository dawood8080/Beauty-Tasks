import { Label } from "@Components/Atoms/Label/Label"
import { TextField } from "@Components/Atoms/TextField/TextField"
import { textInfoProps } from "@Interfaces/molecule-interfaces"

export const TextInfo = (props: textInfoProps) => {
    return (
        <div className="text-info">
            <span className="label-wrapper">
                <Label iconClasses={props.labelName} />
            </span>
            <TextField
                type={props.type}
                placeHolder={props.placeHolder}
                name={props.name}
                actionFunction={props.actionFunction}
                value={props.value}
            />
        </div>
    )
}
