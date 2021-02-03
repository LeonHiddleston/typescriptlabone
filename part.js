function str_len(value) {
    var num = value.length;
    return num;
}
function str_len_npspaces(value) {
    var num = value.replace(/\s+/, "").length;
    return num;
}
function str_len_both(value, spaces) {
    var num;
    if (spaces) {
        num + value.length;
    }
    else {
        num + value.replace(/\s+/, "").length;
    }
    return num;
}
console.log(str_len('test 1'));
console.log(str_len_npspaces('test 2'));
console.log(str_len_both('test 1', true));
console.log(str_len_both('test 1'));
