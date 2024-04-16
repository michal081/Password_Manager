function generatePassword(){
    const PasswordLength = 8;
    const characterSet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRTSUVWXYZ0123456789';
    let password ='';

    for (let i =0; i < PasswordLength; i ++) {
        const randomIndex = Math.floor(Math.random() * characterSet.length);
        password += characterSet.charAt(randomIndex);
    };

    document.getElementById('password').value = password;
}

function Reset() {
    document.getElementById('password').value = null;   
}

function generateSpecialCharacter() {
    const PasswordLength = 8;
    const characterSet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRTSUVWXYZ0123456789*_+@#$%^&*!()|?><:;~``';
    let password ='';

    for (let i =0; i < PasswordLength; i ++) {
        const randomIndex = Math.floor(Math.random() * characterSet.length);
        password += characterSet.charAt(randomIndex);
    };

    document.getElementById('password').value = password;
}

function uppercase(){
    const PasswordLength = 8;
    const characterSet = 'ABCDEFGHIJKLMNOPQRTSUVWXYZ';
    let password ='';

    for (let i =0; i < PasswordLength; i ++) {
        const randomIndex = Math.floor(Math.random() * characterSet.length);
        password += characterSet.charAt(randomIndex);
    };

    document.getElementById('password').value = password;
}

function numbers(){
    const PasswordLength = 8;
    const characterSet = '0123456789';
    let password ='';

    for (let i =0; i < PasswordLength; i ++) {
        const randomIndex = Math.floor(Math.random() * characterSet.length);
        password += characterSet.charAt(randomIndex);
    };

    document.getElementById('password').value = password;
}

function lowcase(){
    const PasswordLength = 8;
    const characterSet = 'abcdefghijklmnopqrstuvwxyz';
    let password ='';

    for (let i =0; i < PasswordLength; i ++) {
        const randomIndex = Math.floor(Math.random() * characterSet.length);
        password += characterSet.charAt(randomIndex);
    };

    document.getElementById('password').value = password;
}