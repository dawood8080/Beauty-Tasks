import { Button } from "@Components/Atoms/Button/Button"
import { Title } from "@Components/Atoms/Title/Title"
import { MainUserInputContainer } from "@Components/Molecules/MainUserInputContainer/MainUserInputContainer"
import { RegisterIndicator } from "@Components/Molecules/RegisterIndicator/RegisterIndicator"
import { formTitle,backLinkText } from "@Constants/displayed-text"
import { userInputElements } from "@Constants/login-data"
import { buttonType, formType } from "@Strings/enums"
import { useForm } from "@Hooks/useForm"
import { checkFilledInput } from "@Utilities/validate-input"

interface LoginFormProps {
    switchContent: (value: formType) => void;
}

export const LoginForm = ({ switchContent }: LoginFormProps) => {
    const { errors, handleChange, handleSubmit, values } = useForm(
        checkFilledInput,
        'loginForm',
    )

    return (
        <form autoComplete="on" className="login-container" onSubmit={handleSubmit} aria-label="form">
            <Title text={formTitle.login} />
            <div className="user-input-container">
                {userInputElements.map((input, index) => (
                        <MainUserInputContainer
                            actionFunction={handleChange}
                            error= {errors[input.name]}
                            key={`loginInput-${index}`}
                            labelName={input.iconType}
                            name={input.name}
                            placeHolder={input.placeHolder}
                            value={values[input.name]}
                            type={input.type}
                            autoComplete="on"
                        />
                    ))
                }
            </div>
            <Button text={buttonType.login} />
            <RegisterIndicator
                switchForm={switchContent}
                prevForm={formType.singUp}
                text={backLinkText.registerIndicator}
            />
        </form>
    )
}
