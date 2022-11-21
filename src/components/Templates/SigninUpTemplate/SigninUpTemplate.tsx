import { Background } from "../../Atoms/Background/Background"
import { Image } from "../../Atoms/Image/Image"
import { LoginContainer } from "../../Organisms/LoginContainer/LoginContainer"
import { RegisterContainer } from "../../Organisms/RegisterContainer/RegisterContainer"

export const SignInUpTemplate = () => {
    return (
        <div className="main-container">
            <div className="displayed-container">
                <Image />
                <LoginContainer />
            </div>
            <Background />
        </div>
    )
}
