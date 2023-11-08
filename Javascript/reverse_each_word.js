const reverseWordsInSentence = (sentence) => {
    const reversedSentence = sentence
        .split(' ')
        .map(word => word.split('').reverse().join(''))
        .join(' ');

    return reversedSentence;
}

// Example usage:
const inputSentence = "Hello world";
const reversedSentence = reverseWordsInSentence(inputSentence);
console.log(reversedSentence); // Output: "olleH dlrow"
