/**
 *logrequest.js
 */

module.exports = async (req, res, next) => {
  // start writing your code from here do not remove above code
  console.log(`request baseURL -> ${req.baseURL}`);
  console.log(`request route-> ${req.route}`);
  return next();
};
