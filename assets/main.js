const Users = [
    {
        id: 1,
        email: 'jade@gmail.com',
        password: '123456',
        isActive: true,
    },
    {
        id: 2,
        email: 'jane@gmail.com',
        password: '123456',
        isActive: true,
    },
    {
        id: 3,
        email: 'john@gmail.com',
        password: '123456',
        isActive: false,
    },
    {
        id: 4,
        email: 'jake@gmail.com',
        password: '123456',
        isActive: false,
    },
    {
        id: 5,
        email: 'joe@gmail.com',
        password: '123456',
        isActive: false,
    },
];

document.getElementById('login-form').addEventListener('submit', (e) => {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const userExist = Users.find(user => user.email === email);

    if (userExist) {
        alert('User exist');
        if (userExist.password === password) {
            alert('Login Success');
        } else {
            alert('Password is incorrect');
        }
    } else {
        alert('User does not exist');
    }
});