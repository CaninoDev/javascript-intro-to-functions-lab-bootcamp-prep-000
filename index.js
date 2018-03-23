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
  var testString = string
  if (string.toLowerCase === testString) {
    return "I can't hear you!"
  } else 
  if (string.toUpperCase === testString) {
    return "YES INDEED!"
  } else
  if (string === "I love you, Grandma.") {
    return "I love you, too."
  }
}