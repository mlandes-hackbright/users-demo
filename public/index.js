const SERVER = 'http://localhost:7768';

const loginForm = document.querySelector('#login-form');
const createAccountForm = document.querySelector('#create-account-form');
const welcomeMessageElement = document.querySelector('#welcome-message');
const usernameField = document.querySelector('#username-field');
const passwordField = document.querySelector('#password-field');

function getCookieValue(key) {
    return document.cookie.split(';')
        .find(it => it.trim().startsWith(`${key}=`))
        ?.split('=')[1];
}

if (loginForm) {   
    loginForm.addEventListener('submit', async evt => {
        evt.preventDefault();
        
        const payload = {
            username: usernameField.value,
            password: passwordField.value
        };

        usernameField.value = '';
        passwordField.value = '';
        
        const response = await axios.post(`${SERVER}/api/signin`, payload);
        if (response.status === 200) {
            window.location = '/profile.html';
        }
    });
}
 
if (createAccountForm) {
    createAccountForm.addEventListener('submit', async evt => {
        evt.preventDefault();
        
        const payload = {
            username: usernameField.value,
            password: passwordField.value
        };

        usernameField.value = '';
        passwordField.value = '';
        
        const response = await axios.post(`${SERVER}/api/users`, payload);
        if (response.status === 200) {
            window.location = '/';
        }
    });
}

if (welcomeMessageElement) {
    const userId = getCookieValue('userid');
    if (userId) {
        axios.get(`${SERVER}/api/users/${userId}`).then(response => {
            if (response.status === 200) {
                const { username } = response.data;
                welcomeMessageElement.innerText = `Welcome: ${username}!`;
            }
        });
    } else {
        window.location = '/';
    }
}
