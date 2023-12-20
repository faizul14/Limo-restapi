const catchError = (err, req, res, next) => {
    res.status(500).json({
        message: 'Server error',
        code: 500,
        error: err.message,
    })
    next()
}

module.exports = catchError;