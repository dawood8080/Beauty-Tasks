const checkRegistrationInput = () => {
    const fNameHasNumbers = document.querySelector('input[name=firstName]');
    const lNameHasNumbers = document.querySelector('input[name=lastName]');
    const enteredEmail = document.querySelectorAll('input[name=email]')[1];
    const firstPassword = document.querySelectorAll('input[name=password]')[1];
    const secondPassword = document.querySelector('input[name=password2]');
    if(validName(fNameHasNumbers) & validName(lNameHasNumbers)
      & checkEmail(enteredEmail) & checkPasswords(firstPassword, secondPassword)){
        const tempObj = {email: enteredEmail.value, pass: firstPassword.value};
        if(!localStorage.getItem('users')){
            const arrayOfUsers = [];
            arrayOfUsers.push(tempObj);
            localStorage.setItem('users', JSON.stringify(arrayOfUsers));
        } else {
            const usersInfo = JSON.parse(localStorage.getItem('users'));
            usersInfo.push(tempObj);
            localStorage.setItem('users', JSON.stringify(usersInfo))
        }
        switchContent('login');
    }
}

const validName = name => {
    const currTextInfo = name.parentNode;
    const hasNumber = Boolean(name.value.match(/\d/));
    if(hasNumber || !name.value){
        currTextInfo.classList.remove('invalid');
        currTextInfo.classList.add('invalid');
        return false;
    }
    else{
        currTextInfo.classList.remove('invalid');
        return true;
    }
}

const checkEmail = email => {
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const currTextInfo = email.parentNode;
    if(!email.value || !email.value.match(regex)){
        currTextInfo.classList.remove('invalid-email');
        currTextInfo.classList.add('invalid-email');
        return false;
    } else {
        const emails = JSON.parse(localStorage.getItem('users')) ?? [{}];
        let used = false;
        emails.forEach((user) => {
            if(user.email === email.value){
                used = true;
                return false;
            }
        });
        if(used){
            currTextInfo.classList.remove('already-used');
            currTextInfo.classList.add('already-used');
            return false;
        } else {
            currTextInfo.classList.remove('already-used');
            currTextInfo.classList.remove('invalid-email');
            return true;
        }
    }
}

const checkPasswords = (password1, password2) => {
    const currTextInfo = password2.parentNode;
    if(!password1.value || password1.value !== password2.value){
        currTextInfo.classList.remove('not-matching');
        currTextInfo.classList.add('not-matching');
        return false;
    } else {
        currTextInfo.classList.remove('not-matching');
        return true;
    }
}

const switchContent = nextContent => {
    const currContentElements = document.querySelector(nextContent === 'login'? '.register-container': '.login-container');
    const nextContentElements = document.querySelector(nextContent === 'login'? '.login-container': '.register-container');
    currContentElements.classList.toggle('hide-container');
    nextContentElements.classList.toggle('hide-container');
    console.log('hi');
}

export {
    checkPasswords,
    checkEmail,
    validName,
    checkRegistrationInput,
    switchContent,
}