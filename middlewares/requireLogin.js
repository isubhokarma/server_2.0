module.exports = (req, res, next) => {
  //here next is the operation done callback
  if (!req.user) {
    return res.status(401).send({ error: "you must login" });
  }

  next();
};
