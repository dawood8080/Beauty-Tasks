import { mainInputProperties } from '../Interfaces/register-data-interface'
import {
    checkEmail,
    checkPasswords,
    validName,
} from '../Utilities/signupUtils'
import { icons,placeHolders } from './enums'

export const userInputElements : mainInputProperties[] = [
    {label: icons.user, name: 'firstName', placeHolder: placeHolders.firstName, type: 'text', validation: validName},
    {label: icons.user, name: 'lastName', placeHolder: placeHolders.lastName, type: 'text', validation: validName},
    {label: icons.email, name: 'email', placeHolder: placeHolders.email, type: 'email', validation: checkEmail},
    {label: icons.password, name: 'password', placeHolder: placeHolders.password,type: 'password'},
    {label: icons.password, name: 'password2', placeHolder: placeHolders.password2, type: 'password', validation: checkPasswords},
]
