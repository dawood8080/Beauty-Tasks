import { Background } from "@Components/Atoms/Background/Background"
import { Image } from "@Components/Atoms/Image/Image"
import { LoginContainer } from "@Components/Organisms/LoginContainer/LoginContainer"
import { RegisterContainer } from "@Components/Organisms/RegisterContainer/RegisterContainer"
import { useState } from "react"

export const SignInUpTemplate = () => {
    //Use enum for login and signUp
    const [currForm, setCurrForm] = useState("login")

    return (
        <div className="main-container">
            <div className="displayed-container">
                <Image />
                {currForm === "login" ? (
                    <LoginContainer
                        switchContent={(currForm) => setCurrForm(currForm)} // No need to send a var for the function
                    />
                ) : (
                    <RegisterContainer
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
