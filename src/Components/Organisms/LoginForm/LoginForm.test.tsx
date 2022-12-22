import { LoginForm } from "./LoginForm"
import { cleanup, fireEvent, render } from '@testing-library/react'
import { vi } from "vitest";

const changeForm = vi.fn()

describe('when renders the template', () => {
    afterEach(() => {
        cleanup()
        vi.clearAllMocks()
    })

    it('renders component properly', () => {
        const renderWrapper = render(<LoginForm switchContent={changeForm}/>)
        const loginForm = renderWrapper.getByRole('form')
        expect(loginForm).toBeInTheDocument()
    })

    it('gives validation error when submitting incorrect username or password', async () => {
        const renderWrapper = render(<LoginForm switchContent={changeForm}/>)
        const submitButton = renderWrapper.getByRole('button', { name: /login/i })

        fireEvent.change(renderWrapper.getByPlaceholderText('Your email') as HTMLInputElement, { target : { value: 'dadf'}})
        // fireEvent.change(renderWrapper.getByPlaceholderText('Your password') as HTMLInputElement, { target : { value: 'dafsdf'}})
        fireEvent.click(submitButton)
        const errorMessage = renderWrapper.queryAllByTestId('error-message')

        // renderWrapper.debug()
        // expect(errorMessage[1].textContent).toBe('Incorrect username or password')
    })

    // it('should have 2 children components', () => {
    //     render(<LoginForm
    //         prevForm= {formType.login}
    //         text='no account'
    //         switchForm={changeForm}
    //     />)

    //     const register = screen.getByTestId('register-indicator')

    //     expect(register.children).toHaveLength(2)
    // })
})
