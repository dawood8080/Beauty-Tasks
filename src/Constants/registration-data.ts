import { icons, placeHolders } from "@Constants/displayed-text"

export interface mainInputProperties {
    label: string;
    name: string;
    placeHolder: string;
    type?: string;
}

export const userInputElements: mainInputProperties[] = [
    {
        label: icons.user,
        name: "firstName",
        placeHolder: placeHolders.firstName,
    },
    {
        label: icons.user,
        name: "lastName",
        placeHolder: placeHolders.lastName,
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
