function caesarEncrypt(msg, shift) {

    const charCodes = []
    for (let i = 0; i < msg.length; i++) {
        charCodes.push(msg[i].charCodeAt(0))
    }

    for (let i = 0; i < charCodes.length; i++) {
        charCodes[i] = charCodes[i] + shift
    }

    let reslut = ""
    for (let i = 0; i < charCodes.length; i++) {
        result = result + String.fromCharCode(charCodes[i])
    }
    
    return result
}

function caeserDecrypt(encryptedMsg, shift) {
    for (let i = 0; i < charCodes.length; index++) {
           caesarEncrypt = caesarEncrypt - shift     
    }
}
const secretMessage = "ATTACK"
const encryptedMessage = caesarEncrypt(secretMessage, 4)


console.log(secretMessage, encryptedMessage, decryptedMessage)
