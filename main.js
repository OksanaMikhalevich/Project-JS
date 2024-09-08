fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => {
        return response.json()
    })
    .then(usersData => {

        let usersDataWrap = document.createElement('div');
        usersDataWrap.classList.add('users');
        document.body.appendChild(usersDataWrap);

        for (let userData of usersData) {

            let userDataWrap = document.createElement('div');
            userDataWrap.classList.add('user');

            let reference = document.createElement('a');
            reference.innerHTML = `<strong>${userData.id} - ${userData.name}</strong>`;
            reference.href = `./user-details.html?details=${JSON.stringify(userData)}`;

            userDataWrap.appendChild(reference);
            usersDataWrap.appendChild(userDataWrap);

        }
    })