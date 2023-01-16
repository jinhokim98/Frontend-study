'use strict';

// JavaScript is synchronous.
// Execute the code block in order after hoisting.
// hoisting: var, function declaration


class UserStorage {
    delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    async loginUser(id, password) {
        await this.delay(2000);
        if (
            (id === 'ellie' && password === 'dream') ||
            (id === 'coder' && password === 'academy')
        ) {
            return id;
        } else {
            return new Error('not found');
        }
    }

    async getRoles(user) {
        await this.delay(1000);
        if (user === 'ellie') {
            return {name: 'ellie', role: 'admin'};
        } else {
            return new Error('no access');
        }
    }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');

/*
userStorage
    .loginUser(id, password)
    .then(userStorage.getRoles)
    .then(user => alert(`Hello ${user.name}, you have a ${user.role} role`))
    .catch(console.log);
*/

async function findUserRole() {
    const user = await userStorage.loginUser(id, password);
    const userInfo = await userStorage.getRoles(user);
    return alert(`Hello ${userInfo.name}, you have a ${userInfo.role} role`);
}

findUserRole().then(console.log);