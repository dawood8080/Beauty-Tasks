import { buttonProps } from "@Interfaces/atom-interfaces"

export const Button = (props: buttonProps) => {
    return (// send the type of buttons in props
        <button className={`${props.type}-button`} type="submit">
            {props.text}
        </button>
    )
}
