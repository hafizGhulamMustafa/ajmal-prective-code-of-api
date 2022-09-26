const {check,validationResult} = require('express-validator');


exports.validateSignInRequest=[
    check('name')
    .notEmpty()
    .withMessage('Name Must be Something'),
];


exports.validateSignupRequest=[
    check('name')
    .notEmpty()
    .withMessage('Name Must be Something'),
];

exports.isRequestValidated=(req,res,next)=>{
const errors=validationResult(req);
if(errors.array().length>0)
{
    return res.status(400).json({error:errors.array()[0].msg})
}
next();
}