const jwt = require('jsonwebtoken');

const GetDataAdminController = (req, res) => {
  const token = req.headers.authorization.split(' ')[1];
  try {
    const decoded = jwt.verify(token, process.env.TOKEN_SECRET_Admin);
    res.json({
      firstName: decoded.firstName,
      lastName: decoded.lastName,
      email: decoded.email
    });
  } catch (error) {
    res.status(401).json({ error: 'Unauthorized' });
  }
};

module.exports = GetDataAdminController;
