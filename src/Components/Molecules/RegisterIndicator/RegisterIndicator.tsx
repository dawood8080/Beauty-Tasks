import { PrevPageLink } from "@Components/Atoms/PrevPageLink/PrevPageLink"
import { RegisterText } from "@Components/Atoms/RegisterText/RegisterText"
import { formType, prevLink } from "@Strings/enums"

interface registerIndicatorProps {
    text: string;
    prevForm: formType;
    switchForm: (value: formType) => void;
}

export const RegisterIndicator = (props: registerIndicatorProps) => {
    return (
        <div className="register-text-container" data-testid='register-indicator'>
            <RegisterText text={props.text} />
            <PrevPageLink
                prevForm={props.prevForm}
                switchForm={props.switchForm}
                text={prevLink.SignUp}
                type="login"
            />
        </div>
    )
}
