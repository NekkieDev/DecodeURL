function removeSpecialChars(str) {
    return str.replace(/[?\-]/g, "");

}

function replaceASCIII(str) {
    return str.replace(/%3D|%26/g, match => ({ '%3D': '=', '%26': '&' }[match]));
}

export {
    removeSpecialChars,
    replaceASCIII
};