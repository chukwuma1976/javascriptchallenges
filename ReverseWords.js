function reverseWords(sentence) {
    const words = sentence.split(' ');
    return words.reverse().join(' ');
}

console.log(reverseWords('Video games is what got me interested in programming'));
console.log(reverseWords('Even though I majored in evolutionary biology in college, I continued to pursue programming as a hobby. I later enrolled in Devslopes Web Academy to turn my hobby into a profession where I learned frontend end technologies.'));
console.log(reverseWords('Full Stack Web Developer | Bachelor\'s Degree in Evolutionary Biology | Certified Pharmacy Technician | Turning my programming hobby into a profession'));