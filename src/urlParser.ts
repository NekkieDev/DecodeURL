import { removeSpecialChars, replaceASCIII } from "./utils";

function createUrlObject(url: string): object {
    const parsedUrl = new URL(url);
    const params = new URLSearchParams(parsedUrl.search);
    const paramsObject = {};

    params.forEach((value, key) => {
        let decodedValue = replaceASCIII(value);
        decodedValue = removeSpecialChars(decodedValue);

        if (key === 't') {
            const tParams = new URLSearchParams(decodedValue);
            const tObject = {};
            tParams.forEach((tValue, tKey) => {
                tObject[tKey] = tValue;
            });
            paramsObject[key] = tObject;
        } else {
            paramsObject[key] = decodedValue;
        }
    });

    return paramsObject;
}

export default createUrlObject;