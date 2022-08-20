const jwt = require('jsonwebtoken');

const config = process.env;

const verifyToken = (req,res,next) => {
  let token = req.body.token || req.query.token || req.headers['authorization']

  if(!token){
    return res.status(403).send('토큰이 존재하지 않습니다.')
  }
  try {
    token = token.replace(/^Bearer\s+/, "");
    const decoded = jwt.verify(token, config.TOKEN_KEY);
    req.user = decoded;

  } catch (error) {
    return res.status(401).send('유효하지 않은 정보입니다.')
  }
  return next()
}

module.exports = verifyToken;