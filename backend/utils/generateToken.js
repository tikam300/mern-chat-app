import jwt from "jsonwebtoken";

const generateTokenAndSetCookie = (userId,res)=>{
    const  token = jwt.sign({userId},process.env.JWT_SECRET,{
        expiresIn:"15d"
    });
    res.cookie("jwt",token,{
        maxAge:15*24*60*60*1000,//in mili sec
        httpOnly:true, // prevent XSS attacks cross-site scriping attacks
        sameSite:"strict",// CSRF attacks cross-size request forgery attacks
        secure: process.env.NODE_ENV !== "development"
    });
};

export default generateTokenAndSetCookie;