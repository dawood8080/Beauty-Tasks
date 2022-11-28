import { Button } from "@Components/Atoms/Button/Button"
import { PrevPageLink } from "@Components/Atoms/PrevPageLink/PrevPageLink"
import { Title } from "@Components/Atoms/Title/Title"
import { MainUserInputContainer } from "@Components/Molecules/MainUserInputContainer/MainUserInputContainer"
import { Select } from "@Components/Molecules/Select/Select"
import { countries } from "@Constants/countries"
import { formTitle } from "@Constants/displayed-text"
import { userInputElements } from "@Constants/registration-data"
import { buttonType, prevLink } from "@Enums/enums"
import { useForm } from "@Hooks/useForm"
import { registerContainerProps } from "@Interfaces/organisms-interfaces"
import { checkFilledInput } from "@Utilities/validate-input"

export const RegisterContainer = (props: registerContainerProps) => {
    const { errors, handleChange, handleSubmit, values } = useForm(
        checkFilledInput,
        props.switchContent
    )

    return (
        <form className="register-container" onSubmit={handleSubmit} autoComplete="off">
            <Title text={formTitle.signup} />
            {userInputElements.map((input, index) => {
                return (
                    <MainUserInputContainer
                        key={index}
                        type={input.type}
                        placeHolder={input.placeHolder}
                        name={input.name}
                        labelName={input.label}
                        actionFunction={handleChange}
                        value={values[input.name]}
                        error={errors[input.name]}
                    />
                )
            })}
            <Select options={countries} />
            <Button text={buttonType.singUp} type="signUp" />
            <PrevPageLink
                type="signup"
                text={prevLink.login}
                prevForm="login"
                switchForm={props.switchContent}
            />
        </form>
    )
}
