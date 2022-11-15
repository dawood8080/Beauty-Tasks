import { inputLoginProperties } from '../interfaces/login-data-interface'
import { icons,placeHolders } from './enums'

export const userInputElements : inputLoginProperties[]= [
    {iconType: icons.user, name: 'email2', placeHolder: placeHolders.email, type: 'email', },
    {iconType: icons.password, name: 'password', placeHolder: placeHolders.password, type: 'password', },
]
