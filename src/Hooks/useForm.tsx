import { useState } from "react"
import { LocalStorage } from "@Utilities/LocalStorage"
import { validateInput } from "@Utilities/validate-input"

interface objectStringKey {
    [key: string]: string;
}
interface returnedValue {
    errors: { [key: string]: string };
    valid: boolean;
}

export const useForm = (
    validate: (passedValues: objectStringKey) => returnedValue,
    switchContent: (value: string) => void
) => {
    const [values, setValues] = useState<objectStringKey>({
        email: "",
        firstName: "",
        lastName: "",
        password: "",
        password2: "",
    })
    const [errors, setErrors] = useState<objectStringKey>({})

    const localStorage = new LocalStorage()

    const handleChange = (event: InputEvent) => {
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
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        const { errors, valid } = validate(values)
        setErrors(errors)
        if (valid) {
            const userInfo = { e: values.email, pass: values.password }
            localStorage.addUser(values.email, userInfo)
            switchContent("login")
        }
    }

    return {
        errors,
        handleChange,
        handleSubmit,
        values,
    }
}
