'use strict'

function isUserAdmin(id, users) {
    const user = users.find(u => u.id === id);
    return user.isAdmin;
}

const testUsers = [
    {
        id: 1,
        isAdmin: true
    },

    {
        id: 2,
        isAdmin: false
    }
];

const isAdmin = isUserAdmin(1, testUsers);
// TODO: assert isAdmin is true
console.log(isAdmin);