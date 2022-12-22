import { RegisterForm } from "./RegisterForm"
import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import { vi } from "vitest";

const changeForm = vi.fn()

describe('when render the template', () => {
    //beforeEach render the form
    afterEach(() => {
        cleanup();
        vi.clearAllMocks()
    })

    it('renders component properly', () => {
        const renderWrapper = render(<RegisterForm switchContent={changeForm}/>)
        const registerForm = renderWrapper.getByRole('form')
        screen.debug()
        expect(registerForm).toBeInTheDocument()
    })

    it('gives validation error for every empty input after submitting', () => {
        const renderedWrapper = render(<RegisterForm switchContent={changeForm}/>)
        const submitButton = renderedWrapper.getByRole('button',  {
            name: /signup/i
        })
        const errors = renderedWrapper.getAllByTestId('error-message')
        fireEvent.click(submitButton)

        for( let i = 0 ; i < 5 ; i++){
            expect(errors[1].textContent).toBe('This field is required!')
        }
    })

    it('gives validation error for every incorrect input', () => {
        const renderedWrapper = render(<RegisterForm switchContent={changeForm}/>)
        fireEvent.change(renderedWrapper.getByPlaceholderText('Your first name'), { target: { value: "Dawo3od" } });
        fireEvent.change(renderedWrapper.getByPlaceholderText('Your last name'), { target: { value: "AbuS4wai" } });
        fireEvent.change(renderedWrapper.getByPlaceholderText('Your email'), { target: { value: "daw!22.com" } });
        fireEvent.change(renderedWrapper.getByPlaceholderText('Your password'), { target: { value: "Daw" } });
        fireEvent.change(renderedWrapper.getByPlaceholderText('Your password again'), { target: { value: "Dawoo" } });

        const errors = renderedWrapper.getAllByTestId('error-message')

        fireEvent.click(renderedWrapper.getByRole('button',  {
            name: /signup/i
        }))

        expect(errors[0].textContent).toBe('Invalid Name')
        expect(errors[1].textContent).toBe('Invalid Name')
        expect(errors[2].textContent).toBe('Please enter an email, example: dawood@gmail.com')
        expect(errors[3].textContent).toBe('the length should be at least 8 characters \n It should has numbers \n It should contain at least 1 uppercase letter and a special character')
        expect(errors[4].textContent).toBe('Both passwords don\'t match')
    })

    it('gives validation error for password if it doesn\'t have numbers', () => {
        const renderedWrapper = render(<RegisterForm switchContent={changeForm}/>)
        fireEvent.change(renderedWrapper.getByPlaceholderText('Your password'), { target: { value: "Daw@oodo" } });
        const passError = renderedWrapper.getAllByTestId('error-message')[3]
        expect(passError.textContent).toBe('It should has numbers \n ')
    })

    it('gives validation error for password if it doesn\'t have at least 1 uppercase letter and a special character', () => {
        const renderedWrapper = render(<RegisterForm switchContent={changeForm}/>)
        fireEvent.change(renderedWrapper.getByPlaceholderText('Your password'), { target: { value: "dawoodo55" } });
        const passError = renderedWrapper.getAllByTestId('error-message')[3]
        expect(passError.textContent).toBe('It should contain at least 1 uppercase letter and a special character')
    })

    it('gives validation error for password if it\'s length is less than 8 characters', () => {
        const renderedWrapper = render(<RegisterForm switchContent={changeForm}/>)
        fireEvent.change(renderedWrapper.getByPlaceholderText('Your password'), { target: { value: "Da3@" } });
        const passError = renderedWrapper.getAllByTestId('error-message')[3]
        expect(passError.textContent).toBe('the length should be at least 8 characters \n ')
    })
})
