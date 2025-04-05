const jwt = require("jsonwebtoken");

const createNewToken = (payload) => {
    return jwt.sign({ userId: payload }, 'secret-key', { expiresIn: '10d' });
}

module.exports = { createNewToken }