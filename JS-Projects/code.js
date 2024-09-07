//create and append the login page structure
document.body.style.fontFamily = 'Arial, sans-serif';
document.body.style.backgroundColor = 'Yellow';



//Container
const container = document.createElement('div')
container.style.maxWidth = '400px'
container.style.margin = '100px auto'
container.style.padding = '20px'
container.style.backgroundColor = '#f9f9f9'
container.style.boxShadow = '0 0 10px rgba(0,0,0,0.1)';
container.style.borderRadius = '8px'
document.body.appendChild(container)

//Title
const title = document.createElement('h2');
title.textContent = 'Login';
title.style.textAlign = 'center'
container.appendChild(title);

//create a form
const  form = document.createElement('form');
container.appendChild(form)

//username field
const usernameGroup = document.createElement('div')
usernameGroup.style.marginBottom ='15px'
form.appendChild(usernameGroup)

const usernameLabel = document.createElement('label')
usernameLabel.textContent = 'UserName';
usernameLabel.style.display = 'block'
usernameLabel.style.marginBottom = '5px'
usernameGroup.appendChild(usernameLabel)

const usernameInput = document.createElement('input');
usernameInput.type = 'text';
usernameInput.style.width = '95%';
usernameInput.style.padding = '10px'
usernameInput.style.border = '1px solid #ccc'
usernameInput.style.borderRadius = '4px'
usernameInput.required = true;
usernameGroup.appendChild(usernameInput)

//passwoord fields
const passwordGroup = document.createElement('div')
passwordGroup.style.marginBottom = '15px'
form.appendChild(passwordGroup)

const passwordLabel = document.createElement('label')
passwordLabel.textContent = 'password';
passwordLabel.style.display = 'block'
passwordLabel.style.marginBottom = '5px'
passwordGroup.appendChild(passwordLabel)

const passwordInput = document.createElement('input');
passwordInput.type = 'password'
passwordInput.style.width = '95%'
passwordInput.style.padding = '10px'
passwordInput.style.border = '1px solid #ccc'
passwordInput.style.borderRadius = '4px'
passwordInput.required = true;
passwordGroup.appendChild(passwordInput)

//Login Button 
const loginButton = document.createElement('button')
loginButton.textContent = 'Login'
loginButton.type = 'submit'
loginButton.style.width = '100%'
loginButton.style.padding = '10px'
loginButton.style.backgroundColor = '#28a745'
loginButton.style.color = '#ffffff'
loginButton.style.border = 'none'
loginButton.style.borderRadius = '4px'
loginButton.style.cursor = 'pointer'
loginButton.style.fontSize = '16px'
form.appendChild(loginButton);

//check if credentials exists in localStorage

let specifiedUsername = localStorage.getItem('username') || "admin";
let specifiedPassword = localStorage.getItem('password') || "1234";

//function to update credentails in localStorage

const updateCredentials = (newUsername , newPassword) =>{
    localStorage.setItem('username', newUsername);
    localStorage.setItem('password', newPassword);
}

//event listener for form submission

form.addEventListener('submit', (event)=>{
    event.preventDefault();

    const username = usernameInput.value;
    const password = passwordInput.value;

    if(username === specifiedUsername && password === specifiedPassword){
        alert('login success')
        usernameInput.value = ""
        passwordInput.value = ""

        form.remove();

        const successMsg = document.createElement('p');
        successMsg.textContent = 'You are now logged  in!';
        successMsg.style.textAlign = 'center'
        successMsg.style.color = 'green'
        container.appendChild(successMsg)
    }else{
        alert('invalid')
    }
});

// this is for updating new credentials

const updateButton  =  document.createElement('button');
updateButton.textContent = 'Update Credentials';
updateButton.style.marginTop = '15px';
updateButton.style.display = 'block';
updateButton.style.width = '100%';
updateButton.style.padding = '10px';
updateButton.style.backgroundColor = '#007bff';
updateButton.style.color = '#ffffff';
updateButton.style.border = 'none';
updateButton.style.borderRadius = '4px';
updateButton.style.cursor = 'pointer';
updateButton.style.fontSize = '16px';
container.appendChild(updateButton);

updateButton.addEventListener('click', ()=>{
    const newUsername = prompt('enter new username');
    const newPassword = prompt('enter new password');

    if(newUsername && newPassword){
        updateCredentials(newUsername, newPassword);
        alert('credentials updated successfully!');
        specifiedUsername = newUsername;
        specifiedPassword = newPassword;
        alert('updated successfully!!!')
    }else{
        alert('Both fields are required')
    }
})