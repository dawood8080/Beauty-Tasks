import { validationTextProps } from "@Interfaces/atom-interfaces"

export const ValidationText = (props: validationTextProps) => {
    return (
        <p className="validation-text" style={{ color: props.messageColor }}>
            {props.text}
        </p>
    )
}
