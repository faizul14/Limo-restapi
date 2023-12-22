const trackerPatch = (req, res, next) => {
    console.log(`Execute\n=> method ${req.method}\n=> path ${req.path}\n`);    
    next()
}
module.exports = trackerPatch;