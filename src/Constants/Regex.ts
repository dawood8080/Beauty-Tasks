const hasNumbers = /\d/
const validEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
const hasCapitalLetter = /^[A-Z]*$/
const hasSpecialChar = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/

export { hasCapitalLetter, hasNumbers, hasSpecialChar, validEmail }
