const errorHandler = (err, req, res, next) => {
  console.error(err);

  if (err instanceof Joi.ValidationError) {
    return res.status(400).json({ error: err.details[0].message });
  }

  if (err.message === 'Employee not found') {
    return res.status(404).json({ error: err.message });
  }

  if (err.message.includes('already exists')) {
    return res.status(409).json({ error: err.message });
  }

  res.status(500).json({ error: 'Internal server error' });
};

module.exports = errorHandler;
