function* objectEntries(obj) {
    const propKeys = Object.keys(obj);
    for (const propKey of propKeys) {
        yield [propKey, obj[propKey]];
    }
}
 
const jane = { first: 'Jane', last: 'Doe' };
for (const [key,value] of objectEntries(jane)) {
    console.log(`${key}: ${value}`);
}

// output

// first: Jane
// last: Doe
