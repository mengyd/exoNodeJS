/**
 * Created by yidon on 04/07/2017.
 */
module.exports = (req, res, next) => {
    console.log(req.originalUrl);
    next();
};
