import { TextField } from "./TextField"
import { cleanup, render, screen } from '@testing-library/react'
import { vi } from "vitest";


describe('<TextField />', () => {
    afterEach(() => {
        cleanup();
    })

    const mockActionOnChange = vi.fn()

    it('renders component properly', () => {
        render(<TextField
            type='text'
            placeHolder='name'
            name='mockName'
            value='inputValue'
            actionFunction={mockActionOnChange}
            autoComplete='no'
        />)

        const selectWrapper = screen.getByDisplayValue('inputValue')

        expect(selectWrapper).toBeInTheDocument();
    })

    it('should have the correct class name', () => {
        render(<TextField
            type='text'
            placeHolder='name'
            name='mockName'
            value='inputValue'
            actionFunction={mockActionOnChange}
            autoComplete='no'
        />)

        const selectWrapper = screen.getByDisplayValue('inputValue')

        expect(selectWrapper).toHaveClass('text-field')
    })

    it('should fires when change the input content', () => {
        render(<TextField
            type='text'
            placeHolder='name'
            name='mockName'
            value='inputValue'
            actionFunction={mockActionOnChange}
            autoComplete='no'
        />)

        // fireEvent.change(screen.getByDisplayValue('inputValue'), { target: {value: '333'}})
        // screen.debug()
        // expect((screen.getByDisplayValue('inputValue') as HTMLInputElement).value).toBe('99')
    })
})
