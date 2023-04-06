const jwt = require('jsonwebtoken');

exports.IsLoginController = (req, res) => {
  const token = req.header('Admin-Token');
  if (!token) return res.status(401).send({ message: 'Access denied. No token provided.' });

  try {
    const decoded = jwt.verify(token, process.env.TOKEN_SECRET_Admin);
    req.user = decoded;
    res.status(200).send({ message: 'Token is valid' });
  } catch (ex) {
    res.status(400).send({ message: 'Invalid token.' });
  }
};