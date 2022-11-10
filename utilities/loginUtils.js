export const checkLoginInput = () => {
    const currEmail = document.querySelector('input[name=email]');
    const currPass = document.querySelector('input[name=password]');
    const currTextInfo = currPass.parentNode;

    const users = JSON.parse(localStorage.getItem('users')) ?? JSON.stringify({});
    for(let user of users){
        if(user.email === currEmail.value && user.pass === currPass.value){
            currTextInfo.classList.remove('incorrect');
            currTextInfo.classList.add('welcome');
            break;
        } else {
            currTextInfo.classList.remove('incorrect');
            currTextInfo.classList.add('incorrect');
        }
    }
}
