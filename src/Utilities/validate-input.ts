import { validationError } from "@Constants/displayed-text"
import * as regex from "@Constants/Regex"
import { checkLoginInput } from "./loginUtils";

interface defaultValuesType {
    [key: string]: string;
}

interface returnedValue {
    errors: defaultValuesType;
    valid: boolean;
}

const validateInput = (
    singleInput: string,
    name: string | number,
    confirmPass: string
): string => {
    if (!singleInput) {
        return "This field is required!"
    }

    if ((name === "firstName" || name === "lastName") && singleInput.match(regex.hasNumbers)) {
        return validationError.name
    }

    if (name === "email" && !singleInput.match(regex.validEmail)) {
        return validationError.invalidEmail
    }

    let passwordError = ""

    if (name === "password") {
        if (singleInput.length < 8) {
            passwordError += validationError.shortPass + " \n "
        }

        if (!singleInput.match(regex.hasNumbers)) {
            passwordError += validationError.noNumbers + " \n "
        }

        if (
            !singleInput.match(regex.hasSpecialChar) &&
            !singleInput.match(regex.hasCapitalLetter)
        ) {
            passwordError += validationError.noCapitalOrSpecChar
        }

        return passwordError
    }

    if (name === "password2" && singleInput !== confirmPass) {
        return validationError.notMatching
    }

    return ""
}

const checkFilledInput = (values: defaultValuesType, formType: string): returnedValue => {
    const errors = {} as defaultValuesType
    if(formType === 'loginForm'){
        let { message, valid } = checkLoginInput(values.loginEmail, values.loginPass)
        errors.loginPass = message
        return { errors, valid }
    } else {
        let valid = true;
        (Object.keys(values) as (keyof defaultValuesType)[]).forEach((key) => {
            const inputElem = values[key]
            const message = validateInput(inputElem, key, values.password2)
            errors[key] = message || ""
            if(key === 'loginEmail' || key === 'loginPass'){
                return
            } else {
                valid = !message
            }
        })
        return { errors, valid }
    }
}

export { checkFilledInput, validateInput }
