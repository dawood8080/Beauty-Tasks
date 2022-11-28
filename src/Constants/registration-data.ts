import { icons, placeHolders } from "@Constants/displayed-text"
import { mainInputProperties } from "@Interfaces/register-data-interface"

export const userInputElements: mainInputProperties[] = [
    {
        label: icons.user,
        name: "firstName",
        placeHolder: placeHolders.firstName,
        type: "text",
    },
    {
        label: icons.user,
        name: "lastName",
        placeHolder: placeHolders.lastName,
        type: "text",
    },
    {
        label: icons.email,
        name: "email",
        placeHolder: placeHolders.email,
        type: "email",
    },
    {
        label: icons.password,
        name: "password",
        placeHolder: placeHolders.password,
        type: "password",
    },
    {
        label: icons.password,
        name: "password2",
        placeHolder: placeHolders.password2,
        type: "password",
    },
]
