import { formTitle } from '../../../Constants/enums'
import { userInputElements } from '../../../Constants/login-data'
import { Button } from '../../Atoms/Button/Button'
import { Title } from '../../Atoms/Title/Title'
import { MainUserInputContainer } from '../../Molecules/MainUserInputContainer/MainUserInputContainer'
import { RegisterIndicator } from '../../Molecules/RegisterIndicator/RegisterIndicator'
import { checkLoginInput } from '../../../Utilities/loginUtils'

export const LoginContainer = () => {
    return (
        <div className="login-container">
            <Title text={formTitle.login} />
            <div className="user-input-container">
                {
                    userInputElements.map((input, index) => {
                        return (<MainUserInputContainer
                            key={index}
                            type={input.type}
                            placeHolder={input.placeHolder}
                            name={input.name}
                            labelName={input.iconType}
                        />
                    )})
                }
            </div>
            <Button text='login' actionName={checkLoginInput} />
            <RegisterIndicator text={'Don\'t have account? '} />
        </div>
    )
}
