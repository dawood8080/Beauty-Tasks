import { Button } from "../../Atoms/Button/Button"
import { PrevPageLink } from "../../Atoms/PrevPageLink/PrevPageLink"
import { Title } from "../../Atoms/Title/Title"

import { MainUserInputContainer } from '../../Molecules/MainUserInputContainer/MainUserInputContainer'
import { Select } from "../../Molecules/Select/Select"

import { countries } from "../../../Constants/countries"
import { backLinkText, formTitle } from "../../../Constants/enums"
import { userInputElements } from "../../../Constants/registration-data"

import { checkRegistrationInput } from '../../../Utilities/signupUtils'

export const RegisterContainer = () => {
    return (
        <div className="register-container hide-container">
            <Title text={formTitle.signup} />
            {
                userInputElements.map((input, index) => {
                    return(<MainUserInputContainer
                            key={index}
                            type={input.type}
                            placeHolder={input.placeHolder}
                            name={input.name}
                            labelName={input.label}
                            actionFunction={input.validation}/>)
                })
            }
            <Select options={countries} />
            <Button text='signUp' actionName={checkRegistrationInput}/>
            <PrevPageLink type='signup' text={backLinkText.login}/>
        </div>
    )
}
