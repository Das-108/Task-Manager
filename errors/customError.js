
class CustomAPIError extends Error{
    constructor (message,StatusCode){
        super(message)
        this.StatusCode = StatusCode
    }
}

const createCustomError = (msg, StatusCode) => {
    return new CustomAPIError(msg,StatusCode)
}

module.exports = { createCustomError, CustomAPIError}