

module.exports = {
    handleError(err, req, res, next) {
        if(err.message.includes('duplicate')) {
            err.statusCode = 409;
        }
        return res.status(err.statusCode || 500).json({message: err.message});
    }
}