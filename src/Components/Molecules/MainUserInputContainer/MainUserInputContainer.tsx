import { ValidationText } from "@Components/Atoms/ValidationText/ValidationText"
import { TextInfo } from "@Components/Molecules/TextInfo/TextInfo"
import { mainInputProps } from "@Interfaces/molecule-interfaces"

export const MainUserInputContainer = (props: mainInputProps) => {
    return (
        <div className="user-input-error-container">
            <TextInfo
                type={props.type}
                placeHolder={props.placeHolder}
                name={props.name}
                labelName={props.labelName}
                actionFunction={props.actionFunction}
                value={props.value}
            />
            <ValidationText
                text={props.error}
                messageColor={props.messageColor}
            />
        </div>
    )
}
