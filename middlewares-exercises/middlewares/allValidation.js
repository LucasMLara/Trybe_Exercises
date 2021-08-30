const validateEmail = (req, res, next) =>{
  const {email} = req.body
  
  const emailPattern = /\b[\w.-]+@[\w.-]+\.\w{2,4}\b/gi; // *https://regexr.com/2ri2c *//
  const validEmail = email.match(emailPattern);
  
  if(!validEmail) return res.status(400).json({message:"Invalid Data"})
  
  next()
  
  }
  
  const validateUser = (req, res, next) => {
  const { user } = req.body;
  
  const validUser = user.length > 3;
  
  if(!validUser) return res.status(400).json({message:"Invalid Data"})
  
  next()
  }
  
  const validatePassword = (req, res, next) => {
    const { password } = req.body;
    
    const validPassword = password.length > 3 && password.length < 9 ;
  
    if(!validPassword) return res.status(400).json({message:"Invalid Data"})
    next()
    
  }

  module.exports={
    validateUser,
    validateEmail,
    validatePassword
  }