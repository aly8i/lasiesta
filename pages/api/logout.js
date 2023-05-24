import { setCookie } from "cookies-next";
const handler = async(req, res) => {

  setCookie('accessToken',"",{req,res,path:'/',maxAge:0,httpOnly:true,sameSite:"strict"});
    res.status(200).json("logged out");
}
export default handler;