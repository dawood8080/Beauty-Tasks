import { vi } from "vitest";
import { LocalStorage } from "./LocalStorage";

describe("LocalStorage", () => {
    const localStorage = new LocalStorage();
    const getSpy = vi.spyOn(localStorage, "get")
    const setSpy = vi.spyOn(localStorage, "set")
    const removeItemSpy = vi.spyOn(localStorage, "removeItem")
    const removeItemsSpy = vi.spyOn(localStorage, "removeItems")
    const addUserSpy = vi.spyOn(localStorage, "addUser")

    beforeEach(() => {
        vi.clearAllMocks()
    })

    it('.get', () => {
        expect(localStorage.get('dawood@gmail.com')).toBeNull()
        expect(getSpy).toBeCalledWith('dawood@gmail.com')
    })
    it('.set', () => {
        expect(localStorage.set('dawood@gmail.com', 'mockName')).toBeUndefined()
        expect(setSpy).toBeCalledWith('dawood@gmail.com', 'mockName')
        expect(localStorage.get('dawood@gmail.com')).toBe('mockName')
    })
    it('.removeItem', () => {
        expect(localStorage.removeItem('dawood@gmail.com')).toBeUndefined()
        expect(removeItemSpy).toBeCalledWith('dawood@gmail.com')
        expect(localStorage.get('dawood@gmail.com')).toBeNull()
    })
    it('.removeItems', () => {
        expect(localStorage.removeItems()).toBeUndefined()
        expect(removeItemsSpy).toBeCalled()
    })
    it('.addUser', () => {
        expect(localStorage.addUser('dawood@gmail.com', { e: 'dawood@gmail.com', pass: 'dawood123' }))
        expect(localStorage.get('dawood@gmail.com')).toStrictEqual(JSON.stringify({ e: 'dawood@gmail.com', pass: 'dawood123' }))
    })
})