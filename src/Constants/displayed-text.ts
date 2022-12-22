const formTitle = {
    login: "Member Login",
    signup: "Registration",
}

const backLinkText = {
    login: "Back to Login",
    signup: "Register Here!",
    registerIndicator: "Don't have an account? "
}

const placeHolders = {
    email: "Your email",
    firstName: "Your first name",
    lastName: "Your last name",
    password: "Your password",
    password2: "Your password again",
}

const icons = {
    email: "fa-solid fa-envelope",
    password: "fa-solid fa-lock",
    user: "fa-solid fa-user",
}

const validationError = {
    emptyLogin: "Please enter your email and password",
    incorrect: "Incorrect email or password",
    invalidEmail: "Please enter an email, example: dawood@gmail.com",
    name: "Invalid Name",
    noCapitalOrSpecChar:
        "It should contain at least 1 uppercase letter and a special character",
    noNumbers: "It should has numbers",
    notMatching: "Both passwords don't match",
    shortPass: "the length should be at least 8 characters",
    usedEmail: "This Email is already used",
    welcome: "Welcome Back! :)",
}

export { backLinkText, formTitle, icons, placeHolders, validationError }
