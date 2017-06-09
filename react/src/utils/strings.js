import random from "randomstring"

export function randomId() {
    return random.generate({
        length: 6,
        charset: "alphanumeric"
    })
}