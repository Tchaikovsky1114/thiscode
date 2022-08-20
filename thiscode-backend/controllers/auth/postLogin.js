const User = require('../../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const postLogin = async(req,res) => {
  try {
    const {email,password} = req.body;

    
    const user = await User.findOne({email: email.toLowerCase() });

    if(user && bcrypt.compareSync(password, user.password)){
      // JWT token 발급
      const token = jwt.sign(
        {
        // mongoDB의 자동 생성된 _id 프로퍼티를 가져옴
          userId: user._id,
          email:user.email.toLowerCase()
        },
       process.env.TOKEN_KEY,
       {
        expiresIn: '24h'
       });

      return res.status(200).json({
        userData: {
          email,
          token,
          username:user.username
        }
      })
    }
    return res.status(400).send('입력하신 정보는 유효하지 않은 정보입니다.')
  }catch(err){
    return res.status(500).send('로그인에 실패하였습니다. 다시 시도해주세요')
  }
}

module.exports = postLogin;