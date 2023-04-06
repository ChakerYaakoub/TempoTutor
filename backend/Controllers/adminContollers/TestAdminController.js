const jwt = require('jsonwebtoken');

const TestAdminController = (req, res, next) => {


  // if(!req.headers.authorization){
  //   res.status(401).json({ error: 'Unauthorized' });

  // }
  const token = req.headers.authorization.split(' ')[1];

  try {
    const decoded = jwt.verify(token, process.env.TOKEN_SECRET_Admin);

    if (!decoded.isAdmin) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    next();
  } catch (error) {
    res.status(401).json({ error: 'Unauthorized' });
  }
};

module.exports = TestAdminController;
