// handle asys error
// handle Precaution form server crash 
// If you did not pass required input then sever will br crash but when we use promise then it mange error 


module.exports = (theFunc) => (req, res, next) => {
    Promise.resolve(theFunc(req, res, next)).catch(next);
  };
