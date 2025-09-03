let inputMorse = [0];
let totalMorse = [0];
const MORSE: { [key: string]: string } = {
    '12': 'A',
    '2111': 'B',
    '2121': 'C',
    '211': 'D',
    '1': 'E',
    '1121': 'F',
    '221': 'G',
    '1111': 'H',
    '11': 'I',
    '1222': 'J',
    '212': 'K',
    '1211': 'L',
    '22': 'M',
    '21': 'N',
    '222': '0',
    '1221': 'P',
    '2212': 'Q',
    '121': 'R',
    '111': 'S',
    '2': 'T',
    '112': 'U',
    '1112': 'V',
    '122': 'W',
    '2112': 'X',
    '2122': 'Y',
    '2211': 'Z'
}
let decodedText = "";

function checkMorse() {
    const key = inputMorse.slice(1).join('');
    const letter = MORSE[key];

    if(letter) {
        decodedText += letter;
        basic.showString(decodedText)
    }
}

input.onButtonPressed(Button.A, function() {
    inputMorse.push(1);
    checkMorse();
})

input.onButtonPressed(Button.B, function() {
    inputMorse.push(2);
    checkMorse();
})

input.onButtonPressed(Button.AB, function() {
    // confirm letter
})

input.onLogoEvent(TouchButtonEvent.Pressed, function() {
    // space
}) 

input.onLogoEvent(TouchButtonEvent.LongPressed, function() {
    // backspace
})

input.onGesture(Gesture.Shake, function() {
    // print all
})