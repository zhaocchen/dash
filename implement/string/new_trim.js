function new_trim(origin_str, target_str) {
    target_str = origin_str.replace(/^\s|\s$/g, "")
    return target_str;
}

function new_trim_left(origin_str) {
    target_str = origin_str.replace(/^\s/g, "");
    return target_str;
}

function new_trim_right(origin_str) {
    target_str = origin_str.replace(/\s$/g, "");
    return target_str;
}

console.log(' hello '.trim(), 'hello '.trim(), ' hello'.trim())
console.log(
    new_trim(' hello '),
    new_trim('hello '),
    new_trim(' hello'),
)
console.log(
    new_trim_left(' hello '),
    new_trim_left('hello '),
    new_trim_left(' hello'),
)
console.log(
    new_trim_right(' hello '),
    new_trim_right('hello '),
    new_trim_right(' hello'),
)