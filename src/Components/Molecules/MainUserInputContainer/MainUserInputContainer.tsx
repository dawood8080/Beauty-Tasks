import { ValidationText } from "@Components/Atoms/ValidationText/ValidationText"
import { TextInfo } from "@Components/Molecules/TextInfo/TextInfo"
import "./MainUserInputContainer.css"
import "@Components/Pages/main-page/variables.css"
import "../TextInfo/TextInfo.css"
import "@Components/Atoms/ValidationText/ValidationText.css"

interface mainInputProps {
    actionFunction: (a: InputEvent) => void;
    error?: string;
    labelName: string;
    name: string;
    placeHolder: string;
    type?: string;
    value?: string;
    autoComplete: string
}

// destructure props
export const MainUserInputContainer = (props: mainInputProps) => (
    <div className="user-input-error-container" data-testid='input-container'>
        <TextInfo
            actionFunction={props.actionFunction}
            labelName={props.labelName}
            name={props.name}
            placeHolder={props.placeHolder}
            type={props.type || 'text'}
            value={props.value}
            autoComplete={props.autoComplete}
        />
        <ValidationText
            text={props.error}
        />
    </div>
)
