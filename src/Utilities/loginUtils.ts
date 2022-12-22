import { validationError } from "@Constants/displayed-text"
import { LocalStorage } from "@Utilities/LocalStorage"

interface checkLogInType {
    message: string;
    valid: boolean;
}

export const checkLoginInput = (
    userEmail: string,
    pass: string
): checkLogInType => {
    let message = ""
    let valid = false

    if (!userEmail || !pass) {
        message = validationError.emptyLogin
    } else {
        const localStorage = new LocalStorage()
        const userInfo:{e: string, pass: string}= JSON.parse(localStorage.get(userEmail)?? "{}")

        if (userInfo.e === userEmail && userInfo.pass === pass) {
            message = validationError.welcome
            valid = true
        } else {
            message = validationError.incorrect
        }
    }
    return { message, valid }
}
