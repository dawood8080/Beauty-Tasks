import { Button } from "@Components/Atoms/Button/Button"
import { Title } from "@Components/Atoms/Title/Title"
import { MainUserInputContainer } from "@Components/Molecules/MainUserInputContainer/MainUserInputContainer"
import { RegisterIndicator } from "@Components/Molecules/RegisterIndicator/RegisterIndicator"
import { formTitle } from "@Constants/displayed-text"
import { userInputElements } from "@Constants/login-data"
import { buttonType, prevLink } from "@Enums/enums"
import {
    // loginContainerProps,
    objectStringKey,
} from "@Interfaces/organisms-interfaces"
import { checkLoginInput } from "@Utilities/loginUtils"
import { useCallback, useMemo, useState } from "react"
// LoginForm instead of LoginContainer
// interface in the same place
// LoginFormProps
interface loginContainerProps {
    switchContent: (value: string) => void;
}

export const LoginContainer = ({switchContent}: loginContainerProps) => {
    const [inputData, setInputData] = useState<objectStringKey>({ // name
        email: "",
        password: "",
    })
    const [errorMessage, setErrorMessage] = useState<string>("")
    const [validUser, setValidUser] = useState<boolean>(false)
    const [messageColor, setMessageColor] = useState<string>("#FF0000")

    // To not reinicialize
    const { email, password } = useMemo<objectStringKey>(() => inputData, [inputData])

    // handleOnChange
    const changeHandler = useCallback((event: InputEvent): void => {
            const { name, value } = event.target as HTMLInputElement
            setInputData({ ...inputData, [name]: value })
        },[setInputData]
    )
    // handleSubmit
    const submitHandler = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault()
        const { message, valid } = checkLoginInput(email, password)
        setErrorMessage(message)
        if (valid) {
            setMessageColor("#00FF00") //Enum - RGB
            setValidUser(valid)
        }
    }

    return (
        <form className="login-container" onSubmit={submitHandler} autoComplete="on">
            <Title text={formTitle.login} />
            <div className="user-input-container">
                {userInputElements.map((input, index) => {
                    return (
                        <MainUserInputContainer
                            key={`input-${index}`}
                            type={input.type}
                            placeHolder={input.placeHolder}
                            name={input.name}
                            labelName={input.iconType}
                            actionFunction={changeHandler} //handleOnChange
                            value={inputData[input.name]}
                            // {...(input.name === "password" && {
                            //     error: errorMessage,
                            // })}
                            error= {input.name === "password" ? errorMessage:''}
                            {...(input.name === "password" &&
                                validUser && {
                                    messageColor,
                            })}
                        />
                    )
                })}
            </div>
            <Button text={buttonType.login} type="login" />
            <RegisterIndicator
                text="Don't have an account? " // In strings folder
                switchForm={switchContent}
            />
        </form>
    )
}
