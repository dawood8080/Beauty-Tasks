import { validationError } from "@Constants/displayed-text"
import * as regex from "@Utilities/Regex"

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

    if (name === "firstName" && singleInput.match(regex.hasNumbers)) {
        return validationError.name
    }
    // merge them
    if (name === "lastName" && singleInput.match(regex.hasNumbers)) {
        return validationError.name
    }

    if (name === "email" && !singleInput.match(regex.validEmail)) {
        return validationError.invalidEmail
    }

    let passwordError = ""
    if (name === "password") {
        if (singleInput.length < 8) {
            passwordError += validationError.shortPass + " \r"
        }
        if (!singleInput.match(regex.hasNumbers)) {
            passwordError += validationError.noNumbers + " \r"
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

const checkFilledInput = (values: defaultValuesType): returnedValue => {
    const errors = {} as defaultValuesType
    let valid = true;
    (Object.keys(values) as (keyof defaultValuesType)[]).forEach((key) => {
        const inputElem = values[key]
        const message = validateInput(inputElem, key, values.password2)
        errors[key] = message || ""
        valid = !message
    })
    return { errors, valid }
}

export { checkFilledInput, validateInput }
