// 1) 0
// 2) 1
// 3) 1
// 4) 2
// 5) 3
// 6) 5
// 7) 8
// 8) 13

function fib(num) {
  if (num == 1) {
    return 0
  }
  if (num == 2) {
    return 1
  }
  return fib(num - 1) + fib(num - 2)
}

console.log(fib(30))

function reverseStringInline(str) {
  return result = str.split('').reverse().join('')
}

console.log(reverseStringInline('hello'))

function reverseStringLoop(str) {
  let result = "";
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i]
  }
  return result
}

console.log(reverseStringLoop('hello'))


function mostFreqLetter(str) {
  let counts = [];
  for (let i = 0; i < str.length; i++) {
    let letter = str[i]
    let matchingObject = undefined
    for (let j = 0; j < counts.length; j++) {
      if (counts[j].letter == letter) {
        matchingObject = counts[j]
      }
    }
    if (matchingObject == undefined) {
      matchingObject = {
        letter: letter,
        count: 0
      }
      counts.push(matchingObject)
    }
    matchingObject.count += 1
  }
  return counts
}

console.log(mostFreqLetter("heeeeeelllllo"))


function getFrequency(string) {
  let hash = {};
  for (let i = 0; i < string.length; i++) {
    let letter = string[i]
    if (hash[letter]) {
      hash[letter]++
    } else {
      hash[letter] = 1
    }
  }
  return hash
}

console.log(getFrequency("heeeeeelllllo1888834"))


function areYouAnAnagram(str, str2) {
  let sorted = alphabetize(str)
  let sorted2 = alphabetize(str2)
  if (sorted == sorted2) {
    return true
  }
  return false
}

console.log(areYouAnAnagram("listen", "silent"))

function alphabetize(str) {
  return str.split('').sort().join('')
}


function anagramGrouper(words) {
  let anagrams = {};
  for (let i = 0; i < words.length; i++) {
    let word = words[i]
    let sortedWord = alphabetize(word)
    if (anagrams[sortedWord]) {
      anagrams[sortedWord].push(word)
    } else {
      anagrams[sortedWord] = [word]
    }
  }
  return anagrams
}

function printer(obj) {
  for (key in obj) {
    console.log(obj[key].join())
  }
}

function objSz(obj) {
  let size = 0;
  for (key in obj) {
    if (obj[key]) {
      size++
    }
  }
  return size
}

arr = ['map', 'art', 'how', 'rat', 'tar', 'who', 'pam', 'shoop']
console.log(objSz(anagramGrouper(arr)))


function evalEq(str) {
  let result = 0;
  for (let i = 0; i < str.length; i++) {
    if (i == 0) {
      result += Number(str.charAt(i))
    } else {
      if (str.charAt(i) == "+") {
        result += Number(str.charAt(i + 1))
      }
      if (str.charAt(i) == "-") {
        result -= Number(str.charAt(i + 1))
      }
    }
  }
  return result
}

console.log(evalEq("5-6-2"))


function palindrome(str) {
  let reversed = str.split('').reverse().join('')
  if (reversed == str) {
    return true
  }
  return false
}

console.log(palindrome("mommom"))

function palindrom4(str) {
  let result = false
  for (let i = 0; i < (str.length / 2); i++) {
    if (str[i] == (str[str.length - 1 - i]))
      result = true
  }
  return result
}


function removeSmallest(arr) {
  let smallest = arr[0]
  for (let i = 1; i < arr.length; i++) {
    if (smallest < arr[i] === false) {
      smallest = arr[i]
    }
  }
  let indexofsmallest = arr.findIndex(item => item == smallest)
  let spliced = arr.splice(indexofsmallest, 1)
  return arr
}
removeSmallest([52, 2, 3, 4, 0, 10, 0])

function remove(arr) {
  let smallest = Math.min(...arr)
  arr.splice(arr.indexOf(smallest), 1)
  return arr
}
remove([52, 2, 3, 4, 0, 10, 0])

function flipEndChars(str) {
  let arr = str.split('');
  let firstchar = arr[0]
  let lastchar = arr[arr.length - 1]
  arr[0] = lastchar
  arr[arr.length - 1] = firstchar
  return arr.join('')
}
flipEndChars("Cat, dog, and mouse.")

function indexOfCaps(str) {
  let arr = []
  for (let i = 0; i < str.length; i++) {
    let char = str[i]
    if (char == char.toUpperCase() && Number.isInteger(parseInt(char)) === false && char !== " ") {
      arr.push(i)
    }
  }
  return arr
}
let str = "H 3 83l"
indexOfCaps(str)