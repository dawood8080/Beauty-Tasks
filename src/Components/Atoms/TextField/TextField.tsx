import { textFieldProps } from "@Interfaces/atom-interfaces"

export const TextField = (props: textFieldProps) => {
    return (
        <input
            className="text-field"
            type={props.type}
            placeholder={props.placeHolder}
            name={props.name}
            onChange={props.actionFunction}
            value={props.value}
        />
    )
}
