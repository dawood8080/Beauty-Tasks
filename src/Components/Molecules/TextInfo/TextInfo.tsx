import { Label } from "@Components/Atoms/Label/Label"
import { TextField } from "@Components/Atoms/TextField/TextField"

interface textInfoProps {
    type: string;
    placeHolder: string;
    name: string;
    labelName: string;
    actionFunction?: (a: InputEvent) => void;
    value?: string;
    autoComplete: string
}

export const TextInfo = (props: textInfoProps) => {
    return (
        <div className="text-info" data-testid='text-info'>
            <span className="label-wrapper">
                <Label iconClasses={props.labelName} />
            </span>
            <TextField
                actionFunction={props.actionFunction}
                name={props.name}
                placeHolder={props.placeHolder}
                type={props.type}
                value={props.value}
                autoComplete={props.autoComplete}
            />
        </div>
    )
}
