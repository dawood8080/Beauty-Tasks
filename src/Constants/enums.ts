enum formTitle {
    login = 'Member Login',
    signup = 'Registration'
}

enum backLinkText {
    login = 'Back to Login',
    signup = 'Register Here!'
}

enum placeHolders {
    email = 'Your email',
    password = 'Your password',
    firstName = 'Your first name',
    lastName = 'Your last name',
    password2 = 'Your password again'
}

enum icons {
    user = 'fa-solid fa-user',
    email = 'fa-solid fa-envelope',
    password = 'fa-solid fa-lock'
}

enum validationError {
    name = 'Invalid Name',
    invalidEmail = 'Please enter an email, example: dawood@gmail.com',
    usedEmail = 'This Email is already used',
    notMatching = 'Both passwords don\'t match',
    shortPass = 'the length should be at least 8 characters',
    noNumbers = 'It should has numbers'
}

export {
    backLinkText,
    formTitle,
    icons,
    placeHolders,
    validationError
}
