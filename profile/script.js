let user = JSON.parse(localStorage.getItem('users'));
console.log(user[0]);

// if (!user || !user.tokengen) {
    
//     window.location.href = '../index.html';
// }

    const fullname = document.getElementById('fname');
    const lastname = document.getElementById('lname');
    const fullemail = document.getElementById('email');
    const password = document.getElementById('password');

    fullname.innerText = user[0].firstName;
    lastname.innerText = user[0].lastName;
    fullemail.innerText = user[0].email;
    password.innerText =  user[0].password;


    const logbtn = document.getElementById('logbtn');
    logbtn.addEventListener('click', () => {
        localStorage.removeItem('user');

        setTimeout(() => {
            window.location.href = '../index.html';
        }, 1000);
        
    });