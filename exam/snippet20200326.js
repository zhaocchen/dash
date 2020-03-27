function user(obj) {
    obj.name='a'
    obj = new Object()
    obj.name = 'b'
}

let person = new Object()
user(person)
console.log(person.name);

// a