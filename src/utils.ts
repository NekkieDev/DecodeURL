function removeSpecialChars(url: string): string {
    return url.replace(/[?\-]/g, "");

}

function replaceASCIII(url: string): string {
    return url.replace(/%3D|%26/g, match => ({ '%3D': '=', '%26': '&' }[match], ""));
}

export {
    removeSpecialChars,
    replaceASCIII
};