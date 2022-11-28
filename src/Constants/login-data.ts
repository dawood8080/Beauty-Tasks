import { icons, placeHolders } from "@Constants/displayed-text"
import { inputLoginProperties } from "@Interfaces/login-data-interface"

export const userInputElements: inputLoginProperties[] = [
    {
        iconType: icons.user,
        name: "email",
        placeHolder: placeHolders.email,
        type: "email",
    },
    {
        iconType: icons.password,
        name: "password",
        placeHolder: placeHolders.password,
        type: "password",
    },
]
