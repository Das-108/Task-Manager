const {CustomAPIError} = require('../errors/customError')
const errorHandlerMiddleware = (err,req,res,next) => {
    if(err instanceof CustomAPIError) {
        return res.status(err.StatusCode).json({ msg: err.message })
    }
}

module.exports = errorHandlerMiddleware