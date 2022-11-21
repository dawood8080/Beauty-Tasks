import { PrevPageLink } from '../../Atoms/PrevPageLink/PrevPageLink'
import { RegisterText } from '../../Atoms/RegisterText/RegisterText'

import { backLinkText } from '../../../Constants/enums'

type registerIndicatorProps = {
    text: string
}

export const RegisterIndicator = (props: registerIndicatorProps) => {
    return (
        <div className="register-text-container">
            <RegisterText text={props.text}/>
            <PrevPageLink type='login' text={backLinkText.signup}/>
        </div>
    )
}
