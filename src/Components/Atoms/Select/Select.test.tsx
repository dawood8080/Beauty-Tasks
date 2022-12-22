import { Select } from "./Select"
import { cleanup, render, screen, fireEvent } from '@testing-library/react'
import userEvent from "@testing-library/user-event"


describe('when RegisterForm renders', () => {
    afterEach(() => {
        cleanup();
    })

    it('renders component properly with first element selected by default', () => {
        render(<Select options={['country1','country2','country3']} />)

        const selectWrapper = screen.getByTestId('select-wrapper')

        expect(selectWrapper).toBeInTheDocument();
        expect((screen.getByRole('option', { name: 'country1' }) as HTMLOptionElement).selected).toBe(true)
    })

    it('should have the correct class name', () => {
        render(<Select options={['country1', 'country2']} />)

        const selectOptions = screen.getAllByRole('option')

        expect(selectOptions.length).toBe(2)
    })

    it('should allow user to change country', () => {
        render(<Select options={['country1', 'country2', 'country3']} />)

        const selectWrapper = screen.getByRole('combobox')
        const options = screen.getAllByRole('option') as HTMLOptionElement[]
        fireEvent.click(screen.getByRole('option', { name: /country2/i}), { target: { value: 2}})

        expect(selectWrapper.firstChild!.nextSibling!.textContent).toBe('country2')
    })
})
