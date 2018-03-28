function isBalanced(string) {
    let stack = []
    let brackets = {
        '{': '}',
        '(': ')',
        '[': ']'
    }
    let rightBracket = ['}', ')', ']']

    for (let i = 0; i < string.length; i++) {
        let char = string[i]
        if (brackets[char]) {
            stack.push(char)
        }  else if (rightBracket.includes(char)) {
            if (brackets[stack.pop()] !== char) {
                return false
            }
        }
    }

    if (stack.length === 0) {
        return true
    } else {
        return false
    }
}
