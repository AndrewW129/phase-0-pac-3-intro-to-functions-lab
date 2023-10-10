function shout(string) {
    logShout(string.toUpperCase())
    return string.toUpperCase(); //'HELLO!'
}


function whisper(string) {
    logWhisper(string.toLowerCase())
    return string.toLowerCase();//'hello'
}


function logShout(string) {
    console.log(string.toUpperCase())
}


function logWhisper(string) {
    console.log(string.toLowerCase())
}


const string = "hello!";

console.log(string);
console.log(string.toUpperCase());

console.log(string === string.toUpperCase());


function sayHiToHeadphonedRoommate(string) {
    const lowerCase = "I can't hear you!";
    const upperCase = "YES INDEED!";
    const letsGo = "I would love to!";
    if (string.toLowerCase(string) === string) {
        return lowerCase;
    }
    else if (string.toUpperCase(string) === string) {
        return upperCase;
    }
    else if ("Let's have dinner together!" === string) {
        return letsGo;
    }
}