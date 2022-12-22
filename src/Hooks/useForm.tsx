import { useState, useCallback } from "react"
import { LocalStorage } from "@Utilities/LocalStorage"
import { validateInput } from "@Utilities/validate-input"
import { formType } from "@Strings/enums";

// CSS Modules
interface InputDataInt {
    [key: string]: string;
}

interface returnedValue {
    errors: { [key: string]: string };
    valid: boolean;
}

export const useForm = (
    validate: (passedValues: InputDataInt, formType: string) => returnedValue,
    form: string,
    switchContent?: (value: formType) => void
) => {
    const [values, setValues] = useState<InputDataInt>({
        email: "",
        firstName: "",
        lastName: "",
        password: "",
        password2: "",
        loginPass: "",
        loginEmail: ""
    })
    const [errors, setErrors] = useState<InputDataInt>({})

    const localStorage = new LocalStorage()

    const handleChange = useCallback((event: InputEvent) => {
        event.preventDefault()
        const { name, value } = event.target as HTMLInputElement

        setValues({
            ...values,
            [name]: value,
        })
        setErrors({
            ...errors,
            [name]: validateInput(value, name, values.password),
        })
    }, [values, errors])
    const handleSubmit = useCallback((event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        let { errors, valid } = validate(values, form)
        setErrors(errors)
        if(values.firstName && valid){
            const userInfo = { e: values.email, pass: values.password }
            localStorage.addUser(values.email, userInfo)
            switchContent!(formType.login)
        }
    }, [errors])
    return {
        errors,
        handleChange,
        handleSubmit,
        values,
    }
}
