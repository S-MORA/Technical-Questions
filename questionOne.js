function sortByString(s, t) {
  let string = s.split("");
  let sortBy = t.split("");
  let result = [];
  for (let i = 0; i < sortBy.length; i++) {
    for (let j = 0; j < string.length; j++) {
      if (sortBy[i] === string[j]) {
        result.push(string[j])
      }
    }
  }
  return result.join("");
}
sortByString("weather", "therapyw");