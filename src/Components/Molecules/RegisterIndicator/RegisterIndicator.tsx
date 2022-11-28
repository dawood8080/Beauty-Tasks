import { PrevPageLink } from "@Components/Atoms/PrevPageLink/PrevPageLink"
import { RegisterText } from "@Components/Atoms/RegisterText/RegisterText"
import { prevLink } from "@Enums/enums"
import { registerIndicatorProps } from "@Interfaces/molecule-interfaces"

export const RegisterIndicator = (props: registerIndicatorProps) => {
    return (
        <div className="register-text-container">
            <RegisterText text={props.text} />
            <PrevPageLink
                type="login"
                text={prevLink.SignUp}
                switchForm={props.switchForm}
                prevForm="signUp"
            />
        </div>
    )
}
