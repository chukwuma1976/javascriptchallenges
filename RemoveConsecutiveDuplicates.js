function removeDuplicates(strg) {
    let ptr1 = 0;
    let ptr2 = 1;
    const str = strg.toLowerCase();
    let uniqArr = [str[0]];

    if (str.length === 1) return str;
    while (ptr2 < str.length) {
        if (str[ptr1] === str[ptr2]) {
            ptr2++;
        }
        if (str[ptr1] !== str[ptr2]) {
            uniqArr.push(str[ptr2]);
            ptr1 = ptr2;
            ptr2 = ptr1 + 1;
        }
    }

    console.log(uniqArr.join(''));
    return uniqArr.join('');
}

removeDuplicates('flibbertigibbet');
removeDuplicates('Aardvark');
removeDuplicates('giggling');
removeDuplicates('senselessness');