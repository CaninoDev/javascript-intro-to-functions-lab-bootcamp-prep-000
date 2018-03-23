function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  console.log(shout(string))
}
function logWhisper(string) {
  console.log(whisper(string))
}

function sayHiToGrandma(string) {
  if (string.toLowerCase === string) {
    return 'I can\'t hear you'
  }
  if (string.toUpperCase === string) {
    string = 'YES INDEED!'
    return string
  }
  if (string === "I love you, Grandma.") {
    string = 'I love you, too.'
    console.log(string)
  }
}