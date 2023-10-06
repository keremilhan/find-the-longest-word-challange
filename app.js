const findLongestWord = (sentence) => {
    if (typeof sentence !== 'string') {
        console.error('The parameter is not a string! Please use a string as a parameter');
        return;
    }
    if (sentence.trim().length < 1) {
        console.error('The parameter should not be an empty string!');
        return;
    }

    let longestWord = '';
    const words = sentence.replace(/\s+/g, ' ').trim().split(' ');
    for (let word of words) {
        word = word.replace(/[^a-zA-Z\s]+/g, '');
        if (word.length > longestWord.length) {
            longestWord = word;
        } else if (word.length === longestWord.length && countVowels(word) > countVowels(longestWord)) {
            longestWord = word;
        }
    }
    return longestWord;
};

const countVowels = (word) => {
    const count = word.match(/[aeiou]/gi)?.length || 0;
    return count;
};