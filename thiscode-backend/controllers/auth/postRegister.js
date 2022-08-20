const User = require('../../models/user')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')

const postRegister = async (req,res) => {
  try {
   const {username, email,password} = req.body;

   const userExists = await User.exists({ email: email.toLowerCase()})

   if(userExists) {
    return res.status(409).send('해당 이메일로 가입한 이력이 존재합니다.')
   }

   // 비밀번호 암호화
   const encryptedPassword = await bcrypt.hash(password,10);

   // front에서 받은 user정보 저장
   const user = await User.create({
    username,
    email: email.toLowerCase(),
    password: encryptedPassword
   });

   // JWT 생성
   const token = jwt.sign(
    {
    // mongoDB의 자동 생성된 _id 프로퍼티를 가져옴
      userId: user._id,
      email:user.email.toLowerCase()
    },
   process.env.TOKEN_KEY,
   {
    expiresIn: '24h'
   }
   );

   // front로 정보 전송
   res.status(201).json({
    userData: {
      email: user.email,
      token,
      username: user.username
    }
   })


  } catch (error) {
    return res.status(500).send('회원가입에 실패하였습니다. 다시 시해도해주세요.')
  }
}

module.exports = postRegister;

