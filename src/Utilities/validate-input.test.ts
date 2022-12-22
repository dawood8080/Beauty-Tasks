import { validateInput, checkFilledInput } from "./validate-input"

interface defaultValuesType {
    [key: string]: string;
}

describe('validateInput', () => {
    it('checks passed input validation', () => {
        expect(validateInput('Dawo3od','firstName', 'mockPass')).toBe('Invalid Name')
        expect(validateInput('AbuS4ai','lastName', 'mockPass')).toBe('Invalid Name')
        expect(validateInput('dd2','email', 'mockPass')).toBe('Please enter an email, example: dawood@gmail.com')
        expect(validateInput('ddf','password', 'mockPass')).toBe('the length should be at least 8 characters \n It should has numbers \n It should contain at least 1 uppercase letter and a special character')
        expect(validateInput('dd2','password2', 'mockPass')).toBe('Both passwords don\'t match')
    })
})

describe('checkFilledInput', () => {
    it('checks registration user input', () => {
        const mockValues:defaultValuesType = {
            email: "",
            firstName: "",
            lastName: "",
            password: "",
            password2: "",
            loginPass: "",
            loginEmail: ""
        }

        expect(checkFilledInput(mockValues, 'registerForm')).toStrictEqual({
            errors:{
                email: "This field is required!",
                firstName: "This field is required!",
                lastName: "This field is required!",
                password: "This field is required!",
                password2: "This field is required!",
                loginPass: "This field is required!",
                loginEmail: "This field is required!"
            },
            valid: false
        })
    })

    it('checks logIn user input', () => {
        const mockValues:defaultValuesType = {
            email: "",
            firstName: "",
            lastName: "",
            password: "",
            password2: "",
            loginPass: "",
            loginEmail: ""
        }

        expect(checkFilledInput(mockValues, 'loginForm')).toStrictEqual({
            errors:{
                loginPass: "Please enter your email and password",
            },
            valid: false
        })
    })
})