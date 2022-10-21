const {personalities} = require('../Personalities/_data_personalities.js')

class Person {
    constructor (personality, charicteristics) {
        this.personality = personality;
        this.charicteristics = charicteristics;
    }
}

const digiSapien = new Person(
    personalities.intj,
    {
        "hair": "blonde",
        "skin_color": "white"
    }
);


console.log(digiSapien)