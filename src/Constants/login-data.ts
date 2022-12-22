import { icons, placeHolders } from "@Constants/displayed-text"

export interface inputLoginProperties {
    iconType: string;
    name: string;
    placeHolder: string;
    type: string;
}

export const userInputElements: inputLoginProperties[] = [
    {
        iconType: icons.user,
        name: "loginEmail",
        placeHolder: placeHolders.email,
        type: "email",
    },
    {
        iconType: icons.password,
        name: "loginPass",
        placeHolder: placeHolders.password,
        type: "password",
    },
]
