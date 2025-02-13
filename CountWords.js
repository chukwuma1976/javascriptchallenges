function countWords(sentence) {
    const words = sentence.split(/\s+/);
    const occurrences = {};
    for (const word of words) {
        if (!occurrences[word])
            occurrences[word] = 1;
        else occurrences[word]++
    }
    return occurrences;
}

const sentence = "Jeong Nyeon has no money or education, but she is a Mokpo girl with a talent for singing. Her dream is to join a women’s traditional theater company, and make it big. But she has a lot to learn and a long way to go before becoming a lead actor. Will Jeong Nyeon achieve her dream of becoming a big star and getting rich? Written by MyDramaList.";
console.log(countWords(sentence));