import { validationError } from "../Constants/enums"
import { LocalStorage } from "../Hooks/LocalStorage"

const checkRegistrationInput = <T extends HTMLInputElement>() : void => {
    const fNameHasNumbers = document.querySelector('input[name=firstName]') as T
    const lNameHasNumbers = document.querySelector('input[name=lastName]') as T
    const enteredEmail = document.querySelectorAll('input[name=email]')[0] as T
    const firstPassword = document.querySelectorAll('input[name=password]')[1] as T
    const secondPassword = document.querySelector('input[name=password2]') as T
    if(validName(fNameHasNumbers) && validName(lNameHasNumbers)
    && checkEmail(enteredEmail) && checkPasswords(firstPassword, secondPassword)){
        const tempObj = {email: enteredEmail.value, pass: firstPassword.value}
        const currLocalStorage = new LocalStorage()
        const userInfoArray = []
        userInfoArray.push(tempObj)
        currLocalStorage.set(enteredEmail.value, JSON.stringify(userInfoArray))

        switchContent('login')
    }
}

const validName = (name : HTMLInputElement) : boolean => {
    const currTextInfo = name.parentNode?.parentNode?.childNodes[1] as HTMLParagraphElement
    const hasNumber = Boolean(name.value.match(/\d/))
    if(hasNumber || !name.value){
        currTextInfo.textContent = validationError.name
        return false
    }
    else{
        currTextInfo.textContent =''
        return true
    }
}

const checkEmail = (email : HTMLInputElement) : boolean => {
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    const currTextInfo = email.parentNode?.parentNode?.childNodes[1] as HTMLParagraphElement
    const currLocalStorage = new LocalStorage()
    if(!email.value || !email.value.match(regex)){
        currTextInfo.textContent = validationError.invalidEmail
        return false
    } else {
        const used = currLocalStorage.get(email.value)
        if(used){
            currTextInfo.textContent = validationError.usedEmail
            return false
        } else {
            currTextInfo.textContent = ''
            return true
        }
    }
}

const checkPasswords = (password1 : HTMLInputElement, password2 : HTMLInputElement) : boolean => {
    const currTextInfo = password1.parentNode?.parentNode?.childNodes[1] as HTMLParagraphElement
    const errorText =[]
    if(!password1.value || password1.value !== password2.value){
        errorText.push(validationError.notMatching)
        if(password2.value.length < 8){
            errorText.push(validationError.shortPass)
        }

        if(!password2.value.match(/\d/)){
            errorText.push(validationError.noNumbers)
        }

        currTextInfo.textContent = errorText.join(', ')

        return false
    } else {
        currTextInfo.textContent = ''
        return true
    }
}

const switchContent = (nextContent : string) : void => {
    const currContentElements = document.querySelector(nextContent === 'login'? '.register-container': '.login-container') as HTMLDivElement
    const nextContentElements = document.querySelector(nextContent === 'login'? '.login-container': '.register-container') as HTMLDivElement
    currContentElements.classList.toggle('hide-container')
    nextContentElements.classList.toggle('hide-container')
}

export {
    checkEmail,
    checkPasswords,
    checkRegistrationInput,
    switchContent,
    validName,
}
