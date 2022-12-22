import {
    renderHook,
    fireEvent,
    render,
    cleanup,
} from "@testing-library/react";
import { checkFilledInput } from "@Utilities/validate-input";
import { vi } from "vitest";
import { useForm } from "./useForm";
import { RegisterForm } from "@Components/Organisms/RegisterForm/RegisterForm"
import { LocalStorage } from "@Utilities/LocalStorage";

const mockSwitchContent = vi.fn();

describe("useForm", () => {
    afterEach(() => {
        cleanup()
        vi.clearAllMocks()
    })
    it("returns the default values for errors and values", () => {
        const { result } = renderHook(() =>
            useForm(checkFilledInput, "loginForm", mockSwitchContent)
        );

        expect(result.current.errors).toStrictEqual({});
        expect(result.current.values).toStrictEqual({
            email: "",
            firstName: "",
            lastName: "",
            password: "",
            password2: "",
            loginPass: "",
            loginEmail: "",
        });
    });

    it("returns handleChange function that will change the values and errors", async () => {
        const renderedWrapper = render(<RegisterForm switchContent={mockSwitchContent}/>);
        const inputElem = renderedWrapper.getByPlaceholderText('Your first name')
        fireEvent.change(inputElem, { target: { value: "77" } });
        expect(renderedWrapper.getAllByTestId('error-message')[0].textContent).toBe('Invalid Name')
    });

    it('does not add the user for invalid input', () => {
        const renderedWrapper = render(<RegisterForm switchContent={mockSwitchContent}/>);
        const submitButton = renderedWrapper.getByRole('button',  {
            name: /signup/i
        })
        fireEvent.click(submitButton)
        expect(mockSwitchContent).not.toBeCalled()
    })

    it("should store new registered user in the local storage", () => {
        const testLocalStorage = new LocalStorage
        const renderedWrapper = render(<RegisterForm switchContent={mockSwitchContent}/>);
        fireEvent.change(renderedWrapper.getByPlaceholderText('Your first name'), { target: { value: "Dawood" } });
        fireEvent.change(renderedWrapper.getByPlaceholderText('Your last name'), { target: { value: "AbuSwai" } });
        fireEvent.change(renderedWrapper.getByPlaceholderText('Your email'), { target: { value: "dawood@gmail.com" } });
        fireEvent.change(renderedWrapper.getByPlaceholderText('Your password'), { target: { value: "Dawood@123" } });
        fireEvent.change(renderedWrapper.getByPlaceholderText('Your password again'), { target: { value: "Dawood@123" } });

        const submitButton = renderedWrapper.getByRole('button',  {
            name: /signup/i
        })
        fireEvent.click(submitButton)
        expect(testLocalStorage.get('dawood@gmail.com')).toBeTruthy()
        expect(mockSwitchContent).toBeCalled()
    })
});
