module.exports.errorHandler = (err, res, req, next) => {
  if (res.headersSent) {
    return;
  }
  const status = err.status ?? 500;
  const title = err.message ?? 'Server error';
  res.status(status).send({ errors: [{ status, title }] });
};
