let array = [2, 200, 3, 4, 7, 10, 200, 12, 13, 100, 1000, 1001]

let sorted = array.sort((a, b) => {
  return a - b
})

function binarySearch(arr, val) {
  let low = 0
  let high = arr.length - 1
  let mid = 0
  while (low <= high) {
    mid = Math.floor((high + low) / 2)
    if (arr[mid] == val) {
      return `found it! with a low of: ${low} and high of: ${high}`
    } else if (val > arr[mid]) {
      low = mid + 1
    } else {
      high = mid - 1
    }
  }
  return "couldnt find"
}

console.log(binarySearch(array, 200))

// find if array is a mirror
function mirrorBinary(arr) {
  if (arr.length % 2 == 0) {
    let comparisons = arr.length / 2
    let low = comparisons - 1
    let high = comparisons
    return compare(comparisons, low, high, arr)
  } else {
    let comparisons = Math.floor(arr.length / 2)
    let low = comparisons - 1
    let high = comparisons + 1
    return compare(comparisons, low, high, arr)
  }
}

function compare(comparisons, low, high, arr) {
  let result = true;
  while (comparisons >= 0) {
    if (comparisons == 0) {
      return result
    } else if (arr[low] != arr[high]) {
      return result = false
    } else {
      low -= 1
      high += 1
      comparisons -= 1
    }
  }
  return result
}

let mirrorArray = [1, 2, 3, 4, 5, 3, 2, 1]
console.log(mirrorBinary(mirrorArray))


// TREE

class Node {
  constructor(val, left = null, right = null) {
    this.val = val
    this.right = null
    this.left = null
  }
}
class BST {
  constructor() {
    this.root = null
  }
  push(val) {
    let root = this.root
    if (root === null) {
      this.root = new Node(val)
      return
    }
    let currentNode = root;
    let newNode = new Node(val)
    while (currentNode) {
      if (val < currentNode.value) {
        if (currentNode.left === null) {
          currentNode.left = newNode
          break;
        } else {
          currentNode = currentNode.left
        }
      } else {
        if (currentNode.right === null) {
          currentNode.right = newNode
          break;
        } else {
          currentNode = currentNode.right
        }
      }
    }
  }
}


let bst = new BST();
bst.push(3);
bst.push(2);
bst.push(4);
bst.push(10);
console.log(bst)


function sortedArrToBST(arr) {
  if (!arr.length) return null
  let mid = Math.floor(arr.length / 2)
  let root = new Node(arr[mid])
  root.left = sortedArrToBST(arr.slice(0, mid))
  root.right = sortedArrToBST(arr.slice(mid + 1))
  return root

}

sortedArrToBST([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])