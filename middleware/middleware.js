module.exports = {
    isValidReg,
    isValidLogin
}

function isValidReg(user) {
    return Boolean(user.name && user.username && user.password)
}

function isValidLogin(user) {
    return Boolean(user.username && user.password)
}