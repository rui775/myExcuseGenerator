const words = {
    'who': ["The dog", "My grandma", "His turtle", "My bird"],
    'action': ["ate", "peed", "crushed", "broke"],
    'what': ["my homework", "the keys", "the car"],
    'when': ["before the class", "right on time", "when I finished", "during my lunch", "while I was praying"]
}

const who = () => {
    return words['who'][Math.floor(Math.random() * words['who'].length)];
}

const action = () => {
    return words['action'][Math.floor(Math.random() * words['action'].length)];
}

const what = () => {
    return words['what'][Math.floor(Math.random() * words['what'].length)];
}

const when = () => {
    return words['when'][Math.floor(Math.random() * words['when'].length)];
}

const myExcuse = () => {
    return `${who()} ${action()} ${what()} ${when()}.`; 
}

console.log(myExcuse());