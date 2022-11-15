import { LocalStorage } from "../hooks/LocalStorage"

export const checkLoginInput = () => {
    const currEmail = document.querySelector('input[name=email2]') as HTMLInputElement
    const currPass = document.querySelector('input[name=password]') as HTMLInputElement
    const currTextInfo = currPass?.parentNode as HTMLDivElement

    const currLocalStorage = new LocalStorage()
    const userEmail = currLocalStorage.get(currEmail.value)
    const userInfo = JSON.parse(userEmail??'[]')
    if(userEmail && userInfo[0].pass === currPass.value){
        currTextInfo?.classList.remove('incorrect')
        currTextInfo?.classList.add('welcome')
    } else {
        currTextInfo?.classList.remove('incorrect')
        currTextInfo?.classList.remove('welcome')
        currTextInfo?.classList.add('incorrect')
    }
}
