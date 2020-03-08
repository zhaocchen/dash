function showCase(val) {
    switch (val) {
        case 'A':
            console.log('Case A');
            break;
        case 'B':
            console.log('Case B');
            break;
        case undefined:
            console.log('undefied');
            break;
        default:
            console.log('Do not know', val);
    }
}

showCase(new String('A'))

// Do not know [String: 'A']