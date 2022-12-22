import { checkLoginInput } from "./loginUtils";
import { LocalStorage } from "./LocalStorage";

describe("checkLoginInput", () => {
    const localStorage = new LocalStorage();
    localStorage.addUser("userEmail",{e: "userEmail",pass:"userPassword"});
    it("returns error message when the email and password are empty", () => {
        expect(checkLoginInput("","")).toStrictEqual({message: 'Please enter your email and password', valid:false})
    })

    it("returns error message when the email or password is not valid", () => {
        expect(checkLoginInput("userEmail2", "123")).toStrictEqual({message: 'Incorrect email or password', valid:false})
    })

    it("returns welcome message when the email and password are correct", () => {
        expect(checkLoginInput("userEmail", "userPassword")).toStrictEqual({message: 'Welcome Back! :)', valid: true})
    })
})