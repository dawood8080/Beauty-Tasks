// import { ValidationText } from '../../Atoms/ValidationText/ValidationText'
import { TextInfo } from '../TextInfo/TextInfo'

type actionFunctionType = (a: HTMLInputElement, b?: HTMLInputElement) => boolean

type mainInputProps = {
    type : string,
    placeHolder : string,
    name : string,
    labelName : string,
    actionFunction? : actionFunctionType
}

export const MainUserInputContainer =(props: mainInputProps) => {
    return (
        <div className="user-input-error-container">
            <TextInfo
                type={props.type}
                placeHolder={props.placeHolder}
                name={props.name}
                labelName={props.labelName}
                actionFunction={props.actionFunction}
            />
            {/* <ValidationText /> @TODO: send the validation to it*/}
        </div>
    )
}
