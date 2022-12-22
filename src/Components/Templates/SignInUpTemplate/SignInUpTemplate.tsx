import { Background } from "@Components/Atoms/Background/Background"
import { Image } from "@Components/Atoms/Image/Image"
import { LoginForm } from "@Components/Organisms/LoginForm/LoginForm"
import { RegisterForm } from "@Components/Organisms/RegisterForm/RegisterForm"
import { formType } from "@Strings/enums"
import { useState } from "react"

export const SignInUpTemplate = () => {
    const [currForm, setCurrForm] = useState<string>(formType.login)

    return (
        <div className="main-container">
            <div className="displayed-container">
                <Image />
                {currForm === "login" ? (
                    <LoginForm
                        switchContent={setCurrForm}
                    />
                ) : (
                    <RegisterForm
                        switchContent={(currForm: string) =>
                            setCurrForm(currForm)
                        }
                    />
                )}
            </div>
            <Background />
        </div>
    )
}
