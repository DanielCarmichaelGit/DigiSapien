const {personalities} = require('../Personalities/_data_personalities.js')

class Person {
    constructor (personality, charicteristics) {
        this.personality = personality;
        this.charicteristics = charicteristics;
    }
}

function generatePersonality() {
    const randFloat = Math.random() * 101;
    var statistical_personality = "";

        if ( randFloat <= 2.1 && randFloat > 0 ) {
            statistical_personality = "intj";
        }
        else if ( randFloat <= 5.4 && randFloat > 2.1 ) {
            statistical_personality = "intp";
        }
        else if ( randFloat <= 7.2 && randFloat > 5.4 ) {
            statistical_personality = "entj";
        }
        else if ( randFloat <= 10.4 && randFloat > 7.2 ) {
            statistical_personality = "entp";
        }
        else if ( randFloat <= 11.9 && randFloat > 10.4 ) {
            statistical_personality = "infj";
        }
        else if ( randFloat <= 16.3 && randFloat > 11.9 ) {
            statistical_personality = "infp";
        }
        else if ( randFloat <= 24.4 && randFloat > 16.3 ) {
            statistical_personality = "enfp";
        }
        else if ( randFloat <= 36 && randFloat > 24.4 ) {
            statistical_personality = "istj";
        }
        else if ( randFloat <= 49.8 && randFloat >36 ) {
            statistical_personality = "isfj";
        }
        else if ( randFloat <= 58.5 && randFloat > 49.8 ) {
            statistical_personality = "estj";
        }
        else if ( randFloat <= 70.5 && randFloat > 58.5 ) {
            statistical_personality = "esfj";
        }
        else if ( randFloat <= 75.9 && randFloat > 70.5 ) {
            statistical_personality = "istp";
        }
        else if ( randFloat <= 84.7 && randFloat > 75.9 ) {
            statistical_personality = "isfp";
        }
        else if ( randFloat <= 89 && randFloat > 84.7 ) {
            statistical_personality = "estp";
        }
        else if ( randFloat <= 97.5 && randFloat > 89 ) {
            statistical_personality = "esfp";
        }
        else if ( randFloat <= 100.0 && randFloat > 97.5 ) {
            statistical_personality = "enfj";
        }

    return statistical_personality;
}

function generateTraitsMale() {

    const randHair = Math.random() * 101;
    const randHeight = Math.random() * 101;
    var hair_color = "";
    var height = 0;

    // calculate hair
    if ( randHair <= 85 && randHair > 0 ) {
        hair_color = "black";
    }
    else if ( randHair <= 96 && randHair > 85 ) {
        hair_color = "brown";
    }
    else if ( randHair <= 98 && randHair > 96 ) {
        hair_color = "blonde";
    }
    else if ( randHair <= 98 && randHair > 99 ) {
        hair_color = "red";
    }
    else if ( randHair <= 100 && randHair > 99 ) {
        hair_color = "white";
    }

    // calculate height
    if ( randHeight <= 1 && randHeight > 0 ) {
        height = 63;
    }
    else if ( randHeight <= 4 && randHeight > 1 ) {
        height = 64;
    }
    else if ( randHeight <= 8 && randHeight > 4 ) {
        height = 65;
    }
    else if ( randHeight <= 14 && randHeight > 8 ) {
        height = 66;
    }
    else if ( randHeight <= 21 && randHeight > 14 ) {
        height = 67;
    }
    else if ( randHeight <= 33 && randHeight > 21 ) {
        height = 68;
    }
    else if ( randHeight <= 50 && randHeight > 33 ) {
        height = 69;
    }
    else if ( randHeight <= 67 && randHeight > 50 ) {
        height = 70;
    }
    else if ( randHeight <= 79 && randHeight > 97 ) {
        height = 71;
    }
    else if ( randHeight <= 86 && randHeight > 79 ) {
        height = 72;
    }
    else if ( randHeight <= 92 && randHeight > 86 ) {
        height = 73;
    }
    else if ( randHeight <= 96 && randHeight > 92 ) {
        height = 74;
    }
    else if ( randHeight <= 99 && randHeight > 96 ) {
        height = 75;
    }
    else if ( randHeight <= 100 && randHeight > 99 ) {
        height = 76;
    }
}

const digiSapien = new Person(
    generatePersonality(),
    {
        "hair": "blonde",
        "skin_color": "white"
    }
);


console.log(digiSapien)