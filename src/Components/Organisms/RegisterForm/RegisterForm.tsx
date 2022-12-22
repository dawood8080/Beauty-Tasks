import { Button } from "@Components/Atoms/Button/Button"
import { PrevPageLink } from "@Components/Atoms/PrevPageLink/PrevPageLink"
import { Title } from "@Components/Atoms/Title/Title"
import { MainUserInputContainer } from "@Components/Molecules/MainUserInputContainer/MainUserInputContainer"
import { Select } from "@Components/Atoms/Select/Select"
import { countries } from "@Constants/countries"
import { formTitle } from "@Constants/displayed-text"
import { userInputElements } from "@Constants/registration-data"
import { buttonType, formType, prevLink } from "@Strings/enums"
import { useForm } from "@Hooks/useForm"
import { checkFilledInput } from "@Utilities/validate-input"

interface RegisterFormProps {
    switchContent: (value: string) => void;
}

export const RegisterForm = (props: RegisterFormProps) => {
    const { errors, handleChange, handleSubmit, values } = useForm(
        checkFilledInput,
        'registerForm',
        props.switchContent,
    )

    return (
        <form autoComplete="off" className="register-container" onSubmit={handleSubmit} aria-label="form">
            <Title text={formTitle.signup} />
            {userInputElements.map((input, index) => {
                return (
                    <MainUserInputContainer
                        actionFunction={handleChange}
                        error={errors[input.name]}
                        key={`signUpInput-${index}`}
                        labelName={input.label}
                        name={input.name}
                        placeHolder={input.placeHolder}
                        type={input.type}
                        value={values[input.name]}
                        autoComplete="off"
                    />
                )
            })}
            <Select options={countries} />
            <Button text={buttonType.singUp} />
            <PrevPageLink
                prevForm={formType.login}
                switchForm={props.switchContent}
                text={prevLink.login}
                type="signup"
            />
        </form>
    )
}
