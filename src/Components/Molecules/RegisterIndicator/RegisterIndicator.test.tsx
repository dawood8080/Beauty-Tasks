import { RegisterIndicator } from "./RegisterIndicator"
import { cleanup, render, screen } from '@testing-library/react'
import { formType } from "@Strings/enums"
import { vi } from "vitest";


describe('<RegisterIndicator />', () => {
    afterEach(() => {
        cleanup();
    })

    const changeForm = vi.fn()

    it('renders component properly', () => {
        render(<RegisterIndicator
            prevForm= {formType.login}
            text='no account'
            switchForm={changeForm}
        />)

        const register = screen.getByTestId('register-indicator')

        expect(register).toBeInTheDocument();
    })

    it('should have the correct class name', () => {
        render(<RegisterIndicator
            prevForm= {formType.login}
            text='no account'
            switchForm={changeForm}
        />)

        const register = screen.getByTestId('register-indicator')

        expect(register).toHaveClass('register-text-container')
    })

    it('should have 2 children components', () => {
        render(<RegisterIndicator
            prevForm= {formType.login}
            text='no account'
            switchForm={changeForm}
        />)

        const register = screen.getByTestId('register-indicator')

        expect(register.children).toHaveLength(2)
    })
})
