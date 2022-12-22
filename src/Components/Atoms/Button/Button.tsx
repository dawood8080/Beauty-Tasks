import { buttonType } from "@Strings/enums";
import "./Button.css"
import "../../Pages/main-page/variables.css"

interface ButtonProps {
    text: buttonType;
}

export const Button = (props: ButtonProps) => {
    return (
        <button className='form-button' type="submit">
            {props.text}
        </button>
    )
}
